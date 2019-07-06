<script>
import dayjs from 'dayjs'
const AvatarImage = () => import('@/components/AvatarImage')

export default {
  components: {
    AvatarImage,
  },
  filters: {
    formatDate: (value) => {
      if (!value) {
        return dayjs().format('ddd MMMM D, YYYY')
      }
      return dayjs(value).format('ddd MMMM D, YYYY')
    },
  },
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    published: {
      type: String,
      default: '',
    },
    readTime: {
      type: String,
      default: '',
    },
    slug: {
      type: String,
      default: '',
    },
    featuredImage: {
      type: Object,
      default: () => ({}),
    },
    lazy: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    thumbnailUrl() {
      if (!this.featuredImage) {
        return ''
      }
      return this.featuredImage.Thumbnail.url
    },
    imageUrl() {
      if (!this.featuredImage) {
        return ''
      }
      return this.featuredImage.url
    },
    ariaLabel() {
      return 'Read more about ' + this.title
    },
  },
}
</script>

<template>
  <div class="card" style="margin-bottom: 20px;">
    <nuxt-link :aria-label="ariaLabel" :to="'/' + slug">
      <div v-if="!featuredImage.url">
        <div
          class="text-center"
          style="height: 217px; width: 355px; background: #ECECEC; color: #1B5594"
        >
          <fa :icon="['fas', 'fa-book']" style="font-size: 7em; margin-top: 55px" />
        </div>
      </div>
      <div class="post-image--container">
        <img v-if="!lazy" :src="thumbnailUrl" :alt="'Read the '+title+' post'" class="post-image" />
        <img v-if="lazy" v-lazy="thumbnailUrl" :alt="'Read the '+title+' post'" class="post-image" />
      </div>
    </nuxt-link>
    <div class="card-block">
      <h2 class="card-title">
        <nuxt-link :aria-label="ariaLabel" :to="'/' + slug">{{ title }}</nuxt-link>
      </h2>
      <h4 v-if="subtitle" class="card-text">{{ subtitle | truncate(75) }}</h4>
      <div class="metafooter">
        <div class="wrapfooter">
          <span class="meta-footer-thumb">
            <avatar-image alt class="author-thumb"></avatar-image>
          </span>
          <span class="author-meta">
            <span class="post-name">
              <a>JP Narowski</a>
            </span>
            <br />
            <span class="post-date">{{ published | formatDate }}</span>
            <span class="dot"></span>
            <span class="post-read">{{ readTime }} min read</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.post-image--container {
  width: 100%;
  height: 237px;
}
.post-image--container img {
  width: 100%;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

.post-image:before {
  content: ' ';
  display: block;
  position: absolute;
  top: 0px;
  left: 0;
  /* height: calc(100% + 10px); */
  height: 237px;
  width: 100%;
  background-color: rgb(230, 230, 230);
  border-radius: 5px;
}

.post-image:after {
  content: 'LOADING...';
  display: block;
  font-size: 16px;
  font-style: normal;
  color: rgb(100, 100, 100);
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;
  text-align: center;
}
</style>
