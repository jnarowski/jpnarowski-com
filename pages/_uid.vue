<script>
import { getPost } from '@/modules/headlessCms'

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
      // if (process.client) window.prismic.setupEditButton()

      return post
    } catch (e) {
      console.log('[ERROR] in _uid.asyncData', e)

      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  }

}
</script>

<template>
  <div v-html="content" />
</template>
