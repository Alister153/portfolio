<script>
export default {
  data() {
    return {
      stackFadeInOut: false,
      right_languages: [
        {
          lang: "Javascript",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png",
        },
        {
          lang: "Html",
          img: "https://www.w3.org/html/logo/downloads/HTML5_Badge_128.png",
        },
        {
          lang: "Css",
          img: "https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png",
        },
        {
          lang: "Node.js",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png?20170401104355",
        },
      ],
      left_languages: [
        {
          lang: "Oracle Sql",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/768px-Oracle_logo.svg.png",
        },
        {
          lang: "React",
          img: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-256.png",
        },
        {
          lang: "Vue.js",
          img: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png",
        },
        {
          lang: "MySQL",
          img: "https://www.mysql.com/common/logos/logo-mysql-170x115.png",
        },
      ],
    };
  },
  mounted: function () {
    const StackObserver = new IntersectionObserver(
      (entries) => {
        Array.from(entries).forEach((e) => {
          if (e.isIntersecting) {
            this.stackFadeInOut = true;
            const active_slide = document.querySelector("[data-navslide]");
            const active = document.querySelector('[data-on-Screen]')
            delete active.dataset.onScreen
            delete active_slide.dataset.navslide;
            e.target.dataset.onScreen = true
            document.getElementById("stack").dataset.navslide = true;
          } else {
            this.stackFadeInOut = false;
          }
        });
      },
      { threshold: 0.2 }
    );
    StackObserver.observe(this.$refs.stacks);
  },
};
</script>
<template>
  <section class="stack view" ref="stacks" id="stack">
    <div class="language-type">
      <p class="technologies">My Stack</p>
    </div>
    <div class="stack-container" :class="{ fade: stackFadeInOut }">
      <div class="right">
        <div class="language-container-box" v-for="lang in right_languages">
          <div class="language-container">
            <div class="img-container">
              <img class="language-img" v-bind:src="lang.img" />
            </div>
            <p>{{ lang.lang }}</p>
          </div>
        </div>
      </div>
      <div class="left">
        <div class="language-container-box" v-for="lang in left_languages">
          <div class="language-container">
            <div class="img-container">
              <img class="language-img" v-bind:src="lang.img" />
            </div>
            <p>{{ lang.lang }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

main .stack {
  padding: 50px 0px;
  width: 60%;
  height: 100vh;
}

.main .stack .language-type {
  color: var(--light-text);
  font-size: 20px;
  list-style: none;
}

.main .stack .language-type p {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: default;
  width: 100%;
}

.main .stack .language-type p::after {
  content: "";
  width: 0%;
  background-color: lime;
  height: 3px;
  border-radius: 0%;
  transition: width 600ms ease;
}

.main .stack .language-type p:hover::after {
  width: 100px;
}

.main .stack .stack-container {
  padding: 20px 20px;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
}

main .stack .stack-container .right,
main .stack .stack-container .left {
  width: 60%;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  opacity: 0;
  transition: opacity 800ms ease, transform 800ms ease;
}

main .stack .stack-container .right {
  transform: translateX(-150px);
}

main .stack .stack-container .left {
  transform: translateX(150px);
}

.main .stack .stack-container.fade .right,
main .stack .stack-container.fade .left {
  opacity: 1;
  transform: translateX(0px);
}

.main .stack .stack-container .language-container-box {
  position: relative;
  margin: 20px 20px;
  padding: 2px;
  box-shadow: 0px 0px 5px white;
  overflow: hidden;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: box-shadow 500ms ease;
}
.main .stack .stack-container .language-container-box:hover {
  box-shadow: none;
}
.main .stack .stack-container .language-container-box:hover:after {
  content: "";
  position: absolute;
  top: -3px;
  left: -3px;
  right: -3px;
  bottom: -3px;
  background-image: conic-gradient(transparent, transparent, transparent, lime);
  filter: blur(10px);
  animation: borderEffect linear infinite 2s;
}

.main .stack .stack-container .language-container-box:hover:before {
  content: "";
  position: absolute;
  top: -3px;
  left: -3px;
  right: -3px;
  bottom: -3px;
  background-image: conic-gradient(transparent, transparent, transparent, lime);
  filter: blur(10px);
  animation: borderEffect linear infinite 2s;
  animation-delay: -3s;
}

@keyframes borderEffect {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.main .stack .stack-container .language-container-box .language-container {
  position: relative;
  z-index: 1;
  width: 100px;
  height: 140px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: var(--dark-bg);
}

.main
  .stack
  .stack-container
  .language-container-box
  .language-container
  .img-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main
  .stack
  .stack-container
  .language-container-box
  .language-container
  .language-img {
  position: absolute;
  top: 5%;
  bottom: 50%;
  width: 110px;
  filter: brightness(60%);
  transition: width 500ms ease, filter 500ms ease, top 500ms ease;
}

.main
  .stack
  .stack-container
  .language-container-box:hover
  .language-container
  .language-img {
  width: 110px;
  filter: brightness(100%);
}

.main .stack .stack-container .language-container-box .language-container p {
  position: absolute;
  top: 0%;
  left: 0%;
  right: 0%;
  bottom: 0%;
  font-size: 20px;
  background-color: rgba(0, 0, 0, 0.166);
  z-index: 3;
  padding: 10px 0px;
  backdrop-filter: blur(2px);
  color: var(--light-text);
  text-align: center;
  transition: top 600ms ease;
}
.main
  .stack
  .stack-container
  .language-container-box:hover
  .language-container
  p {
  top: 65%;
}

@media only screen and (max-width: 900px) {
  .main .stack {
    height: 100%;
  }
}
</style>
