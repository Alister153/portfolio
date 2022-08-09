<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleNav(e) {
      const { id } = e.target;
      const viewArr = document.querySelector(`.${id}`);
      viewArr.scrollIntoView({
        behavior: "smooth",
      });
      const active_slide = document.querySelector("[data-navslide]");
      const active = document.querySelector("[data-on-Screen]");
      viewArr.dataset.onScreen = true
      e.target.dataset.navslide = true;
      delete active.dataset.onScreen
      delete active_slide.dataset.navslide;
    },
  },
  mounted: function () {
    document.querySelector("#up").addEventListener("click", (e) => {
      const viewArr = [...document.querySelectorAll(".view")];
      const active = document.querySelector("[data-on-Screen]");
      var newView = viewArr.indexOf(active) - 1;
      const nav_slides = document.querySelector("[data-navs]");
      const active_slide = document.querySelector("[data-navslide]");

      if (newView < 0) newView = viewArr.length;
      if (newView >= viewArr.length) newView = viewArr.length - 1;

      viewArr[newView].scrollIntoView({
        behavior: "smooth",
      });

      [...nav_slides.children][newView].dataset.navslide = true;
      viewArr[newView].dataset.onScreen = true;
      delete active_slide.dataset.navslide;
      delete active.dataset.onScreen;
    });

    document.querySelector("#down").addEventListener("click", (e) => {
      const viewArr = [...document.querySelectorAll(".view")];
      const active = document.querySelector("[data-on-Screen]");
      const nav_slide = document.querySelector("[data-navs]");
      const active_slide = document.querySelector("[data-navslide]");
      var newView = viewArr.indexOf(active) + 1;

      if (newView >= viewArr.length) newView = 0;

      viewArr[newView].scrollIntoView({
        behavior: "smooth",
      });

      [...nav_slide.children][newView].dataset.navslide = true;
      viewArr[newView].dataset.onScreen = true;
      delete active_slide.dataset.navslide;
      delete active.dataset.onScreen;
    });
  },
};
</script>
<template>
  <div class="navigation-controller" data-navParent>
    <div class="navs" data-navs>
      <div class="nav-bar" id="about" data-navslide @click="handleNav"></div>
      <div class="nav-bar" id="stack" @click="handleNav"></div>
      <div class="nav-bar" id="project" @click="handleNav"></div>
      <!-- <div class="nav-bar" id="contact"></div> -->
    </div>
    <div class="arrow-btn">
      <fawsome-icon
        :icon="['fas', 'angle-up']"
        size="2x"
        id="up"
      ></fawsome-icon>
      <fawsome-icon
        :icon="['fas', 'angle-down']"
        size="2x"
        id="down"
      ></fawsome-icon>
    </div>
  </div>
</template>
<style>
.navigation-controller {
  position: fixed;
  z-index: 99;
  top: 40%;
  right: 5%;
  display: flex;
  align-items: center;
}
.navigation-controller .navs {
  margin: 0px 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.navigation-controller .navs .nav-bar {
  width: 30px;
  height: 10px;
  border-radius: 10px;
  margin: 2px 0px;
  cursor: pointer;
  transition: box-shadow 500ms ease, width 500ms ease;
}
.navigation-controller .navs .nav-bar:nth-child(1) {
  width: 20px;
  background-color: lime;
}
.navigation-controller .navs .nav-bar:nth-child(2) {
  width: 25px;
  background-color: lime;
}
.navigation-controller .navs .nav-bar:nth-child(3) {
  width: 10px;
  background-color: lime;
}
.navigation-controller .navs .nav-bar:nth-child(4) {
  width: 25px;
  background-color: lime;
}
.navigation-controller .navs .nav-bar[data-navslide] {
  width: 35px;
}
.navigation-controller .navs .nav-bar:hover {
  width: 35px;
  box-shadow: 0px 0px 10px limegreen, inset 0px 0px 100rem var(--dark-bg);
}
.navigation-controller .arrow-btn {
  display: flex;
  flex-direction: column;
}
.navigation-controller .arrow-btn svg:hover {
  cursor: pointer;
  color: lime;
}
@media only screen and (max-width: 500px) {
  .navigation-controller{
    top: 5%;
  }
}
</style>
