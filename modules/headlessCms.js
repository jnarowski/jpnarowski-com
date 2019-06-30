import Prismic from 'prismic-javascript'
import PrismicDom from 'prismic-dom' // importing the Dom
import PrismicConfig from '../prismic.config.js'

const getApi = async function () {
  const api = await Prismic.getApi(PrismicConfig.apiEndpoint)
  return api
}

export const getText = (content) => {
  return PrismicDom.RichText.asText(content)
}

export const getHtml = (content) => {
  return PrismicDom.RichText.asHtml(content)
}

const dataToPost = (post) => {
  // eslint-disable-next-line no-console
  // console.log(post, '.....')
  return {
    post,
    uid: post.uid,
    title: getText(post.data.blog_post_title),
    content: getHtml(post.data.blog_content)
  }
}

export const getPost = async function (uid) {
  const api = await getApi()
  const post = await api.getByUID('blog-post', uid)

  return dataToPost(post)
}

export const getPosts = async function () {
  const api = await getApi()

  const resp = await api.query(
    Prismic.Predicates.at('document.type', 'blog-post'), {
      lang: 'en-us'
    }
  )

  return resp.results.map(d => dataToPost(d))
}
