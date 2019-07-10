<script>
import { getCuriosities } from './../modules/headlessCms'
const CuriosityCard = () => import('@/components/CuriosityCard')

export default {
  head() {
    return {
      title: 'My Curiosities',
    }
  },
  components: {
    CuriosityCard,
  },
  computed: {
    results() {
      return this.collection.results || []
    },
  },
  async asyncData() {
    const collection = await getCuriosities()

    return { collection }
  },
}
</script>

<template>
  <div>
    <div class="container">
      <div class="mainheading">
        <p
          class="lead mb-0"
        >This is a collection of topics and thoughts that I have found interesting.</p>
      </div>
      <section class="featured-posts">
        <div class="section-title">
          <h2>
            <span>My Curiosities</span>
          </h2>
        </div>
        <div class="listrecent">
          <b-row>
            <b-col v-for="(post, index) in results" :key="post.uid" lg="4" sm="12">
              <curiosity-card :lazy="true" :index="index" v-bind="post" />
            </b-col>
          </b-row>
        </div>
      </section>
    </div>
  </div>
</template>
