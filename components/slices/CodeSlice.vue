<script>
import { asText } from '@/modules/headlessCms'
const CodeHighlight = () => import('@/components/CodeHighlight')

export default {
  components: {
    CodeHighlight,
  },
  props: {
    slice: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    language() {
      return (this.slice.primary.code_language || '').toLowerCase()
    },
  },
  methods: {
    asText,
  },
}
</script>

<template>
  <div class="post-part single code-highlight">
    <code-highlight :language="language" :code="asText(slice.primary.code)" />
  </div>
</template>

<style lang="scss">
.code-highlight {
  margin: 0 0 1.5rem 0;
}
.code-highlight pre {
  margin-bottom: 0px;
  font-size: 0.7em;
}
.code-highlight pre code {
  padding: 15px;
  -webkit-border-radius: 0.25rem;
  -moz-border-radius: 0.25rem;
  border-radius: 0.25rem;
}
</style>
