<script>
import { getPost } from './../modules/headlessCms'

export default {
  components: {
  },
  head() {
    return {
      title: 'Prismic Nuxt.js Blog'
    }
  },
  async asyncData({ params, error, req }) {
    try {
      // Query to get post content
      const post = await getPost(params.uid)

      // Load the edit button
      if (process.client) window.prismic.setupEditButton()

      // Returns data to be used in template
      return post
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('dooooo')

      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  }

}
</script>

<template>
  <div>
    {{ content }}
  </div>
</template>
