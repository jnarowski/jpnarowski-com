<script>
import BasePicture from '@/components/BasePicture'

export default {
  components: {
    BasePicture,
  },
  props: {
    url: {
      type: String,
      default: '',
    },
  },
}
</script>

<template>
  <base-picture>
    <source :srcset="require('~/assets/img/avatars/JP.png?webp')" type="image/webp" />
    <source :srcset="require('~/assets/img/avatars/JP.png')" type="image/jpeg" />
    <img v-lazy="require('~/assets/img/avatars/JP.png')" alt="John Paul Narowski | Author Image" />
  </base-picture>
</template>
