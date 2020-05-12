<template>
  <div class="recommendation--item">
    <div class="recommedation--header">
      <div class="recommendation--source">
        <img v-if="source == 'linkedin'" src="~/assets/img/linkedin-logo.png" />
        <img v-if="source == 'upwork'" style="border-radius: 5px" src="~/assets/img/upwork-logo.jpeg" />
      </div>
      <div class="recommedation--avatar">
        <base-picture :image="image"></base-picture>
      </div>
      <div class="recommedation--contact">
        <div class="recommedation--title">
          <a :href="link">{{ title }}</a>
        </div>
        <div class="recommedation--date">
          {{ date }}
        </div>
        <div class="recommedation--subtitle">
          {{ subtitle }}
        </div>
      </div>
      <div class="float-clear">
                &nbsp;
      </div>
    </div>
    <div class="recommedation--body">
      <div class="recommedation--body-leftquote">
        <fa class="section--icon" :icon="['fas', 'quote-left']"></fa>
      </div>
      <div class="recommedation--body-inner">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import BasePicture from '@/components/BasePicture'

export default {
  components: {
    BasePicture
  },
  props: [
    'title',
    'link',
    'subtitle',
    'date',
    'body',
    'source',
    'image'
  ]
}
</script>

<style lang="scss">
  .recommendation--item {
    padding-top: 30px;
    padding-bottom: 30px;
    border-bottom: 4px solid whitesmoke;
  }
  .recommedation--header {
    border-bottom: 2px dashed whiteSmoke;
    clear: both;
    padding-bottom: 12px;
    margin-bottom: 12px;
  }
  .recommedation--title {
    font-size: 1.3em;
  }
  .recommedation--date {
    color: #80858c;
  }
  .recommedation--subtitle {
    color: #80858c;
  }
  .recommedation--avatar {
    float: left;
    margin-right: 12px;
  }
  .recommedation--avatar img {
    height: 75px;
    border-radius: 50%;
  }
  .recommedation--contact {
    float: left;
  }
  .recommendation--source {
    float: right;
    img {
      height: 50px;
    }
  }
  .recommedation--body {
    clear: both;
    position: relative;

    p:last-child {
      margin-bottom: 0px;
    }

    .recommedation--body-inner {
      padding-left: 85px;
      padding-right: 85px;
    }

    .recommedation--body-leftquote {
      position: absolute;
      top: -6px;
      left: 30px;
      font-size: 25px;
      opacity: 0.3;
    }

    .recommedation--body-rightquote {
      position: absolute;
      bottom: 22px;
      right: 30px;
      font-size: 25px;
      opacity: 0.3;
    }

  }
</style>
