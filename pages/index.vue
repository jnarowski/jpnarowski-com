<script>
import { getPosts } from './../modules/headlessCms'

const PostCard = () => import('@/components/PostCard')
const PodcastCard = () => import('@/components/PodcastCard')

export default {
  components: {
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
        <div class="card-columnss listrecent">
          <b-row>
            <b-col v-for="(post, index) in results" :key="post.uid" lg="4" sm="12">
              <post-card :lazy="index > 2" :index="index" v-bind="post" />
            </b-col>
          </b-row>
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
            title="Clickflow and Talklaunch"
            subtitle="TalkLaunch w/ Ryan Estes"
            date="May 16th, 2019"
            link="https://www.talklaunch.net/8658/clickflow/"
            :images="['img/avatars/RyanEstes.jpg']"
          />
          <podcast-card
            title="CRM for Speakers Passes $30k in MRR"
            subtitle="Mixergy w/ Nathan Latka"
            date="Jan 23rd, 2019"
            link="https://getlatka.com/companies/karmacrm"
            :images="['img/avatars/NathanLatka.jpg']"
          />
          <podcast-card
            title="How to Achieve Work Life Harmony"
            subtitle="Sustainable Success w/ Chris Salem"
            date="May 3rd, 2018"
            link="https://www.voiceamerica.com/episode/106815/how-to-achieve-work-life-harmony"
            :images="['img/avatars/ChristopherSalem.jpg']"
          />
          <podcast-card
            title="270: John-Paul Narowski, KarmaCRM"
            subtitle="Crack the Customer Code"
            date="August 29th, 2017"
            link="https://www.stitcher.com/podcast/crack-the-customer-code/e/51279896"
            :images="['img/avatars/AdamToporek.jpg', 'img/avatars/JeannieWalters.jpg']"
          />
        </div>
      </section>
    </div>
  </div>
</template>
