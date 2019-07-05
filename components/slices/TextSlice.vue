<script>
import { asHtml } from '@/modules/headlessCms'

export default {
  props: {
    slice: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    asHtml,
  },
}
</script>

<template>
  <div class="post-part single">
    <div v-html="asHtml(slice.primary.text)"></div>
  </div>
</template>
