<script>
import { asText } from '@/modules/headlessCms'

const GoodreadsBookCard = () => import('@/components/GoodreadsBookCard')

export default {
  components: {
    GoodreadsBookCard,
  },
  props: {
    slice: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    asText,
  },
}
</script>

<template>
  <div class="post-part single slice--booklist">
    <div v-for="(item, index) in slice.items" :key="index">
      <div v-if="!item.book_goodreads_id">
        <a :href="item.book_link.url">{{ asText(item.book_title) }}</a>
        - {{ asText(item.book_author) }}
      </div>
      <goodreads-book-card v-if="item.book_goodreads_id" :id="item.book_goodreads_id" :item="item" />
    </div>
  </div>
</template>

<style>
.slice--booklist {
  margin: 0 0 1.5rem 0;
}
</style>
