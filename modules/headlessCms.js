import Prismic from 'prismic-javascript'
import PrismicDom from 'prismic-dom' // importing the Dom
import PrismicConfig from '../prismic.config.js'

const getApi = async function () {
  const api = await Prismic.getApi(PrismicConfig.apiEndpoint)
  return api
}

export const getText = (content) => {
  if (!content) {
    return ''
  }

  return PrismicDom.RichText.asText(content)
}

export const getHtml = (content) => {
  return PrismicDom.RichText.asHtml(content)
}

const getReadTime = (body) => {
  const totalWords = body.trim().split(/\s+/).length
  const timeToRead = totalWords / 200

  return Math.round(timeToRead).toString()
}

const dataToPost = (post) => {
  const body = getHtml(post.data.body)
  const readTime = getReadTime(body)

  return {
    post,
    slug: post.uid,
    tags: post.tags,
    readTime,
    featuredImage: post.data.featured_image,
    title: getText(post.data.title),
    subtitle: getText(post.data.subtitle),
    published: post.data.published || post.first_publication_date,
    body
  }
}

export const getPost = async function (uid) {
  const api = await getApi()
  const post = await api.getByUID('blog-post', uid)

  return dataToPost(post)
}

export const getPosts = async function () {
  const api = await getApi()

  // Prismic.Predicates.at('document.tags', ['featured'])
  const resp = await api.query([
    Prismic.Predicates.at('document.type', 'blog-post'),
    Prismic.Predicates.at('my.blog-post.post-type', 'Post')
  ], {
    pageSize: 9,
    page: 1,
    orderings: '[my.blog-post.published desc]'
  })

  return resp.results.map(d => dataToPost(d))
}
