<script>
export default {}
</script>

<template>
  <b-row class="margin-spacer">
    <b-col>
      <div class="float-left">
        <img class="headshot" src="~/assets/img/jp-headshot.jpg" />
      </div>
      <div style="margin-left: 90px;">
        <div style="margin-top: 7px">
          <div class="float-right d-none d-lg-block d-print-none">
            <ul class="resume-nav nav nav-pills nav-fill">
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/resume" active-class="active">
                  Resume
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/sweet-spot" active-class="active">
                  Sweet Spot
                </nuxt-link>
              </li>
            </ul>
          </div>
          <h3 class="mb-0">
            John Paul Narowski
          </h3>
          <div class="text-muted">
            CTO & Fullstack Developer
          </div>
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<style>
  .resume-nav .nav-link { color: #666; }
</style>
