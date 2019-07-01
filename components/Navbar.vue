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
            <nuxt-link to="/about-me" class="nav-link">
              About Me
            </nuxt-link>
          </li>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<style>
</style>
