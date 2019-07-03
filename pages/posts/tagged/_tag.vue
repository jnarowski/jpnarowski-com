<script>
import { getPostsByTag } from '@/modules/headlessCms'
import PostCard from '@/components/PostCard'

export default {
  components: {
    PostCard,
  },
  head() {
    return {
      title: this.title,
    }
  },
  async asyncData(context) {
    const { params, error } = context

    try {
      const tag = params.tag
      const title = "Viewing posts tagged: '" + params.tag + "'"
      const posts = await getPostsByTag(params.tag)

      return { posts, tag, title }
    } catch (e) {
      console.log('[ERROR] in _uid.asyncData', e)
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>

<template>
  <div>
    <div class="container">
      <section class="featured-posts mt-4">
        <div class="section-title">
          <h2>
            <span>
              Posts Tagged
              <strong>{{ tag }}</strong>
            </span>
          </h2>
        </div>
        <div class="card-columns listrecent">
          <post-card v-for="post in posts" :key="post.uid" v-bind="post"></post-card>
        </div>
      </section>
    </div>
  </div>
</template>
