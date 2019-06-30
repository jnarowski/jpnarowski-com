<script>
import { getPosts } from './../modules/headlessCms'

export default {
  async asyncData() {
    const posts = await getPosts()

    return { posts }
  }
}
</script>

<template>
  <div>
    <div v-for="post in posts" :key="post.uid">
      <nuxt-link :to="post.uid">
        {{ post.title }}
      </nuxt-link>
    </div>
  </div>
</template>
