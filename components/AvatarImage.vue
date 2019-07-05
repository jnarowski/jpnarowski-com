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
  <base-picture image="img/avatars/JP.png"></base-picture>
</template>
