<script>
export default {
  props: {
    url: {
      type: String,
      default: '',
    },
  },
  computed: {
    image() {
      return '@/assets/img/avatars/NathanLatka.jpg'
    },
  },
}
</script>

<template>
  <picture>
    <slot />
  </picture>
</template>
