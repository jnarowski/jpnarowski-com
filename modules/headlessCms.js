import Prismic from 'prismic-javascript'
import PrismicDom from 'prismic-dom' // importing the Dom
import PrismicConfig from '../prismic.config.js'

const getApi = async function () {
  const api = await Prismic.getApi(PrismicConfig.apiEndpoint)
  return api
}

const buildPostQueryOptions = (options) => {
  return Object.assign({}, {
    page: 1,
    pageSize: 9,
    orderings: '[my.blog-post.published desc]'
  }, options)
}

const buildPostList = (resp) => {
  return {
    page: resp.page,
    results_per_page: resp.results_per_page,
    results_size: resp.results_size,
    total_results_size: resp.total_results_size,
    total_pages: resp.total_pages,
    results: resp.results.map(d => dataToPost(d))
  }
}

export const asText = (content) => {
  if (!content) {
    return ''
  }

  return PrismicDom.RichText.asText(content)
}

export const asHtml = (content) => {
  return PrismicDom.RichText.asHtml(content)
}

const getReadTime = (body) => {
  const text = PrismicDom.RichText.asText(body)
  const totalWords = text.trim().split(/\s+/).length
  const timeToRead = totalWords / 200

  return Math.round(timeToRead).toString()
}

const dataToPost = (post) => {
  let body = post.data.simple_body.length ? post.data.simple_body : post.data.body

  if (post.data.body1.length) {
    body = post.data.body1
  }

  const readTime = getReadTime(body)

  return {
    post,
    id: post.id,
    slug: post.uid,
    tags: post.tags,
    readTime,
    featuredImage: post.data.featured_image,
    title: asText(post.data.title),
    subtitle: asText(post.data.subtitle),
    metaDescription: asText(post.data.meta_description || post.data.subtitle),
    published: post.data.published || post.first_publication_date,
    slices: post.data.body1,
    body
  }
}

export const getPost = async function (uid) {
  const api = await getApi()
  const post = await api.getByUID('blog-post', uid)

  return dataToPost(post)
}

export const getPosts = async function (options = {}) {
  const api = await getApi()

  const apiOptions = buildPostQueryOptions(options)

  const resp = await api.query([
    Prismic.Predicates.at('document.type', 'blog-post'),
    Prismic.Predicates.at('my.blog-post.post-type', 'Post')
  ], apiOptions)

  return buildPostList(resp)
}

export const searchPosts = async function (search, options = {}) {
  const api = await getApi()

  const apiOptions = buildPostQueryOptions(options)

  const resp = await api.query([
    Prismic.Predicates.at('document.type', 'blog-post'),
    Prismic.Predicates.at('my.blog-post.post-type', 'Post'),
    Prismic.Predicates.fulltext('document', search)
  ], apiOptions)

  return buildPostList(resp)
}

export const getPostsByTag = async function (tag, options = {}) {
  const api = await getApi()

  const apiOptions = Object.assign({}, {
    page: 1,
    orderings: '[my.blog-post.published desc]'
  }, options)

  const resp = await api.query([
    Prismic.Predicates.at('document.type', 'blog-post'),
    Prismic.Predicates.at('document.tags', [tag])
  ], apiOptions)

  return resp.results.map(d => dataToPost(d))
}
