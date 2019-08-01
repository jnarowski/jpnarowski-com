<script>
import { fetchBook } from '@/modules/goodreads'
export default {
  props: {
    id: {
      type: String,
      default: '',
    },
    item: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({
    book: {},
  }),
  computed: {
    loading() {
      return !this.book.id
    },
    authors() {
      if (this.loading) {
        return ''
      }

      if (!this.book.authors.author.length) {
        return this.book.authors.author.name
      }

      return this.book.authors.author
        .map((b) => {
          return b.name
        })
        .join(' and ')
    },
  },
  created() {
    fetchBook(this.id, { axios: this.$axios }).then((resp) => {
      this.book = resp
    })
  },
}
</script>

<template>
  <div class="goodreads-book">
    <b-row>
      <b-col cols="2">
        <div class="float-right">
          <img class="goodreads-book--image" :src="book.small_image_url" />
        </div>
      </b-col>
      <b-col cols="10">
        <div v-if="loading">
          Fetching book...
        </div>
        <div v-if="!loading" class="goodreads-book--title">
          <a v-if="item.book_link.url" :href="item.book_link.url">{{ book.title }}</a>
          <a v-if="!item.book_link.url" :href="book.link">{{ book.title }}</a>
        </div>
        <div class="goodreads-book--author">
          {{ authors }}
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<style>
.goodreads-book {
  margin-bottom: 10px;
  border-top: 1px solid whiteSmoke;
  padding: 10px;
}
.goodreads-book--title {
  font-size: 1.1em;
}
.goodreads-book--image {
  border: 1px solid whiteSmoke;
}
.goodreads-book--author {
  font-size: 0.9em;
  color: #ccc;
}
</style>
