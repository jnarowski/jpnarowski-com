<script>
import { asHtml } from '@/modules/headlessCms'

const CodeSlice = () => import('@/components/slices/CodeSlice')
const QuoteSlice = () => import('@/components/slices/QuoteSlice')
const TextSlice = () => import('@/components/slices/TextSlice')
const ImageCaptionSlice = () => import('@/components/slices/ImageCaptionSlice')
const BookListSlice = () => import('@/components/slices/BookListSlice')

export default {
  components: {
    BookListSlice,
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
  methods: {
    asHtml,
  },
}
</script>

<template>
  <div>
    <div v-if="body && body.length" v-html="asHtml(body)"></div>
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
      <template v-else-if="slice.slice_type === 'list_of_books'">
        <book-list-slice :slice="slice"></book-list-slice>
      </template>
      <template v-else-if="1 == 2">
        <pre>{{ slice.slice_type }}</pre>
      </template>
    </section>
  </div>
</template>
