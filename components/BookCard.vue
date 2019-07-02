<script>
export default {
  props: {
    review: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    author() {
      return (this.book && this.book.authors && this.book.authors.author) || {}
    },
    book() {
      return (this.review && this.review.book) || {}
    },
  },
}
</script>

<template>
  <b-card class="book-card">
    <div class="left float-left">
      <img :src="book.small_image_url" />
    </div>
    <div class="right">
      <div class="title">
        <a :href="book.link">{{ book.title | truncate(70) | sanitize }}</a>
      </div>
      <div class="author">
        <a :href="author.link">{{ author.name }}</a>
      </div>
    </div>
    <div class="book-meta">
      <div v-if="review.read_at" class="read">
        Read {{ review.read_at | formatDate }}
      </div>
      <div
        v-if="!review.read_at && review.started_at"
        class="started"
      >
        Started {{ review.started_at | formatDate }}
      </div>
    </div>
  </b-card>
</template>

<style scoped lang="scss">
.book-card {
  font-size: 0.8em;
  min-height: 160px;
  min-width: 275px;
  margin-bottom: 20px;
}
.book-meta {
  border-top: 1px solid whitesmoke;
  margin-top: 7px;
  padding-top: 7px;
  color: rgba(0, 0, 0, 0.44);
  position: absolute;
  bottom: 10px;
  min-width: 275px;
}
.right {
  margin-left: 70px;
}
.title {
  a {
    font-size: 1.1em;
    color: #5f5f5f;
    font-weight: 600;
  }
}
.author {
  // position: absolute;
  // bottom: 10px;
  margin-top: 5px;
  a {
    color: #ccc;
  }
}
</style>
