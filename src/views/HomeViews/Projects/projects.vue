<script>
import { ref } from "vue";
import abc from "/src/assets/abc.png";

export default {
  data() {
    return {
      carouselProjects: [
        {
          img: abc,
          title: "Mern App",
          para: "Responsive MERN App",
          git_link: "https://github.com/Alister153/blaa-app",
          app_link: "https://blaa-app.herokuapp.com/",
        },
        {
          img: abc,
          title: "Netflix Clone",
          para: "Netflix clone made with ReactJS on the frontend and NodeJS (express, firebase) on the backend",
          git_link: "https://github.com/Alister153/NetflixClone.git",
          app_link: "https://netflix-clone-qwerty.vercel.app/",
        },
        {
          img: abc,
          title: "e-commerce App",
          para: "e-commerce App made with ReactJS",
          git_link: "https://github.com/Alister153/e-commerce",
          app_link: "https://e-commerce-opal-gamma.vercel.app/",
        },
      ],
      scroll: 0,
      slides: [],
      moreProjects: false,
    };
  },
  methods: {
    nextBtn: function () {
      const activeSlide = this.slides.querySelector("[data-active='true']");
      const PrevSlide = this.slides.querySelector("[data-prev='true']");
      const NextSlide = this.slides.querySelector("[data-next='true']");

      var activeNewIndex = [...this.slides.children].indexOf(activeSlide);
      var prevNewIndex = [...this.slides.children].indexOf(PrevSlide);
      var nextNewIndex = [...this.slides.children].indexOf(NextSlide);

      if (prevNewIndex >= this.slides.children.length) prevNewIndex = 0;

      this.slides.children[activeNewIndex].dataset.next = true;
      this.slides.children[prevNewIndex].dataset.active = true;
      this.slides.children[nextNewIndex].dataset.prev = true;

      delete activeSlide.dataset.active;
      delete PrevSlide.dataset.prev;
      delete NextSlide.dataset.next;
    },
    prevBtn: function () {
      const activeSlide = this.slides.querySelector("[data-active='true']");
      const PrevSlide = this.slides.querySelector("[data-prev='true']");
      const NextSlide = this.slides.querySelector("[data-next='true']");

      var activeNewIndex = [...this.slides.children].indexOf(activeSlide);
      var prevNewIndex = [...this.slides.children].indexOf(PrevSlide);
      var nextNewIndex = [...this.slides.children].indexOf(NextSlide);

      if (prevNewIndex >= this.slides.children.length) prevNewIndex = 0;

      this.slides.children[activeNewIndex].dataset.prev = true;
      this.slides.children[prevNewIndex].dataset.next = true;
      this.slides.children[nextNewIndex].dataset.active = true;

      delete activeSlide.dataset.active;
      delete PrevSlide.dataset.prev;
      delete NextSlide.dataset.next;
    },
    Navbar: function () {
      const id = document.querySelector("[data-Projects]");
      const navbar = document.querySelector(".navigation-panel");
      const active = navbar.querySelector("[data-active]");
      const navSections = navbar.querySelector("#Projects");
      delete active.dataset.active;
      navSections.dataset.active = true;
    },
    ViewAllProjects: function () {
      this.$emit("changeRoute", "allProjects");
      document.querySelector(
        ".mainOverflow-container"
      ).style.transition = `transform 500ms ease`;
      document.querySelector(
        ".mainOverflow-container"
      ).style.transform = `translateX(-100%)`;
    },
  },
  mounted: function () {
    const nxtbtn = document.querySelector("#next-btn");
    const prevbtn = document.querySelector("#prev-btn");
    this.slides = nxtbtn
      .closest("[data-parent]")
      .querySelector("[data-slides]");

    nxtbtn.addEventListener("click", this.nextBtn);
    prevbtn.addEventListener("click", this.prevBtn);

    const parent = document.querySelector("[data-parent]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.Navbar();
          } else this.$refs.projectRibbon.style.setProperty("--Left", -1000);
        });
      },
      {
        threshold: 0.1,
      }
    );

    this.scroll = Math.abs(
      document.getElementsByTagName("body")[0].getBoundingClientRect().top -
        this.$refs.projects.getBoundingClientRect().top
    );
    document.addEventListener("scroll", (e) => {
      const left = window.scrollY - this.scroll;
      this.$refs.projectRibbon.style.setProperty("--Left", left);
    });
    observer.observe(this.$refs.projects);

    // parent.addEventListener("touchstart", () => {
    //   console.log("s");
    // });
  },
};
</script>

<template>
  <section
    class="projects view"
    ref="projects"
    id="Projects"
    v-on:scroll="handleScroll"
    data-Projects
  >
    <div class="project-title" ref="projectRibbon">
      <div>
        <h2 class="project-glitch text-5xl lg:text-6xl">Projects</h2>
      </div>
    </div>
    <button class="more-projects flex items-center" @click="ViewAllProjects">
      <p>More Projects</p>
      <fawsome-icon :icon="['fas', 'angle-right']"></fawsome-icon>
    </button>
    <div class="carousel-all projects--carousel" data-parent>
      <ul class="" data-slides>
        <li
          class="project"
          v-for="(project, index) in carouselProjects"
          :data-active="index === 0 && true"
          :data-next="index === 1 && true"
          :data-prev="index === 2 && true"
        >
          <img v-bind:src="project.img" alt="" class="project-img" />
          <div class="details">
            <h2 class="text-xl lg:text-3xl my-2">{{ project.title }}</h2>
            <p class="description my-2">{{ project.para }}</p>
            <span class="links-wrapper my-2">
              <a
                :href="project.git_link"
                target="_blank"
                class="link"
                id="github"
              >
                <fawsome-icon :icon="['fab', 'github']"> </fawsome-icon>
              </a>
              <a
                :href="project.app_link"
                class="link"
                target="_blank"
                id="link"
              >
                <fawsome-icon :icon="['fas', 'link']"> </fawsome-icon>
              </a>
            </span>
          </div>
        </li>
      </ul>
      <div class="next-btn">
        <fawsome-icon
          id="prev-btn"
          :icon="['fas', 'angle-left']"
          size="2x"
        ></fawsome-icon>
        <fawsome-icon
          id="next-btn"
          :icon="['fas', 'angle-right']"
          size="2x"
        ></fawsome-icon>
      </div>
    </div>
  </section>
</template>

<style>
@font-face {
  font-family: "CyberFont";
  src: url("../../assets/cyberway-riders-font/CyberwayRiders-lg97d.ttf");
}

.projects {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  /* font-weight: 700; */
  font-style: italic;
}

.projects .project-title {
  position: relative;
  width: 90%;
  text-align: center;
  transform: skewX(-30deg);
  left: calc(var(--Left) * 1px);
  background: var(--linear-background);
  border-radius: 5px;
}

.projects .project-title div {
  transform: skewX(30deg);
}

.projects .carousel-all {
  transform: translateX(0%);
  transition: transform 500ms ease;
}

.projects .projects--carousel {
  width: 50%;
  height: 50%;
  margin: 50px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}

.more-projects {
  position: absolute;
  top: 25%;
  right: 4%;
  font-weight: 700;
  transition: background-color 500ms ease, color 500ms ease;
}

.more-projects:hover {
  color: #0fa;
}

.projects .projects--carousel .next-btn {
  position: absolute;
  right: 10%;
  bottom: -20%;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border-radius: 0px 20px 20px 0px;
  width: 50px;
  color: white;
  transition: background 400ms ease, color 400ms ease;
}

.projects .projects--carousel .next-btn svg:hover {
  color: orange;
}

.projects .projects--carousel .next-btn svg {
  margin: 0px 10px;
}

.projects .projects--carousel ul {
  list-style: none;
  padding: 0%;
  margin: 0%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 3px solid #0fa; */
  /* box-shadow: 0px 0px 2rem #0fa; */
  border-radius: 5px;
  transform-style: preserve-3d;
}

.projects .projects--carousel .project {
  position: absolute;
  z-index: 3;
  overflow: hidden;
  width: 100%;
  height: 100%;
  transform: translateX(-550px);
  border: 1px solid transparent;
  border-radius: 5px;
  transition: transform 500ms ease, border 1s ease;
}

.projects .projects--carousel .project[data-active="true"] {
  cursor: pointer;
  transform: translateX(0px) scale(1);
}

.projects .projects--carousel .project[data-prev="true"] {
  transform: translateX(-300px) perspective(1200px) translateZ(-300px) scale(1)
    rotateY(20deg);
}

.projects .projects--carousel .project[data-next="true"] {
  transform: translateX(300px) perspective(1200px) translateZ(-300px) scale(1)
    rotateY(-20deg);
}

.projects .project .details {
  position: absolute;
  display: flex;
  z-index: 2;
  opacity: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 0%;
  left: 0%;
  right: 0%;
  bottom: 0%;
  color: white;
  background-color: rgba(0, 0, 0, 0.474);
  transition: opacity 500ms ease;
}

.projects .projects--carousel .project .project-img {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  z-index: 1;
  transform: scale(1);
  transition: all 400ms ease;
}

.projects .projects--carousel .project[data-active="true"]:hover .project-img {
  filter: blur(5px);
  transform: scale(1.1);
}

.project .details .links-wrapper .link {
  margin: 0px 5px;
}

.project .details .links-wrapper .link svg {
  height: 30px;
  color: white;
  filter: brightness(50%);
  transition: filter 500ms ease;
}

.projects .project .details .links-wrapper .link:hover svg {
  filter: brightness(100%);
}

.projects .project .details .description {
  width: 40%;
  text-align: center;
}

.projects .project-glitch {
  cursor: default;
  position: relative;
  z-index: 0;
  padding: 5px;
  animation: clip 5s 2.05s infinite;
}

.projects .project-glitch:after {
  content: "Projects";
  position: absolute;
  top: 5%;
  bottom: 0%;
  right: 0%;
  left: 0%;
  z-index: 1;
  color: white;
  text-shadow: -3px 0px magenta;
  animation: glitch1 500ms 2.5s alternate-reverse infinite,
    clip 5s 2.05s infinite;
}

.projects .project-glitch:before {
  content: "Projects";
  position: absolute;
  z-index: 1;
  color: white;
  top: 5%;
  bottom: 0%;
  right: 0%;
  left: 0%;
  text-shadow: -3px 0px limegreen;
  animation: glitch2 500ms 2.5s alternate-reverse infinite,
    clip 5s 2.05s infinite;
}

@keyframes glitch1 {
  0% {
    clip-path: inset(10px 0px 90px 0px);
  }

  30% {
    clip-path: inset(40px 0px 20px 0px);
  }

  60% {
    clip-path: inset(70px 0px 5px 0px);
  }

  90% {
    clip-path: inset(80px 0px 20px 0px);
  }

  100% {
    clip-path: inset(2px 0px 8px 0px);
  }
}

@keyframes glitch2 {
  0% {
    clip-path: inset(10px 0px 30px 0px);
  }

  30% {
    clip-path: inset(25px 0px 15px 0px);
  }

  60% {
    clip-path: inset(29px 0px 65px 0px);
  }

  90% {
    clip-path: inset(20px 0px 25px 0px);
  }

  100% {
    clip-path: inset(1px 0px 70px 0px);
  }
}

@keyframes clip {
  1% {
    transform: rotateX(-180deg) skewX(70deg);
  }

  2% {
    transform: rotateX(0deg) skewX(0deg);
  }
}

@media only screen and (max-width: 900px) {
  .projects {
    justify-content: space-evenly;
  }

  .projects .projects--carousel {
    width: 500px;
    height: 300px;
    flex-direction: column-reverse;
  }

  .projects .projects--carousel .project {
    border-radius: 0px;
  }

  .projects .projects--carousel .project[data-active="true"] {
    cursor: pointer;
    transform: translateX(0px) scale(1);
  }

  .projects .projects--carousel .project[data-prev="true"] {
    transform: translateX(0px) translateY(-100px) perspective(1200px)
      translateZ(-300px) scale(1) rotate(0deg);
  }

  .projects .projects--carousel .project[data-next="true"] {
    transform: translateX(0px) translateY(100px) perspective(1200px)
      translateZ(-300px) scale(1) rotate(0deg);
  }

  .projects .project-title {
    border: 2px solid lime !important;
  }

  .projects .project .details .links-wrapper .link svg {
    height: 20px;
    filter: brightness(100%);
  }

  .projects .more-projects {
    top: 90%;
    width: 150px;
    height: 50px;
    bottom: 0%;
    margin: 10px 0px;
  }
}

@media only screen and (max-width: 500px) {
  .projects .projects--carousel {
    width: 100%;
    height: 200px;
    flex-direction: column;
  }

  .projects .projects--carousel .next-btn {
    width: 40px;
    position: block;
  }

  .projects .project .details .description {
    display: none;
  }
}
</style>
