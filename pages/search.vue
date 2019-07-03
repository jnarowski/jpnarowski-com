<script>
import PostCard from '@/components/PostCard'
import { searchPosts } from '@/modules/headlessCms'

export default {
  components: {
    PostCard,
  },
  head() {
    return {
      title: 'Viewing All Posts',
    }
  },
  async asyncData(context) {
    const { query, error } = context

    try {
      const term = query.term
      const title = "Viewing posts with search: '" + term + "'"
      const list = await searchPosts(term)

      return { list, term, title }
    } catch (e) {
      console.log('[ERROR] in _uid.asyncData', e)
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  methods: {
    async onPaginate(page) {
      this.list = await searchPosts(this.term, { page })
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
            <span>Search results for the term "{{ term }}"</span>
          </h2>
        </div>
        <div class="card-columns listrecent">
          <post-card v-for="item in list.results" :key="item.id" v-bind="item"></post-card>
        </div>
        <b-pagination
          v-if="list.total_results_size > list.results_per_page"
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
