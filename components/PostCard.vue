<script>
import dayjs from 'dayjs'
export default {
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
  <div class="card">
    <nuxt-link :aria-label="ariaLabel" :to="'/' + slug">
      <div v-if="!featuredImage.url">
        <div
          class="text-center"
          style="height: 217px; width: 355px; background: #ECECEC; color: #1B5594"
        >
          <fa :icon="['fas', 'fa-book']" style="font-size: 7em; margin-top: 55px" />
        </div>
      </div>
      <img v-lazy="thumbnailUrl" :alt="title + ' Post Image'" />
    </nuxt-link>
    <div class="card-block">
      <h2 class="card-title">
        <nuxt-link :aria-label="ariaLabel" :to="'/' + slug">
          {{ title }}
        </nuxt-link>
      </h2>
      <h4 v-if="subtitle" class="card-text">
        {{ subtitle | truncate(75) }}
      </h4>
      <div class="metafooter">
        <div class="wrapfooter">
          <span class="meta-footer-thumb">
            <img
              class="author-thumb"
              src="//0.gravatar.com/avatar/803a0ad71889f0e001ee5b90e71ed48c?s=80"
              alt="JP"
            />
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
