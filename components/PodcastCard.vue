<script>
const BasePicture = () => import('@/components/BasePicture')

export default {
  components: {
    BasePicture,
  },
  props: {
    date: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    images: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<template>
  <b-card no-body class="mb-3">
    <b-row class="h-100 no-gutters">
      <b-col cols="1" class="d-none d-sm-block">
        <div class="podcast-item--left d-flex align-items-center justify-content-center h-100">
          <fa style="font-size: 3em; color: #0096ab" :icon="['fas', 'podcast']" />
        </div>
      </b-col>
      <b-col cols="11" style="padding: 10px;">
        <div v-if="images.length" class="float-right d-none d-sm-block">
          <base-picture
            v-for="image in images"
            :key="image"
            :image="image"
            class="img-fluid podcast-item--avatar"
          />
        </div>
        <div v-if="$slots.avatar" class="float-right d-none d-sm-block">
          <slot name="avatar"></slot>
        </div>
        <a class="podcast-item--title" target="_BLANK" :href="link">{{ title }}</a>
        <div class="podcast-item--subtitle">
          {{ subtitle }}
        </div>
        <div class="podcast-item--date">
          {{ date }}
        </div>
      </b-col>
    </b-row>
  </b-card>
</template>

<style>
.podcast-item--left {
  background: whiteSmoke;
  border-right: 1px solid rgba(0, 0, 0, 0.125);
  padding: 10px;
}
.podcast-item--right {
  padding: 10px;
}
.podcast-item--icon {
  background: whiteSmoke;
  border-right: 1px solid rgba(0, 0, 0, 0.125);
  padding: 10px;
}
.podcast-item--title {
  font-size: 1.2em;
}
.podcast-item--date {
  color: rgba(0, 0, 0, 0.44);
}
.podcast-item--avatar,
.podcast-item--avatar img {
  border-radius: 50px;
  height: 75px;
  margin-right: 5px;
  width: 75px;
}
</style>
