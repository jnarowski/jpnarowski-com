<template>
  <section class="widget authorprofile">
    <div class="container text-center">
      <div class="info" itemprop="author" itemscope itemtype="http://schema.org/Person">
        <a href="https://jpnarowski.com/author/jpnarowski/" class="profile gravatar">
          <img
            src="//0.gravatar.com/avatar/803a0ad71889f0e001ee5b90e71ed48c?s=80"
            itemprop="image"
            alt="John Paul Narowski"
          />
        </a>
        <div class="meta">
          <span class="title">Author</span>
          <h3 itemprop="name">
            <nuxt-link class="author--name" to="/" itemprop="url" rel="author">
              John Paul Narowski
            </nuxt-link>
          </h3>
          <a href="http://twitter.com/jpnarowski" target="_blank" class="twittertag">@jpnarowski</a>
        </div>
      </div>
      <p>I’ve been hacking at various business ideas since I was 16. I’m a full stack developer and love crafting user experiences. I’ve been nose deep in code since I put the legos down, and built several successful businesses in the process. I’ve lost some hair, gained some experience and throughly enjoyed the journey.</p>
      <ul class="authorsocial">
        <li>
          <a href="http://twitter.com/jpnarowski" target="_blank" class="socialdark twitter">
            <i class="fab fa-twitter" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/john.narowski"
            target="_blank"
            class="socialdark facebook"
          >
            <i class="fab fa-facebook-f" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/johnpaulnarowski"
            target="_blank"
            class="socialdark linkedin"
          >
            <i class="fab fa-linkedin-in" />
          </a>
        </li>
        <li>
          <a
            href="https://www.flickr.com/photos/jnarowski/"
            target="_blank"
            class="socialdark flickr"
          >
            <i class="fab fa-flickr" />
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
.gravatar img {
  border-radius: 90px;
}
.authorsocial {
  overflow: hidden;
  display: inline-block;
  margin-bottom: 40px;
  text-align: center;
  padding: 0;
  list-style: none;
}
.socialdark.twitter {
  background: #55acee;
  color: #fff;
}
.socialdark.facebook {
  background: #3b5998;
  color: #fff;
}
.socialdark.linkedin {
  background: #0e76a8;
  color: #fff;
}
.socialdark.flickr {
  background: #ff0084;
  color: #fff;
}
.authorsocial li {
  display: inline-block;
  margin-right: 8px;
  margin-bottom: 10px;
}
.authorsocial li a {
  font-family: Montserrat, Arial, Sans-Serif;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.5px;
  display: inline-block;
  padding: 5px 0;
  color: #8b8b8b;
  font-size: 12px;
  line-height: 26px;
}
.socialdark {
  width: 35px;
  height: 35px;
  border-radius: 70px;
  text-align: center;
  transition: background 0.15s ease-in;
}
.widget {
  padding: 35px 0 0;
}
.authorprofile {
  margin: 110px 0 0;
  background: whiteSmoke;
  border-top: 1px solid #f3f3f3;
  text-align: center;

  .info {
    margin: -73px 0 30px;
  }
  .title {
    display: block;
    margin-top: 26px;
    font-weight: 400;
    font-size: 15px;
    line-height: normal;
    text-transform: uppercase;
    color: #9c9c9c;
  }
  .twittertag {
    color: #c9c9c9;
    font-size: 14px;
    text-transform: none;
  }
  .author--name {
    font-weight: 600;
    font-size: 24px;
    line-height: normal;
    color: #403f3f;
  }
}
</style>
