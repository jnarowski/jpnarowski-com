<template>
  <div class="post-part single">
    <div v-html="$prismic.asHtml(slice.primary.text)"></div>
  </div>
</template>

<script>
export default {
  props: {
    slice: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
