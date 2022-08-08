<script>
export default {
  data() {
    return {};
  },
  mounted: function () {
    const btn = document.querySelector(".next-btn");
    btn.addEventListener("click", () => {
      const slides = btn
        .closest("[data-parent]")
        .querySelector("[data-slides]");
      const activeSlide = slides.querySelector("[data-active]");
      var newIndex = [...slides.children].indexOf(activeSlide) + 1;

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
        threshold: 0.5,
      }
    );
    observer.observe(this.$refs.projects);
  },
};
</script>
<template>
  <section class="project view" ref="projects">
    <h2 class="project-glitch">Projects</h2>
    <div class="projects--carousel" data-parent>
      <div class="next-btn">
        <fawsome-icon :icon="['fas', 'angle-right']" size="2x"></fawsome-icon>
      </div>
      <ul data-slides>
        <li class="project" data-active>
          <img src="" alt="" class="project-img" />
          <div>
            <h2>MERN app</h2>
            <p>Fully Responsive MERN app</p>
            <span class="links-wrapper">
              <a href="" class="link" id="github">
                <fawsome-icon :icon="['fab', 'github']" size="2x">
                </fawsome-icon>
              </a>
              <a href="" class="link" id="link">
                <fawsome-icon :icon="['fas', 'link']" size="2x"> </fawsome-icon>
              </a>
            </span>
          </div>
        </li>
        <li class="project">
          <img src="" alt="" class="project-img" />
          <div>
            <h2>MERN app</h2>
            <p>Fully Responsive MERN app</p>
            <span class="links-wrapper">
              <a href="" class="link" id="github">
                <fawsome-icon :icon="['fab', 'github']" size="2x">
                </fawsome-icon>
              </a>
              <a href="" class="link" id="link">
                <fawsome-icon :icon="['fas', 'link']" size="2x"> </fawsome-icon>
              </a>
            </span>
          </div>
        </li>
        <li class="project">
          <img src="" alt="" class="project-img" />
          <div>
            <h2>MERN app</h2>
            <p>Fully Responsive MERN app</p>
            <span class="links-wrapper">
              <a href="" class="link" id="github">
                <fawsome-icon :icon="['fab', 'github']" size="2x">
                </fawsome-icon>
              </a>
              <a href="" class="link" id="link">
                <fawsome-icon :icon="['fas', 'link']" size="2x"> </fawsome-icon>
              </a>
            </span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
<style>
.project {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}
.project .project-glitch,
.project .projects--carousel {
  margin: 50px 0px;
}
.project .projects--carousel {
  position: relative;
  width: 50%;
  height: 50%;
}
.project .projects--carousel .next-btn {
  z-index: 1;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  position: absolute;
  border-radius: 0px 20px 20px 0px;
  width: 50px;
  right: -1%;
  top: 0%;
  bottom: -1%;
  color: black;
  transition: background 400ms ease, color 400ms ease;
}
.project .projects--carousel .next-btn:hover {
  color: white;
  background-color: #000b168f;
}
.project ul {
  list-style: none;
  width: 100%;
  height: 100%;
}
.project .projects--carousel .project {
  position: absolute;
  top: 0;
  background-color: antiquewhite;
  border-radius: 20px;
  width: 100%;
  height: 100%;
  transform: translateX(-550px);
  opacity: 0;
  transition: transform 500ms ease, opacity 500ms ease;
}
.project .project[data-active] {
  opacity: 1;
  transform: translateX(-40px);
}
.project .project div {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 0%;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.474);
}
.project .project div .links-wrapper .link {
  margin: 0px 5px;
}
.project .project div .links-wrapper .link svg {
  color: white;
  transition: color 500ms ease;
}
.project .project div .links-wrapper .link:hover svg {
  color: black;
}
.project .project-glitch {
  cursor: default;
  position: relative;
  z-index: 1;
  margin: 0%;
  font-size: 50px;
}
.project .project-glitch:after {
  content: "Projects";
  position: absolute;
  top: 0%;
  left: 0%;
  color: white;
  text-shadow: -3px 0px magenta;
  animation: glitch1 500ms 2.5s alternate-reverse infinite, clip 5s 2.05s infinite;
}
.project .project-glitch:before {
  content: "Projects";
  position: absolute;
  color: white;
  top: 0%;
  left: 0%;
  text-shadow: -3px 0px limegreen;
  animation: glitch2 500ms 2.5s alternate infinite, clip 5s 2.05s infinite;
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
    clip-path: inset(100px 0px 30px 0px);
  }
  30% {
    clip-path: inset(60px 0px 60px 0px);
  }
  60% {
    clip-path: inset(45px 0px 25px 0px);
  }
  90% {
    clip-path: inset(20px 0px 25px 0px);
  }
  100% {
    clip-path: inset(15px 0px 70px 0px);
  }
}
@keyframes clip{
  1%{
    transform: rotateX(-180deg) skewX(70deg);
  }
  2%{
    transform: rotateX(0deg) skewX(0deg);
  }
}
@media only screen and (max-width: 900px) {
  .project .projects--carousel {
    width: 500px;
    height: 300px;
  }
}
@media only screen and (max-width: 500px) {
  .project .projects--carousel {
    width: 300px;
    height: 200px;
  }
  .project .projects--carousel .next-btn{
    width: 40px;
  }
}
</style>
