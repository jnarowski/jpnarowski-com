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
        <div class="float-left">
          <fa class="section--icon" :icon="['fas', 'bullseye']"></fa>
        </div>
        <div class="section--right">
          <h3>Sweet Spot</h3>
          <ul>
            <li>
              <strong>Business</strong> – Building B2B SAAS products
            </li>
            <li>
              <strong>Timing</strong> – Taking companies from 0 to product/market fit and early scale (1-3 years)
            </li>
            <li>
              <strong>Leadership</strong> – Managing up to 5 developers while still contributing code
            </li>
            <li>
              <strong>Code</strong> – Sr. full stack developer (15 yrs experience) with a specialized focus on front-end JavaScript SPA development
            </li>
          </ul>
          <p>
            To help you best understand my value and provide a clear framework for expectations,
            I’ve outlined what I do well as well as what I’m not so good at. Focusing most of my
            time and energy on my strengths helps in maintaining the consistently high output
            paramount in an early-stage company.
          </p>
        </div>
        <div class="float-left">
          <fa class="section--icon" :icon="['fas', 'seedling']"></fa>
        </div>
        <div class="section--right">
          <h3>
            What I’m good at
          </h3>
          <h4 class="employment--header mt-3">
            Protecting your investment – Strong focus on business value
          </h4>
          <div class="subheader--item">
            <h6 class="subheader--bullet">
              Business ROI focused code
            </h6>
            <p>The code I write will be customer-validated, backed by research, and aligned with business value.</p>
          </div>
          <div class="subheader--item">
            <h6 class="subheader--bullet">
              Best talent for the best price
            </h6>
            <p>Though multiple approaches are possible, hiring dev talent must align with business objectives. I’ve spent hundreds of thousands of dollars and managed hundreds of developers on platforms like Upwork, Toptal, etc., enabling my businesses to stay largely bootstrapped.</p>
          </div>
          <div class="subheader--item">
            <h6 class="subheader--bullet">
              CEO perspective
            </h6>
            <p>
              I have spent my career switching between CEO and CTO roles. I’ve grown an e-commerce company from $60k to $1.5 million in annual revenue. I’ve built sales teams as well as sold directly myself, averaging over 100k in monthly sales while still writing code in the afternoon.
            </p>
          </div>
          <div class="subheader--item">
            <h6 class="subheader--bullet">
              Communication
            </h6>
            <p>
              I can tell you in clear, non-developer(y) language jargon where things stand. Strong, consistent communication and comprehension of business goals save time and money.
            </p>
          </div>
          <div>
            <h6 class="subheader--bullet">
              Process
            </h6>
            <p>
              I rely on well-designed processes and tools to keep things on track. This means Asana, developer sprints, regular one-on-ones, and clean documentation.
            </p>
          </div>
          <h4 class="employment--header mt-3">
            Delivering quality code, fast – Just what you need
          </h4>
          <p>
            I code quickly but meticulously to ensure you a high-quality, well-tested, clean product.
          </p>
          <div class="subheader--item">
            <h6 class="subheader--bullet">
              Choosing the right technology
            </h6>
            <p>
              When starting your project, an overwhelming number of technologies and frameworks are available to pick from. I have strong, evidence-based opinions on WHICH tech to use and WHY. These decisions have massive repercussions on your ability to easily staff your project, scale, and move quickly.
            </p>
            <p>
              I’ve scaled products to thousands of users, across complex server architectures. It all starts with your technical foundation.
            </p>
          </div>
          <div class="subheader--item">
            <h6 class="subheader--bullet">
              Validating FIRST (before any code is written)
            </h6>
            <p>
              I LOVE to code. This can be either good or bad when left unchecked. Without adequate
              attention to business impact, code can quickly become wasted time and technical debt.
              Trust me, I learned this the hard way. These days, I don’t write code until the features
              go through proper validation and customer development to ensure I am always building the
              right stuff for the right reasons.
            </p>
          </div>
          <div class="subheader--item">
            <h6 class="subheader--bullet">
              The right balance of code to tests
            </h6>
            <p>
              I’ve seen too many devs who are dogmatic about testing EVERYTHING to the point of
              clutter and stagnation. A good testing methodology factors in both agility and stability,
              where the most important stuff gets tested, but the codebase is allowed to remain
              flexible as business needs change.
            </p>
          </div>
          <div>
            <h6 class="subheader--bullet">
              Build for agility
            </h6>
            <p>
              Business requirements can change. I support this in both the codebase and the culture of
              the development team to ensure we leave room for changes and shifts in direction. Nothing
              should be done just because "it’s in the roadmap."
            </p>
          </div>
        </div>
        <div class="float-left">
          <fa class="section--icon" :icon="['fas', 'tired']"></fa>
        </div>
        <div class="section--right">
          <h3>
            What I’m not good at
          </h3>
          <div class="subheader--item">
            <h6 class="subheader--bullet">
              Uber-technical low-level coding
            </h6>
            <p>
              Since I’ve spent so much time on the business side, I consider myself somewhat of a generalist.
              I am not one of “those developers” that spends their weekends writing C++ libraries.
              Need someone to write a complex data science algorithm? I can hire and manage these developers
              (as I have successfully in the past), but I wouldn’t be the right fit to write this myself.
            </p>
          </div>
          <div class="subheader--item">
            <h6 class="subheader--bullet">
              Dev-ops
            </h6>
            <p>
              I have done my fair share of Linux administration filled with docker and Kubernetes, but it’s
              not my strong suit. Luckily, with the trend toward Cloud-based and serverless, this skill
              is becoming less of an issue. To be able to keep myself and my developers focused on business
              value, I partner with companies that do affordable managed hosting.
            </p>
          </div>
          <div class="subheader--item">
            <h6 class="subheader--bullet">
              Long-term maintenance
            </h6>
            <p>
              Once a project is out of the early stages and into maintenance mode, the focus
              generally shifts to marginal gains. Here, my early-stage energy begins to wane.
              I thrive on the rapid pace of early stage, and would likely help you hire someone
              to replace my services as the company gets to this level.
            </p>
          </div>
        </div>
        <div class="float-left">
          <fa class="section--icon" :icon="['fas', 'briefcase']"></fa>
        </div>
        <div class="section--right">
          <h3>What I’ve been working on recently</h3>
          <nuxt-link to="/resume">
            See resume for recent work/project history
          </nuxt-link>
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
  .subheader--bullet {
    color: #000;
    font-size: 1.1em
  }
  .subheader--item {
    padding-bottom: 0.5rem
  }
}
</style>
