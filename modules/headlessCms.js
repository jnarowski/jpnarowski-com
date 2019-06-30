import Prismic from 'prismic-javascript'
import PrismicDom from 'prismic-dom' // importing the Dom
import PrismicConfig from '../prismic.config.js'

const getApi = async function () {
  const api = await Prismic.getApi(PrismicConfig.apiEndpoint)
  return api
}

const dataToPost = (post) => {
  return {
    post,
    title: getRichText(post.data.blog_post_title),
    content: getRichText(post.data.blog_content)
  }
}

const getRichText = (content) => {
  return PrismicDom.RichText.asText(content)
}

export const getPost = async function (uid) {
  const api = await getApi()
  const post = await api.getByUID('blog-post', uid)

  return dataToPost(post)
}

export const getPosts = async function () {
  const api = await getApi()

  const results = await api.query(
    Prismic.Predicates.at('document.type', 'blog-post'), {
      lang: 'en-us'
    },
    {
      pageSize: 5,
      page: 1,
      orderings: '[blog-post.published desc]'
    }
  )

  return results.results.map(d => dataToPost(d))
}
