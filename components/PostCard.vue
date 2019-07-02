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
    imageUrl() {
      if (!this.featuredImage) {
        return ''
      }
      return this.featuredImage.url
    },
  },
}
</script>

<template>
  <div class="card">
    <a href="post.html">
      <div v-if="!featuredImage.url">
        <div
          class="text-center"
          style="height: 217px; width: 355px; background: #ECECEC; color: #1B5594"
        >
          <i class="fas fa-book" style="font-size: 7em; margin-top: 55px"></i>
        </div>
      </div>
      <img v-if="featuredImage.url" class="img-fluid" :src="imageUrl" alt />
    </a>
    <div class="card-block">
      <h2 class="card-title">
        <nuxt-link :to="slug">
          {{ title }}
        </nuxt-link>
      </h2>
      <h4 v-if="subtitle" class="card-text">
        {{ subtitle }}
      </h4>
      <div class="metafooter">
        <div class="wrapfooter">
          <span class="meta-footer-thumb">
            <a href="author.html">
              <img
                class="author-thumb"
                src="//0.gravatar.com/avatar/803a0ad71889f0e001ee5b90e71ed48c?s=80"
                alt="JP"
              />
            </a>
          </span>
          <span class="author-meta">
            <span class="post-name">
              <a href="author.html">JP Narowski</a>
            </span>
            <br />
            <span class="post-date">{{ published | formatDate }}</span>
            <span class="dot"></span>
            <span class="post-read">{{ readTime }} min read</span>
          </span>
          <span class="post-read-more">
            <a href="post.html" title="Read Story">
              <svg class="svgIcon-use" width="25" height="25" viewBox="0 0 25 25">
                <path
                  d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z"
                  fill-rule="evenodd"
                />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
