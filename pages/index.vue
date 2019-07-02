<script>
import { getPosts } from './../modules/headlessCms'
import backgroundImage from '~/assets/img/demopic/1.jpg'
import PostCard from '@/components/PostCard'

export default {
  components: {
    PostCard,
  },
  head() {
    return {
      title:
        "JP's Musings - Exploring the Intersection of Travel, Self Care, and Entrepreneurship.",
    }
  },
  data: () => ({
    backgroundImage,
  }),
  async asyncData() {
    const posts = await getPosts()

    return { posts }
  },
}
</script>

<template>
  <div>
    <div class="container">
      <div class="mainheading">
        <p
          class="lead"
        >
          My thoughts on business, travel, and all the other tidbits life has to offer.
        </p>
      </div>
      <section class="featured-posts">
        <div class="section-title">
          <h2>
            <span>Recent Posts</span>
          </h2>
        </div>
        <div class="card-columns listrecent">
          <post-card v-for="post in posts" :key="post.uid" v-bind="post"></post-card>
        </div>
      </section>
    </div>
  </div>
</template>
