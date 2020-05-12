<script>
const ResumeSide = () => import('@/components/ResumeSide')
const ResumeHeader = () => import('@/components/ResumeHeader')
const RecommendationItem = () => import('@/components/RecommendationItem')

// Inspiration
// https://resume.io/app/auth/sign-up/templates
export default {
  components: {
    ResumeSide,
    ResumeHeader,
    RecommendationItem,
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
          <fa class="section--icon" :icon="['fas', 'medal']"></fa>
        </div>
        <div class="section--right">
          <h3>Recommendations</h3>
          <RecommendationItem
            title="Jesus Alvarado"
            date="April 1st, 2020"
            source="upwork"
            link="https://www.upwork.com/freelancers/~0162949251dedf900f"
            subtitle="Senior Backend Developer reported to JP while at Clickflow"
            image="img/avatars/JesusAlvarado.jpeg"
          >
            <p>It's been a pleasure to work with JP. He is so communicative and smart. I really enjoyed the opportunity of creating great ideas together to succeed on our goals. It's been a long road, a path full of learning and personal growth. I am sure we will keep working together on interesting projects like this one.</p>
          </RecommendationItem>
          <RecommendationItem
            title="Alexey A."
            date="December 1st, 2019"
            source="upwork"
            link="https://www.upwork.com/freelancers/~01fe1c6eb2a867f781"
            subtitle="Senior Backend Developer reported to JP while at Clickflow"
            image="img/avatars/AlexiA.webp"
          >
            <p>This client is knowledgeable when it comes to latest technologies and software architecture. The task he gave me was challenging, however, the deadlines were reasonable. It was an interesting project, would work again.</p>
          </RecommendationItem>
          <RecommendationItem
            title="Taylorr Payne"
            date="May 1st, 2019"
            source="linkedin"
            link="https://www.linkedin.com/in/taylorrpayne/"
            subtitle="Reported directly to JP as the CMO of Amish Tables"
            image="img/avatars/TaylorrPayne.png"
          >
            <p>Oh boy, where do I start? It's been incredible working under JP's leadership at Amish Tables. His mentorship has impacted my life in ways I could have never predicted. Through the best of times and the worst of times, JP constantly showed tremendous grit, integrity, and leadership. He's always pushing boundaries and isn't afraid of a challenge. Not only that but any goal he sets and puts his mind to, he absolutely crushes. It's incredible to watch happen.</p>
            <p>Beyond leadership, JP is a technological mastermind. He has an incredible ability to develop complex software and solutions for his businesses. His ability to create technology to help grow his businesses has been irreplaceable with Amish Tables. JP's a problem solver. It doesn't matter if the task at hand is bigger than him. If he doesn't know how to do it, he'll always figure out a way to make it happen.</p>
            <p>This tenacity is exactly what makes him a great leader. Thanks for everything JP, it's truly an honor to write this recommendation.</p>
          </RecommendationItem>
          <RecommendationItem
            title="Daniel M."
            date="December 1st, 2019"
            source="upwork"
            link="https://www.upwork.com/freelancers/~019a32602bb3b9196e"
            subtitle="Senior Developer reported to JP while at Clickflow"
            image="img/avatars/DanielM.webp"
          >
            <p>Great and smooth collaboration. Clear requirements! With John I also had best support to set-up the project locally so I can start work quickly. I highly recommend him and I'm looking forward for the next project.</p>
          </RecommendationItem>
          <RecommendationItem
            title="Brandon Sellers"
            date="July 25th, 2016"
            source="linkedin"
            link="https://www.linkedin.com/in/brandonsellers777/"
            subtitle="Reported directly to JP as the Growth Lead of karmaCRM"
            image="img/avatars/BrandonSellers.jpeg"
          >
            <p>I was lucky enough to work with John on karmaCRM and was astounded by the passion, hunger, and knowledge he brought to the table every single day. I could count on JP to get his hands dirty and lend a helping hand where ever possible, no matter what the job.</p>
            <p>His unique set of skills in marketing, sales, and web development, bring an astounding amount of value to the table, and anyone that works with him will benefit from this.</p>
            <p>If you have a chance to work with JP, consider yourself lucky and jump at the opportunity. You'll learn more than you could imagine, build something amazing, and have a great time doing it.</p>
          </RecommendationItem>
          <RecommendationItem
            title="Joe Conte"
            date="May 11th, 2015"
            source="linkedin"
            link="https://www.linkedin.com/in/jconte77/"
            subtitle="Worked for JP as a marketing vendor"
            image="img/avatars/JoeConte.jpeg"
          >
            <p>JP is one of the most genuine people I've had a chance to work with. His convictions are deep and he believes in a new way of doing business that puts people first. He's open to new ideas and helped introduce new to my life.</p>
          </RecommendationItem>
          <RecommendationItem
            title="Eyal Tolenando"
            date="May 8th, 2015"
            source="linkedin"
            link="https://www.linkedin.com/in/eyaltoledano/"
            subtitle="Mentor to JP"
            image="img/avatars/EyalTolenando.jpeg"
          >
            <p>I met JP over the Internet as he looked for a growth strategist for KarmaCRM. In spite of a busy schedule, I decided to forego other opportunities to work with JP because of his passion. I see and mentor many startups, and in spite of having a long road ahead of him, JP's approach to sponging up as much as he can makes him a pleasure to work with. He's extremely driven and I'm happy to have spent my time coaching him.</p>
            <p>In a few short months, not only has his company acquired the ribs to execute a long term vision, but as its founder, JP brings the entrepreneurship and engineering horsepower expected of a performing CEO.</p>
            <p>I'm excited to continue seeing his progress - though I feel he is quickly reaching a point where I'll have much to learn from him. I'm excited to work on other projects with this inspiring individual.</p>
          </RecommendationItem>
          <RecommendationItem
            title="Joe Flores"
            date="August 18th, 2014"
            source="linkedin"
            link="https://www.linkedin.com/in/joeflores99/"
            subtitle="Worked directly under JP as Director of Customer Success"
            image="img/avatars/JoeFlores.jpeg"
          >
            <p>I had the privilege of working for John-Paul while under his leadership at karmaCRM. To say he is a driven individual would be an understatement, and while I worked for John-Paul, he taught me a great deal about start-ups and marketing, as well as how to view many business-related areas and processes from a multitude of angles I had never previously considered. In his own way, John-Paul constantly encouraged me, on a daily basis, to expand my own limits, and I fully credit him for taking my knowledge of business to new depths.</p>
            <p>During my time as his direct report, I got to know him both professionally and personally, and can attest to the fact that he is incredibly wise, highly intelligent, and extremely capable beyond his years. He easily has one of the brightest and sharpest analytical minds of anyone I have ever worked with. On the other side of the spectrum, John-Paul also possesses a huge heart and is someone who truly cares about the well-being of every single one of his employees. This combination of heart and mind is, indeed, a rarity in the business world.</p>
            <p>It was truly an honor getting to work alongside John-Paul, and I know he will not only be successful in all of his future endeavors, but he will also be an asset at any company that is lucky enough to have him on board!</p>
          </RecommendationItem>
          <RecommendationItem
            title="Zachary Servideo"
            date="Octover 27th, 2012"
            source="linkedin"
            link="https://www.linkedin.com/in/zservideo/"
            subtitle="Was hired by JP for karmaCRM as a PR Consultant"
            image="img/avatars/ZacharyServideo.jpeg"
          >
            <p>I met karmaCRM Founder John Paul Narowski on a flight back from London a few years back, and we've been close ever since. I've admired from afar the success of his extremely lean Detroit CRM startup. The CRM system he built is falling down simple to use and he has thousands upon thousands of happy customers. It's amazing how good something can be when one person gets both the market and the customer so well. In fact, I've come to learn that John Paul's business decisions are based on what his customers want. That's truly special.</p>
            <p>My favorite thing about John Paul is he's a genuinely good guy, and a great person to do business with. He's as fair and as transparent as it comes. Put simply, he's really, really nice. John Paul isn't some entrepreneur preaching good karma to make a buck. He's a genuine, caring, thoughtful young business leader that wants to leave a positive impact on the world. And with some of the future plans he has for karmaCRM and beyond, I'm excited for everyone that is fortunate enough to work with him.</p>
          </RecommendationItem>
          <RecommendationItem
            title="Chris Ragland"
            date="February 21st, 2012"
            source="linkedin"
            link="https://www.linkedin.com/in/christopherragland/"
            subtitle="Client of JP's through karmaCRM"
            image="img/avatars/ChrisRagland.jpeg"
          >
            <p>I recently started using KarmaCRM and I have been really impressed with John and his team. Imagine my surprise when I received an email from the Founder of the business minutes after I signed up. Now imagine the shock when I discovered it wasn't an auto-bot, but actually John. Later when I found a small bug, John and his team worked through the weekend to correct the matter. Talk about dedication. I wish all of our vendors were this dedicated. I would recommend KarmaCRM to any small business owner looking for a flexible CRM to track customers and deals.</p>
          </RecommendationItem>
          <RecommendationItem
            title="Jamie Leger"
            date="February 21st, 2012"
            source="linkedin"
            link="https://www.linkedin.com/in/jamieleger/"
            subtitle="Client of JP's at Metaspring"
            image="img/avatars/JamieLeger.jpeg"
          >
            <p>John Paul is an incredibly bright, talented, and hard working business partner. He's accountable and consistent, stays true to his word, and gets results. Period. One of the sharpest web developer and business minds I know.</p>
          </RecommendationItem>
          <RecommendationItem
            title="Tim Latham"
            date="November 11th, 2011"
            source="linkedin"
            link="https://www.linkedin.com/in/lathamt/"
            subtitle="Client of JP's at karmaCRM"
            image="img/avatars/TimLatham.jpeg"
          >
            <p>John Paul has created a great product in KarmaCRM. I use Karma to manage my work life and I have found JP to be extremely responsive and willing to help / add features to Karma. Excellent guy, excellent product. I recommend him without reservation.</p>
          </RecommendationItem>
          <RecommendationItem
            title="Brock VandenBerg"
            date="September 22nd, 2011"
            source="linkedin"
            link="https://www.linkedin.com/in/brockvandenberg/"
            subtitle="Client of JP's at karmaCRM"
            image="img/avatars/BrockVendenburg.jpeg"
          >
            <p>Our organization relies heavily on managing our business contacts with the KARMA CRM software. The program is a cost effective and easy way to centrally track our business clients. Our employees can quickly access our KARMA contacts page on the web and add appropriate client information or research prior conversations. The program also allows the user to easily modify specific functions. Easy to use program with terrific CRM features at an affordable price.</p>
          </RecommendationItem>
          <RecommendationItem
            title="Sean Michael Kelly"
            date="August 25th, 2010"
            source="linkedin"
            link="https://www.linkedin.com/in/smkellypa/"
            subtitle="Client of JP's at karmaCRM"
            image="img/avatars/SeanMichaelKelly.jpeg"
          >
            <p>I've been so impressed with the responsiveness of John Paul with both development ideas and support regarding KarmaCRM that I'll heartily endorse his services personally and am enthusiastic to be both a customer and promoter of the KarmaCRM product. We're using it happily with CentralPAexperts and look forward to future developments! Much success to your product!</p>
          </RecommendationItem>
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
  .float-clear {
    clear: both;
    height: 0px;
  }

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
