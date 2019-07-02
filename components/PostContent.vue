<script>
const CodeSlice = () => import('@/components/slices/CodeSlice.vue')
const QuoteSlice = () => import('@/components/slices/QuoteSlice.vue')
const TextSlice = () => import('@/components/slices/TextSlice.vue')
const ImageCaptionSlice = () =>
  import('@/components/slices/ImageCaptionSlice.vue')

export default {
  components: {
    CodeSlice,
    ImageCaptionSlice,
    QuoteSlice,
    TextSlice,
  },
  props: {
    body: {
      type: Array,
      default: () => [],
    },
    slices: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<template>
  <div>
    <div v-html="$prismic.asHtml(body)"></div>
    <section v-for="(slice, index) in slices" :key="'slice-' + index">
      <template v-if="slice.slice_type === 'paragraph'">
        <text-slice :slice="slice"></text-slice>
      </template>
      <template v-if="slice.slice_type === 'text'">
        <text-slice :slice="slice"></text-slice>
      </template>
      <template v-if="slice.slice_type === 'code'">
        <code-slice :slice="slice"></code-slice>
      </template>
      <template v-else-if="slice.slice_type === 'quote'">
        <quote-slice :slice="slice"></quote-slice>
      </template>
      <template v-else-if="slice.slice_type === 'image_with_caption'">
        <image-caption-slice :slice="slice"></image-caption-slice>
      </template>
    </section>
  </div>
</template>

resolve: {
  root: [path.resolve(__dirname, ‘src’), path.resolve(__dirname, ‘node_modules’)],
  extensions: [”, ‘.js’, ‘.jsx’, ‘.coffee’]
},
