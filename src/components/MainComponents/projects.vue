<script>
import abc from "../../assets/abc.png";
export default {
  data() {
    return {
      projects: [
        {
          img: abc,
          title: "MERN App",
          para: "Fully Responsive MERN App",
          git_link: "https://github.com/Alister153/blaa-app",
          app_link: "https://blaa-app.herokuapp.com/",
        },
        {
          img: abc,
          title: "Netflix Clone",
          para: "Fully Responsive MERN App",
          git_link: "https://github.com/Alister153/blaa-app",
          app_link: "https://blaa-app.herokuapp.com/",
        },
        {
          img: abc,
          title: "e-commerce App",
          para: "",
          git_link: "https://github.com/Alister153/blaa-app",
          app_link: "https://blaa-app.herokuapp.com/",
        },
      ],
    };
  },
  mounted: function () {
    const nxtbtn = document.querySelector("#next-btn");
    const prevbtn = document.querySelector("#prev-btn");
    nxtbtn.addEventListener("click", () => {
      const slides = nxtbtn
        .closest("[data-parent]")
        .querySelector("[data-slides]");
      const activeSlide = slides.querySelector("[data-active]");
      var newIndex = [...slides.children].indexOf(activeSlide) + 1;

      if (newIndex >= slides.children.length) newIndex = 0;
      else if (newIndex < 0) newIndex = slides.children.length - 1;

      slides.children[newIndex].dataset.active = true;
      delete activeSlide.dataset.active;
    });
    prevbtn.addEventListener("click", () => {
      const slides = prevbtn
        .closest("[data-parent]")
        .querySelector("[data-slides]");
      const activeSlide = slides.querySelector("[data-active]");
      var newIndex = [...slides.children].indexOf(activeSlide) - 1;

      if (newIndex >= slides.children.length) newIndex = 0;
      else if (newIndex < 0) newIndex = slides.children.length - 1;

      slides.children[newIndex].dataset.active = true;
      delete activeSlide.dataset.active;
    });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const active_slide = document.querySelector("[data-navslide]");
            const active = document.querySelector("[data-on-Screen]");
            delete active.dataset.onScreen;
            entry.target.dataset.onScreen = true;
            delete active_slide.dataset.navslide;
            document.getElementById("project").dataset.navslide = true;
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    observer.observe(this.$refs.projects);
  },
};
</script>
<template>
  <section class="projects view" ref="projects">
    <h2 class="project-glitch">Projects</h2>
    <div class="projects--carousel" data-parent>
      <ul data-slides>
        <li class="project" data-active>
          <img src="../../assets/abc.png" alt="" class="project-img" />
          <div>
            <h2>MERN App</h2>
            <p>Responsive MERN App</p>
            <span class="links-wrapper">
              <a
                href="https://github.com/Alister153/blaa-app"
                target="_blank"
                class="link"
                id="github"
              >
                <fawsome-icon :icon="['fab', 'github']" size="2x">
                </fawsome-icon>
              </a>
              <a
                href="https://blaa-app.herokuapp.com/"
                class="link"
                target="_blank"
                id="link"
              >
                <fawsome-icon :icon="['fas', 'link']" size="2x"> </fawsome-icon>
              </a>
            </span>
          </div>
        </li>
        <li class="project" v-for="project in projects">
          <img v-bind:src="project.img" alt="" class="project-img" />
          <div>
            <h2>{{ project.title }}</h2>
            <p>{{ project.para }}</p>
            <span class="links-wrapper">
              <a
                :href="project.git_link"
                target="_blank"
                class="link"
                id="github"
              >
                <fawsome-icon :icon="['fab', 'github']" size="2x">
                </fawsome-icon>
              </a>
              <a
                :href="project.app_link"
                class="link"
                target="_blank"
                id="link"
              >
                <fawsome-icon :icon="['fas', 'link']" size="2x"> </fawsome-icon>
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
.projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}
.projects .project-glitch,
.projects .projects--carousel {
  margin: 50px 0px;
}
.projects .projects--carousel {
  position: relative;
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}
.projects .projects--carousel .next-btn {
  position: absolute;
  right: 0%;
  bottom: -20%;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
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
.projects ul {
  list-style: none;
  padding: 0%;
  margin: 0%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.projects .projects--carousel .project {
  visibility: hidden;
  position: absolute;
  overflow: hidden;
  /* border-radius: 20px; */
  width: 100%;
  height: 100%;
  transform: translateX(-550px);
  opacity: 0;
  transition: transform 500ms ease, opacity 500ms ease;
}
.projects .projects--carousel .project[data-active]:hover {
  transform: scale(1.06);
}
.projects .projects--carousel .project[data-active] {
  visibility: visible;
  opacity: 1;
  transform: translateX(0px) scale(1);
}
.projects .projects--carousel .project .project-img {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  transform: scale(1);
  transition: all 400ms ease;
}
.projects .projects--carousel .project:hover .project-img {
  filter: blur(5px);
  transform: scale(1.1);
}
.projects .project div {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 0%;
  width: 100%;
  height: 100%;
  /* border-radius: 20px; */
  background-color: rgba(0, 0, 0, 0.474);
}
.projects .project div .links-wrapper .link {
  margin: 0px 5px;
}
.projects .project div .links-wrapper .link svg {
  color: white;
  filter: brightness(50%);
  transition: filter 500ms ease;
}
.projects .project div .links-wrapper .link:hover svg {
  filter: brightness(100%);
}
.projects .project-glitch {
  cursor: default;
  position: relative;
  z-index: 0;
  margin: 0%;
  font-size: 50px;
  animation: clip 5s 2.05s infinite;
}
.projects .project-glitch:after {
  content: "Projects";
  position: absolute;
  top: 0%;
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
  top: 0%;
  left: 0%;
  text-shadow: -3px 0px limegreen;
  animation: glitch2 500ms 2.5s alternate-reverse infinite, clip 5s 2.05s infinite;
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
  .projects .projects--carousel {
    width: 500px;
    height: 300px;
    flex-direction: column-reverse;
  }
}
@media only screen and (max-width: 500px) {
  .projects .projects--carousel {
    width: 300px;
    height: 200px;
    flex-direction: column-reverse;
  }
  .projects .projects--carousel .next-btn {
    width: 40px;
    position: block;
  }
}
</style>
