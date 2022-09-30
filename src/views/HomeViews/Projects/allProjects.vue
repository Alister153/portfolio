<script>
import { ref } from "vue";
import abc from "/src/assets/abc.png";
export default {
  data() {
    return {
      Projects: [
        {
          img: abc,
          title: "Mern App",
          para: "ReactJS, NodeJS, MongoDB, ExpressJS",
          git_link: "https://github.com/Alister153/blaa-app",
          app_link: "https://blaa-app.herokuapp.com/",
        },
        {
          img: abc,
          title: "Netflix Clone",
          para: "ReactJS, NodeJS, ExpressJS, Firebase",
          git_link: "https://github.com/Alister153/NetflixClone.git",
          app_link: "https://netflix-clone-qwerty.vercel.app/",
        },
        {
          img: abc,
          title: "e-commerce App",
          para: "ReactJS",
          git_link: "https://github.com/Alister153/e-commerce",
          app_link: "https://e-commerce-opal-gamma.vercel.app/",
        },
        {
          img: abc,
          title: "NFT Landing Page",
          para: "NextJS",
          git_link: "https://github.com/Alister153/NFT-LandingPage",
          app_link: "https://nft-landing-page-bzfd.vercel.app/",
        },
        {
          img: abc,
          title: "Rock Paper Scissors (StarTrek)",
          para: "NextJS",
          git_link: "https://github.com/Alister153/Rock-Paper-Scissor",
          app_link: "https://rock-paper-scissor-fx9r.vercel.app/",
        },
        {
          img: abc,
          title: "Ip Address Tracker",
          para: "NextJs, ipify API, LeafletJs",
          git_link: "https://github.com/Alister153/ip-address-tracker",
          app_link: "https://ip-address-tracker-ochre-two.vercel.app/",
        },
      ],
    };
  },
  mounted: function () {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
          else {
            entry.target.classList.remove("active");
            entry.target.classList.remove("loadActive");
          }
        });
      },
      {
        threshold: 0,
      }
    );

    const projects = document.querySelectorAll(".project").forEach((e) => {
      observer.observe(e);
    });
  },
  created: function () {
    window.scrollTo(0, 0);
  },
};
</script>

<template>
  <div class="all-projects">
    <div class="all-projects-title">
      <h1 class="text-center text-6xl">All Projects</h1>
    </div>
    <ul class="" data-slides>
      <li
        class="project"
        v-for="(project, index) in Projects"
        :class="{ loadActive: index < 3 }"
      >
        <figure>
          <img
            v-bind:src="project.img"
            alt=""
            class="project-img rounded-l-lg h-full"
          />
        </figure>
        <div class="details w-2/6">
          <h2 class="text-xl lg:text-4xl my-2">{{ project.title }}</h2>
          <p class="description my-2 text-sm lg:text-lg">{{ project.para }}</p>
          <span class="links-wrapper my-2 flex justify-between w-1/4">
            <a
              :href="project.git_link"
              target="_blank"
              class="link"
              id="github"
            >
              <fawsome-icon :icon="['fab', 'github']"> </fawsome-icon>
            </a>
            <a :href="project.app_link" class="link" target="_blank" id="link">
              <fawsome-icon :icon="['fas', 'link']"> </fawsome-icon>
            </a>
          </span>
        </div>
        <span class="sides top"></span>
        <span class="sides left"></span>
        <span class="sides bottom"></span>
        <span class="sides right"></span>
      </li>
    </ul>
  </div>
</template>

<style lang="sass">
.all-projects
  min-height: 100vh
  display: flex
  justify-content: space-evenly
  align-items: center
  flex-direction: column

.all-projects-title
  width: 1500px
  padding: 10px 0px

.all-projects ul
  margin: 50px
  width: 90%

.all-projects ul .project figure
    height: 100%
    width: 600px

.all-projects .project
  position: relative
  z-index: 1
  display: flex
  margin: 15px 10px
  height: 300px
  opacity: 0
  transform: scale(1)
  transition: transform 300ms ease
  backdrop-filter: blur(100px)
  // overflow: hidden

.all-projects .project::after
  content: ""
  z-index: -1
  background: linear-gradient(90deg, rgba(128,128,128,1)  36%, rgba(0,0,0,1) 100%)
  position: absolute
  top: 0
  bottom: 0
  left: 0
  right: 0
  filter: blur(80px)
  border-radius: 10px

.all-projects .project .sides
  position: absolute
  border-radius: 10px
  // z-index: -1

// $colors: blue, lime, red, #FF10F0
// @for $i from 1 through 4
//   .all-projects .project:nth-child(#{$i}) .sides
//     background-color: nth($colors, $i)
//     box-shadow: 0px 0px 20px nth($colors, $i)

.all-projects .project .top
  top: 0%
  left: 0%
  right: 40%
  bottom: 100%
  padding: 2px

.all-projects .project .left
  top: 0%
  bottom: 50%
  left: 0%
  padding: 2px

.all-projects .project .right
  top: 80%
  bottom: 0%
  right: 0%
  padding: 2px

.all-projects .project .bottom
  bottom: 0%
  left: 0%
  right: 0%
  padding: 2px

.all-projects .project:hover
  transform: scale(1.3)

.all-projects .project.active
  animation: slide-in 300ms forwards

@for $i from 1 through 10
    .all-projects .project.active:nth-child(#{$i})
        animation-delay: #{$i}

@for $i from 1 through 3
    .all-projects .project.loadActive:nth-child(#{$i})
        animation-delay: #{$i} + 10ms


@keyframes slide-in
  0%
    transform: translateX(80%)
    opacity: 0
  50%
    opacity: 0
  100%
    transform: translateX(0%)
    opacity: 1

.all-projects ul li figure
  width: 30%


.all-projects ul .project .details p
  height: 80px

.all-projects .project .details .links-wrapper .link svg
    filter: brightness(100%)

.all-projects .project .details
  padding: 10px
  margin: 0px 20px
</style>
