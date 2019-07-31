<script>
export default {
  components: {},
  head() {
    return {
      title: 'My Resume',
    }
  },
  created() {},
}
</script>

<template>
  <div class="container container-resume">
    <b-row class="margin-spacer">
      <b-col cols="1">
        <img class="headshot" src="~/assets/img/jp-headshot.jpg" />
      </b-col>
      <b-col>
        <h3 class="mb-0 mt-1">John Paul Narowski</h3>
        <div class="text-muted">CTO & Fullstack Developer</div>
      </b-col>
    </b-row>
    <b-row class="main--section margin-spacer padding-spacer margin-spacer-bottom">
      <b-col cols="9">
        <div class="float-left">
          <fa :icon="['fas', 'fa-book']" />
        </div>
        <div>
          <div class="float-left">
            <fa class="section--icon" :icon="['fas', 'user']"></fa>
          </div>
          <div class="section--right">
            <h3>Profile</h3>
            <p>Fundamentally, I’m an entrepreneur. After pooling years of real world experience in marketing, business development and management, my journey led me to karmaCRM, a web-based SAAS CRM company with a product I engineered to fit the needs of small businesses. I chose the name “Karma” because I’m a big believer in good things coming around to those who dispense good vibes out into the world.</p>
          </div>
        </div>
        <div class="margin-spacer">
          <div class="float-left">
            <fa class="section--icon" :icon="['fas', 'briefcase']"></fa>
          </div>
          <div class="section--right">
            <h3>Employement History</h3>
            <div class="employment--wrapper">
              <h4 class="mb-0 employment--header">Clickflow</h4>
              <div class="employment--date text-muted">July 2016 - Present</div>
              <ul class="employment--bullets">
                <li>Designed core application architecture (VueJS + Ruby API)</li>
                <li>Implemented performant serverless javascript library to execute test rules</li>
                <li>Launched data-science backed microservices to enhance the data model</li>
                <li>Helped conduct customer development interviews to achieve product/market fit</li>
              </ul>
            </div>
            <div class="employment--wrapper">
              <h4 class="mb-0 employment--header">KarmaCRM</h4>
              <div class="employment--date text-muted">January 2011 - March 2019</div>
              <ul class="employment--bullets">
                <li>Designed and built entire architecture (BackboneJS + Ruby API)</li>
                <li>Lead the company to grow to over $25k MRR</li>
                <li>Managed offshore dev teams</li>
                <li>Hired and mentored JR developers</li>
                <li>Oversaw growth to over 6,000 users</li>
              </ul>
            </div>
            <div class="employment--wrapper">
              <h4 class="mb-0 employment--header">Amish Tables</h4>
              <div class="employment--date text-muted">May 2003 - February 2017</div>
              <ul class="employment--bullets">
                <li>Helped grow the company from $60k to $1.5 million in 3 years</li>
                <li>Built custom e-commerce platform specially designed for the custom complexity of the furntiure</li>
                <li>Created custom backend reports and workflows to streamline processes</li>
                <li>Migrated site to Shopify and built custom workflow apps on Shopify</li>
              </ul>
            </div>
            <div class="employment--wrapper">
              <h4 class="mb-0 employment--header">MetaSpring</h4>
              <div class="employment--date text-muted">May 2005 - April 2008</div>
              <ul class="employment--bullets">
                <li>Did technical sales, closing $100k in new revenue monthly</li>
                <li>Hired and grew our dev team from 0 to 10</li>
                <li>Handled all core software architecture implemention of each client project</li>
                <li>Coded and launched over 20 custom web applications</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="employment--wrapper">
          <div class="float-left">
            <fa class="section--icon" :icon="['fas', 'graduation-cap']"></fa>
          </div>
          <div class="section--right">
            <h3>Education</h3>
            <div>Bachelors Degree - Washtenaw Community College - 2003</div>
          </div>
        </div>
        <div class="employment--wrapper">
          <div class="float-left">
            <fa class="section--icon" :icon="['fas', 'bullhorn']"></fa>
          </div>
          <div class="section--right">
            <h3>References</h3>
            <div>Available upon request</div>
          </div>
        </div>
      </b-col>
      <b-col cols="3">
        <div class="details--wrapper">
          <h4>Details</h4>
          <div>87 W. Cedar Ave</div>
          <div>Denver CO, 80223</div>
          <div class="mt-2">(734) 931-0116‬</div>
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
            <div class="d-none d-print-block skill--percent">95%</div>
            <div class="d-print-none">
              <b-progress :value="95" :max="100" show-progress></b-progress>
            </div>
          </div>
          <div class="mb-3">
            <div class="mb-1">
              <strong class="text-muted">Product</strong>
            </div>
            <div class="d-none d-print-block skill--percent">91%</div>
            <div class="d-print-none">
              <b-progress :value="91" :max="100" show-progress></b-progress>
            </div>
          </div>
          <div class="mb-3">
            <div class="mb-1">
              <strong class="text-muted">Leadership</strong>
            </div>
            <div class="d-none d-print-block skill--percent">90%</div>
            <div class="d-print-none">
              <b-progress :value="90" :max="100" show-progress></b-progress>
            </div>
          </div>
          <div class="mb-3">
            <div class="mb-1">
              <strong class="text-muted">Management</strong>
            </div>
            <div class="d-none d-print-block skill--percent">85%</div>
            <div class="d-print-none">
              <b-progress :value="85" :max="100" show-progress></b-progress>
            </div>
          </div>
          <div>
            <div class="mb-1">
              <strong class="text-muted">Marketing</strong>
            </div>
            <div class="d-none d-print-block skill--percent">40%</div>
            <div class="d-print-none">
              <b-progress :value="40" :max="100" show-progress></b-progress>
            </div>
          </div>
        </div>
        <div class="technical--wrapper margin-spacer">
          <h4>Technical</h4>
          <div class="skills--header">Frontend</div>
          <div class="technical--item">
            <div class="technical--years">3 yrs</div>
            <div class="technical--name">React/Redux</div>
          </div>
          <div class="technical--item">
            <div class="technical--years">2 yrs</div>
            <div class="technical--name">VueJS</div>
          </div>
          <div class="technical--item">
            <div class="technical--years">2 yrs</div>
            <div class="technical--name">Angular</div>
          </div>
          <div class="technical--item">
            <div class="technical--years">7 yrs</div>
            <div class="technical--name">BackboneJS</div>
          </div>
          <div class="technical--item">
            <div class="technical--years">4 yrs</div>
            <div class="technical--name">Webpack</div>
          </div>
          <div class="skills--header">Backend</div>
          <div class="technical--item">
            <div class="technical--years">10 yrs</div>
            <div class="technical--name">Ruby</div>
          </div>
          <div class="technical--item">
            <div class="technical--years">10 yrs</div>
            <div class="technical--name">Rails (since 1.x)</div>
          </div>
          <div class="technical--item">
            <div class="technical--years">10 yrs</div>
            <div class="technical--name">MySQL</div>
          </div>
          <div class="technical--item">
            <div class="technical--years">3 yrs</div>
            <div class="technical--name">PostgreSQL</div>
          </div>
          <div class="technical--item">
            <div class="technical--years">3 yrs</div>
            <div class="technical--name">Elasticsearch</div>
          </div>
          <div class="skills--header">Server</div>
          <div class="technical--item">
            <div class="technical--years">3 yrs</div>
            <div class="technical--name">Docker</div>
          </div>
          <div class="technical--item">
            <div class="technical--years">6 mo</div>
            <div class="technical--name">Kubernetes</div>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<style lang="scss">
.container-resume {
  .main--section {
    border-top: 1px solid whiteSmoke;
  }
  .details--label {
    text-transform: uppercase;
    font-size: 0.8em;
  }
  .employment--wrapper {
    margin-top: 1rem;
  }
  .employment--bullets {
    margin-top: 0.5rem;
  }
  .headshot {
    border-radius: 3px;
    height: 75px;
  }
  .margin-spacer {
    margin-top: 2rem;
  }
  .padding-spacer {
    padding-top: 2rem;
  }
  .margin-spacer-bottom {
    margin-bottom: 2rem;
  }
  .container-resume {
    width: 600px;
  }
  .employment--header {
    color: #0861b4;
  }
  .technical--years {
    float: right;
    font-weight: 600;
    color: #07b575;
  }
  .technical--name {
    font-weight: 600;
  }
  .technical--item {
    border-top: 1px solid whiteSmoke;
    padding-top: 0.5rem;
    margin-top: 0.5rem;
  }
  .skill--percent {
    font-size: 1.3em;
  }
  .skills--header {
    margin-top: 1rem;
    font-size: 0.8em;
    font-weight: 600;
    color: #666;
    text-align: right;
    text-transform: uppercase;
  }
  .section--icon {
    font-size: 1.2em;
    margin-top: 8px;
  }
  .section--right {
    margin-left: 32px;
  }
}
</style>
