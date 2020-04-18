<script>
const ResumeSide = () => import('@/components/ResumeSide')
const ResumeHeader = () => import('@/components/ResumeHeader')

// Inspiration
// https://resume.io/app/auth/sign-up/templates
export default {
  components: {
    ResumeSide,
    ResumeHeader,
  },
  head() {
    return {
      title: "John Paul Narowski's Resume",
    }
  },
  created() {},
}
</script>

<template>
  <div class="container container-resume">
    <resume-header />
    <b-row class="main--section margin-spacer padding-spacer margin-spacer-bottom">
      <b-col sm="12" md="9" lg="9">
        <div>
          <div class="float-left">
            <fa class="section--icon" :icon="['fas', 'user']"></fa>
          </div>
          <div class="section--right">
            <h3>Profile</h3>
            <p>
              I have been building full-stack web-apps for over 15 years. I love the elegance of
              clean code, and the excitement of designing engaging products. Throughout my career, I have very intentionally invested in nurturing
              both CTO and CEO skills. My core value lies in my ability to tie business value to code,
              only building what’s necessary, and building it right the first time.
            </p>
            <p>
              I’ve managed teams of people, and I’ve built complex distrubed mico-service systems
              entirely myself. I can be a direct producer, manager, or technical liaison depending
              on the needs of the project.
            </p>
          </div>
        </div>
        <div class="margin-spacer">
          <div class="float-left">
            <fa class="section--icon" :icon="['fas', 'briefcase']"></fa>
          </div>
          <div class="section--right">
            <h3>Employment History</h3>
            <div class="employment--wrapper">
              <h5 class="mb-0 employment--header">
                CTO and Co-founder at Clickflow
              </h5>
              <div class="employment--date text-muted">
                July 2016 - Present
              </div>
              <ul class="employment--bullets">
                <li>Designed core application architecture (VueJS + Ruby API)</li>
                <li>Created performant puppeteer based crawling engine for scalable daily crawling of hundreds of websites</li>
                <li>Architected RabbitMQ based microservice communication system for complex multi-step data processing flows</li>
                <li>Implemented performant serverless javascript library to execute test rules</li>
                <li>Launched data-science backed microservices to enhance the data model</li>
                <li>Helped conduct customer development interviews and user testing to achieve product/market fit</li>
              </ul>
            </div>
            <div class="employment--wrapper">
              <h5 class="mb-0 employment--header">
                CEO at KarmaCRM
              </h5>
              <div class="employment--date text-muted">
                January 2011 - March 2019
              </div>
              <ul class="employment--bullets">
                <li>Designed and built entire architecture (BackboneJS + Ruby API)</li>
                <li>Lead the company to over $25k in MRR growth</li>
                <li>Managed a team of in-house and offshore developers</li>
                <li>Hired and mentored JR developers</li>
                <li>Oversaw user expansion to over 6,000</li>
              </ul>
            </div>
            <div class="employment--wrapper">
              <h5 class="mb-0 employment--header">
                CEO at Amish Tables
              </h5>
              <div class="employment--date text-muted">
                May 2003 - February 2017
              </div>
              <ul class="employment--bullets">
                <li>Helped grow the company from $60k to $1.5 million in 3 years</li>
                <li>Built custom e-commerce platform specially designed for the custom complexity of the furniture</li>
                <li>Created custom backend reports and workflows to streamline processes</li>
                <li>Migrated site to Shopify and built custom workflow apps on Shopify</li>
              </ul>
            </div>
            <div class="employment--wrapper">
              <h5 class="mb-0 employment--header">
                CTO and Co-founder at MetaSpring
              </h5>
              <div class="employment--date text-muted">
                May 2005 - April 2008
              </div>
              <ul class="employment--bullets">
                <li>Did technical sales, closing $100k in new revenue monthly</li>
                <li>Hired and grew our dev team from 0 to 10</li>
                <li>Handled all core software architecture implementation of each client project</li>
                <li>Coded and launched over 20 custom web applications</li>
              </ul>
            </div>
          </div>
        </div>
        <div style="display: none" class="employment--wrapper">
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
      <b-col lg="3" md="3" sm="auto">
        <resume-side />
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
  .top-gray-border {
    border-top: 1px solid whiteSmoke;
  }
}
</style>
