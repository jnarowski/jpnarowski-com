<script>
export default {
  props: {
    image: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: 'Image',
    },
  },
}
</script>

<template>
  <picture>
    <template v-if="image">
      <source :srcset="require(`~/assets/${image}?webp`)" type="image/webp" />
      <source :srcset="require(`~/assets/${image}`)" type="image/jpeg" />
      <img v-lazy="require(`~/assets/${image}`)" :alt="alt" />
    </template>
  </picture>
</template>
