<script>
import { getPost } from './../modules/headlessCms'

export default {
  async asyncData() {
    const post = await getPost('first-post')
    // eslint-disable-next-line no-console
    console.log(post)
    return post
  }
}
</script>

<template>
  <section class="blog-post">
    <h1 class="title">
      {{ title }}
    </h1>
    <p class="paragraph">
      {{ content }}
    </p>
  </section>
</template>

<style scoped>
.blog-post {
  margin: 25px 0;
  padding: 0 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.title {
  margin: 50px 0;
}

p {
  color: #000;
  margin: 15px 0 5px;
  max-width: 450px;
  line-height: 1.44;
}
</style>
