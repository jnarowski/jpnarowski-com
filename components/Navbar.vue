<script>
export default {
  methods: {
    submitSearch() {
      this.$refs.searchForm.submit()
    },
  },
}
</script>

<template>
  <b-navbar toggleable="lg" type="light" sticky class="navbar--light">
    <div class="container">
      <nuxt-link class="navbar-brand" to="/">
        JP's Musings
      </nuxt-link>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <li class="nav-item">
            <nuxt-link to="/books" class="nav-link">
              Books
            </nuxt-link>
          </li>
          <li v-if="false" class="nav-item">
            <nuxt-link to="/curiosities" class="nav-link">
              Curiosities
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/about-me" class="nav-link">
              About Me
            </nuxt-link>
          </li>
          <b-nav-form ref="searchForm" action="/search">
            <div class="search-form">
              <div class="search-icon" @click="submitSearch">
                <fa class="search" :icon="['fas', 'search']"></fa>
              </div>
              <b-form-input name="term" size="sm" class="mr-sm-2 search-input" placeholder="Search"></b-form-input>
            </div>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<style lang="scss" scoped>
.search-input {
  border-radius: 20px !important;
}
.search-form {
  position: relative;
}
.search-icon {
  position: absolute;
  right: 15px;
  opacity: 0.6;
  padding: 3px;
  cursor: pointer;
}
</style>
