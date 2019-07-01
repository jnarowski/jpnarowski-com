<script>
import Navbar from '~/components/Navbar'
export default {
  components: {
    Navbar
  },
  created() {
    this.$store.dispatch('books/loadAll')
  }
}
</script>

<template>
  <div>
    <navbar />
    <nuxt />
  </div>
</template>
