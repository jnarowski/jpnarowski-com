<script>
import { asText } from '@/modules/headlessCms'

export default {
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
  <div class="post-part single">
    <blockquote class="block-quotation">{{ asText(slice.primary.quote) }}</blockquote>
  </div>
</template>

<style lang="sass" scoped>
</style>
