<script>
import { getPosts } from './../modules/headlessCms'
import backgroundImage from '~/assets/img/demopic/1.jpg'

const PostCard = () => import('@/components/PostCard')
const PodcastCard = () => import('@/components/PodcastCard')
const BasePicture = () => import('@/components/BasePicture')

export default {
  components: {
    BasePicture,
    PostCard,
    PodcastCard,
  },
  head() {
    return {
      title:
        "JP's Musings - Exploring the Intersection of Travel, Self Care, and Entrepreneurship.",
      meta: [
        {
          name: 'description',
          content:
            'Read my thoughts on Coding, Leadership, Travel and much more',
        },
      ],
    }
  },
  data: () => ({
    backgroundImage,
  }),
  computed: {
    results() {
      return this.collection.results || []
    },
  },
  async asyncData() {
    const collection = await getPosts()

    return { collection }
  },
}
</script>

<template>
  <div>
    <div class="container">
      <div class="mainheading">
        <p
          class="lead"
        >
          My thoughts on business, travel, and all the other tidbits life has to offer.
        </p>
      </div>
      <section class="featured-posts">
        <div class="section-title">
          <h2>
            <span>Recent Posts</span>
          </h2>
        </div>
        <div class="card-columns listrecent">
          <post-card v-for="post in results" :key="post.uid" v-bind="post"></post-card>
        </div>
        <div class="text-center">
          <nuxt-link class="btn btn-secondary mb-3" to="/posts">
            See all posts
          </nuxt-link>
        </div>
      </section>
      <section class="featured-posts">
        <div class="section-title">
          <h2>
            <span>Recent Podcasts</span>
          </h2>
        </div>
        <div>
          <podcast-card
            title="Clickflow & Talklaunch"
            subtitle="TalkLaunch w/ Ryan Estes"
            date="May 16th, 2019"
            link="https://www.talklaunch.net/8658/clickflow/"
          >
            <template v-slot:avatar>
              <base-picture class="img-fluid podcast-item--avatar">
                <source
                  :srcset="require('~/assets/img/avatars/RyanEstes.jpg' + '?webp')"
                  type="image/webp"
                />
                <source :srcset="require('~/assets/img/avatars/RyanEstes.jpg')" type="image/jpeg" />
                <img v-lazy="require('~/assets/img/avatars/RyanEstes.jpg')" alt="Podcast image" />
              </base-picture>
            </template>
          </podcast-card>
          <podcast-card
            title="CRM for Speakers Passes $30k in MRR"
            subtitle="Mixergy w/ Nathan Latka"
            date="Jan 23rd, 2019"
            link="https://getlatka.com/companies/karmacrm"
          >
            <template v-slot:avatar>
              <base-picture class="img-fluid podcast-item--avatar">
                <source
                  :srcset="require('~/assets/img/avatars/NathanLatka.jpg' + '?webp')"
                  type="image/webp"
                />
                <source :srcset="require('~/assets/img/avatars/NathanLatka.jpg')" type="image/jpeg" />
                <img v-lazy="require('~/assets/img/avatars/NathanLatka.jpg')" alt="Podcast image" />
              </base-picture>
            </template>
          </podcast-card>
          <podcast-card
            title="How to Achieve Work Life Harmony"
            subtitle="Sustainable Success w/ Chris Salem"
            date="May 3rd, 2018"
            link="https://www.voiceamerica.com/episode/106815/how-to-achieve-work-life-harmony"
          >
            <template v-slot:avatar>
              <base-picture class="img-fluid podcast-item--avatar">
                <source
                  :srcset="require('~/assets/img/avatars/ChristopherSalem.jpg' + '?webp')"
                  type="image/webp"
                />
                <source
                  :srcset="require('~/assets/img/avatars/ChristopherSalem.jpg')"
                  type="image/jpeg"
                />
                <img
                  v-lazy="require('~/assets/img/avatars/ChristopherSalem.jpg')"
                  alt="Podcast image"
                />
              </base-picture>
            </template>
          </podcast-card>
          <podcast-card
            title="270: John-Paul Narowski, KarmaCRM"
            subtitle="Crack the Customer Code"
            date="August 29th, 2017"
            link="https://www.stitcher.com/podcast/crack-the-customer-code/e/51279896"
          >
            <template v-slot:avatar>
              <base-picture class="img-fluid podcast-item--avatar">
                <source
                  :srcset="require('~/assets/img/avatars/AdamToporek.jpg' + '?webp')"
                  type="image/webp"
                />
                <source :srcset="require('~/assets/img/avatars/AdamToporek.jpg')" type="image/jpeg" />
                <img v-lazy="require('~/assets/img/avatars/AdamToporek.jpg')" alt="Podcast image" />
              </base-picture>
              <base-picture class="img-fluid podcast-item--avatar">
                <source
                  :srcset="require('~/assets/img/avatars/JeannieWalters.jpg' + '?webp')"
                  type="image/webp"
                />
                <source
                  :srcset="require('~/assets/img/avatars/JeannieWalters.jpg')"
                  type="image/jpeg"
                />
                <img
                  v-lazy="require('~/assets/img/avatars/JeannieWalters.jpg')"
                  alt="Podcast image"
                />
              </base-picture>
            </template>
          </podcast-card>
        </div>
      </section>
    </div>
  </div>
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
</style>
