<script>
const PostCard = () => import('@/components/PostCard')

export default {
  components: {
    PostCard,
  },
  head() {
    return {
      title: 'Viewing All Posts',
    }
  },
  computed: {
    list() {
      return this.$store.getters['posts/list']
    },
  },
  async fetch({ store, query }) {
    const { page } = query
    await store.dispatch('posts/loadAll', { page })
  },
  methods: {
    async onPaginate(page) {
      this.$router.replace({ query: { page } })
      await this.$store.dispatch('posts/loadAll', { page })
    },
  },
}
</script>

<template>
  <div>
    <div class="container">
      <section class="featured-posts mt-4">
        <div class="section-title">
          <h2>
            <span>All Posts</span>
          </h2>
        </div>
        <div class="card-columns listrecent">
          <post-card v-for="item in list.results" :key="item.id" v-bind="item"></post-card>
        </div>
        <b-pagination
          :value="list.page"
          :total-rows="list.total_results_size"
          :per-page="list.results_per_page"
          aria-controls="my-table"
          @change="onPaginate"
        ></b-pagination>
      </section>
    </div>
  </div>
</template>
