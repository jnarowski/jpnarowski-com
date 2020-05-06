<script>
export default {}
</script>

<template>
  <div>
    <div class="details--wrapper">
      <div class="d-block d-md-none margin-spacer padding-spacer top-gray-border"></div>
      <h4>Details</h4>
      <div>87 W. Cedar Ave</div>
      <div>Denver, CO 80223</div>
      <div class="mt-2">
        ‪(734) 210-1790‬
      </div>
      <div>jp@sourceborn.com</div>
      <div class="mt-2">
        <a href="https://jpnarowski.com">https://jpnarowski.com</a>
        <span class="text-muted details--label">Blog</span>
      </div>
      <div>
        <a href="https://sourceborn.com">https://sourceborn.com</a>
        <span class="text-muted details--label">Portfolio</span>
      </div>
    </div>
    <div class="skills--wrapper margin-spacer">
      <h4>Skills</h4>
      <div class="mb-3">
        <div class="mb-1">
          <strong class="text-muted">Fullstack Development</strong>
        </div>
        <div class="d-none d-print-block skill--percent">
          95%
        </div>
        <div class="d-print-none">
          <b-progress :value="95" :max="100" show-progress></b-progress>
        </div>
      </div>
      <div class="mb-3">
        <div class="mb-1">
          <strong class="text-muted">Product</strong>
        </div>
        <div class="d-none d-print-block skill--percent">
          91%
        </div>
        <div class="d-print-none">
          <b-progress :value="91" :max="100" show-progress></b-progress>
        </div>
      </div>
      <div class="mb-3">
        <div class="mb-1">
          <strong class="text-muted">Leadership</strong>
        </div>
        <div class="d-none d-print-block skill--percent">
          90%
        </div>
        <div class="d-print-none">
          <b-progress :value="90" :max="100" show-progress></b-progress>
        </div>
      </div>
      <div class="mb-3">
        <div class="mb-1">
          <strong class="text-muted">Management</strong>
        </div>
        <div class="d-none d-print-block skill--percent">
          85%
        </div>
        <div class="d-print-none">
          <b-progress :value="85" :max="100" show-progress></b-progress>
        </div>
      </div>
      <div>
        <div class="mb-1">
          <strong class="text-muted">Marketing</strong>
        </div>
        <div class="d-none d-print-block skill--percent">
          40%
        </div>
        <div class="d-print-none">
          <b-progress :value="40" :max="100" show-progress></b-progress>
        </div>
      </div>
    </div>
    <div class="technical--wrapper margin-spacer">
      <h4>Technical</h4>
      <div class="skills--header">
        Frontend
      </div>
      <div class="technical--item">
        <div class="technical--years">
          4 yrs
        </div>
        <div class="technical--name">
          React/Redux
        </div>
      </div>
      <div class="technical--item">
        <div class="technical--years">
          3 yrs
        </div>
        <div class="technical--name">
          VueJS
        </div>
      </div>
      <div class="technical--item">
        <div class="technical--years">
          2 yrs
        </div>
        <div class="technical--name">
          Angular
        </div>
      </div>
      <div class="technical--item">
        <div class="technical--years">
          4 yrs
        </div>
        <div class="technical--name">
          Webpack
        </div>
      </div>
      <div class="skills--header">
        Backend
      </div>
      <div class="technical--item">
        <div class="technical--years">
          10 yrs
        </div>
        <div class="technical--name">
          Ruby
        </div>
      </div>
      <div class="technical--item">
        <div class="technical--years">
          10 yrs
        </div>
        <div class="technical--name">
          Rails (since 1.x)
        </div>
      </div>
      <div class="technical--item">
        <div class="technical--years">
          10 yrs
        </div>
        <div class="technical--name">
          MySQL
        </div>
      </div>
      <div class="technical--item">
        <div class="technical--years">
          3 yrs
        </div>
        <div class="technical--name">
          PostgreSQL
        </div>
      </div>
      <div class="technical--item">
        <div class="technical--years">
          3 yrs
        </div>
        <div class="technical--name">
          Elasticsearch
        </div>
      </div>
      <div class="technical--item">
        <div class="technical--years">
          1 yr
        </div>
        <div class="technical--name">
          Python
        </div>
      </div>
      <div class="technical--item">
        <div class="technical--years">
          1 yr
        </div>
        <div class="technical--name">
          RabbitMQ
        </div>
      </div>
      <div class="skills--header">
        Server
      </div>
      <div class="technical--item">
        <div class="technical--years">
          3 yrs
        </div>
        <div class="technical--name">
          Docker
        </div>
      </div>
    </div>
  </div>
</template>
