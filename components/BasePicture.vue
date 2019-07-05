<script>
export default {
  props: {
    url: {
      type: String,
      default: '',
    },
  },
  computed: {
    imageSrc() {
      return 'img/avatars/NathanLatka.jpg'
    },
  },
}
</script>

<template>
  <picture>
    <slot />
  </picture>
</template>
