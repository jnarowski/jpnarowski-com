<template>
  <div class="post-part single">
    <blockquote class="block-quotation">
      {{ $prismic.asText(slice.primary.quote) }}
    </blockquote>
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

<style lang="sass" scoped>
</style>
