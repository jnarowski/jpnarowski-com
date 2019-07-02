<script>
import BookCard from '@/components/BookCard'

export default {
  loading: false,
  components: {
    BookCard,
  },
  head() {
    return {
      title: 'My Reading List',
    }
  },
  // async asyncData(context) {
  //   return context.fetchReviews()
  //   const data = await $axios.$get('http://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list/15038585.xml', {
  //     params: {
  //       key: '05pAK5L384cTgNJwktUA',
  //       v: 2,
  //       per_page: 200
  //     },
  //     headers: {
  //       'x-requested-with': 'https://jpnarowski.com'
  //     }
  //   })
  //   // const data = await $axios.$get('https://www.goodreads.com/review/list/15038585.xml?key=05pAK5L384cTgNJwktUA&v=2')
  //   const json = parser.parse(data)

  //   return {
  //     reviews: json.GoodreadsResponse.reviews.review
  //   }
  // },
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
}
</script>

<template>
  <div class="container">
    <div v-if="!reviews.length">
      Loading reviews...
    </div>
    <div class="section-title mt-4">
      <h2 class="mb-2">
        <span>Reading</span>
      </h2>
    </div>
    <b-row>
      <b-col v-for="review in reviewsReading" :key="review.id">
        <book-card :review="review"></book-card>
      </b-col>
    </b-row>
    <div class="section-title mt-4">
      <h2 class="mb-2">
        <span>Read</span>
      </h2>
    </div>
    <b-row>
      <b-col v-for="review in reviewsRead" :key="review.id">
        <book-card :review="review"></book-card>
      </b-col>
    </b-row>
  </div>
</template>
