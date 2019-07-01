<script>
import parser from 'fast-xml-parser'

export default {
  loading: false,
  head() {
    return {
      title: 'My Reading List'
    }
  },
  filters: {
    truncate(string, value) {
      return (string || '').substring(0, value) + '…'
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
  data: () => ({
    reviews: []
  }),
  created() {
    return this.fetchReviews()
  },
  methods: {
    truncate(string, value) {
      return (string || '').substring(0, value) + '…'
    },
    async fetchReviews() {
      const data = await this.$axios.$get('http://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list/15038585.xml', {
        params: {
          key: '05pAK5L384cTgNJwktUA',
          v: 2,
          per_page: 200
        },
        headers: {
          'x-requested-with': 'https://jpnarowski.com'
        }
      })
      // const data = await $axios.$get('https://www.goodreads.com/review/list/15038585.xml?key=05pAK5L384cTgNJwktUA&v=2')
      const json = parser.parse(data)

      this.reviews = json.GoodreadsResponse.reviews.review
    }
  }
}
</script>

<template>
  <div class="container">
    <div v-if="!reviews.length">
      Loading reviews...
    </div>
    <div v-for="review in reviews" :key="review.id" style="padding: 10px; border-bottom: 1px solid whiteSmoke">
      <b-row>
        <b-col cols="1">
          <img :src="review.book.small_image_url"></img>
        </b-col>
        <b-col cols="11">
          <div><a target="_BLANK" :href="review.book.link">{{ review.book.title }}</a></div>
          <div v-html="truncate(review.book.description, 200)" />
        </b-col>
      </b-row>
    </div>
  </div>
</template>
