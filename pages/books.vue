<script>
import BookCard from '@/components/BookCard'

export default {
  components: {
    BookCard,
  },
  head() {
    return {
      title: 'My Reading List',
    }
  },
  computed: {
    reviews() {
      return this.$store.getters['books/list']
    },
    reviewsRead() {
      return this.$store.getters['books/listRead']
    },
    reviewsReading() {
      return this.$store.getters['books/listReading']
    },
  },
  created() {
    this.$store.dispatch('books/loadAll')
  },
}
</script>

<template>
  <div class="container">
    <div v-if="!reviews.length" class="mt-4">Loading reviews...</div>
    <template v-if="reviews.length">
      <div class="section-title mt-4">
        <h2 class="mb-2">
          <span>Reading</span>
        </h2>
      </div>
      <b-row class="mt-4">
        <b-col v-for="review in reviewsReading" :key="review.id">
          <book-card :review="review"></book-card>
        </b-col>
      </b-row>
      <div class="section-title mt-4 mb-4">
        <h2 class="mb-2">
          <span>Read</span>
        </h2>
      </div>
      <b-row>
        <b-col v-for="review in reviewsRead" :key="review.id">
          <book-card :review="review"></book-card>
        </b-col>
      </b-row>
    </template>
  </div>
</template>
