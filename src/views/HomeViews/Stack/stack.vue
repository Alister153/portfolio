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
      scroll: 0,
    };
  },
  methods: {
    languageOn: function (e) {
      const Pelement = e.currentTarget;
      Pelement.style.boxShadow = `0px 0px 2rem #0fa, inset 0px 0px 20px #0fa`;
      Pelement.style.border = `3px solid #0fa`;

      const text = Pelement.querySelector(".language-name");
      text.style.color = `#0fa`;
    },
    languageOff: function (e) {
      const Pelement = e.currentTarget;
      Pelement.removeAttribute("style");
      const text = Pelement.querySelector(".language-name");
      text.removeAttribute("style");
    },
    Navbar: function () {
      const id = document.querySelector("[data-Stack]");
      const navbar = document.querySelector(".navigation-panel");
      const active = navbar.querySelector("[data-active]");
      const navSections = navbar.querySelector("#Stack");
      delete active.dataset.active;
      navSections.dataset.active = true;
    },
    ViewCompleteStack: function () {
      // this.$emit("changeRoute", "completeStack");
      document.querySelector(".slider-out").classList.add("active");
    },
  },
  mounted: function () {
    const StackObserver = new IntersectionObserver(
      (entries) => {
        Array.from(entries).forEach((e) => {
          if (e.isIntersecting) {
            this.Navbar();
            // this.stackFadeInOut = true;
          } else this.$refs.stackRibbon.style.setProperty("--Left", 1000);
        });
      },
      { threshold: 0.1 }
    );
    this.scroll = Math.abs(
      document.getElementsByTagName("body")[0].getBoundingClientRect().top -
        this.$refs.stacks.getBoundingClientRect().top
    );

    document.addEventListener("scroll", (e) => {
      const left = this.scroll - window.scrollY;
      this.$refs.stackRibbon.style.setProperty("--Left", left);
    });

    StackObserver.observe(this.$refs.stacks);
  },
};
</script>

<template>
  <section class="stack view" ref="stacks" id="Stack" data-Stack>
    <div class="stack-title" ref="stackRibbon">
      <h1 class="technologies text-5xl lg:text-6xl text-center">My Stack</h1>
    </div>
    <button class="more-projects flex items-center" @click="ViewCompleteStack">
      <p>Complete Stack</p>
      <fawsome-icon :icon="['fas', 'angle-right']"></fawsome-icon>
    </button>
    <div class="stack-container-wrapper">
      <div class="stack-container">
        <div
          class="language-container-wrapper"
          v-on:mouseover="languageOn"
          v-on:mouseout="languageOff"
          v-for="lang in right_languages"
        >
          <div class="language-container">
            <div class="img-container">
              <img class="language-img" v-bind:src="lang.img" />
            </div>
            <p class="language-name">{{ lang.lang }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
main .stack {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  border-radius: 5px;
  width: 100%;
  height: 100vh;
  font-style: italic;
}
main .stack .stack-title {
  position: relative;
  z-index: 2;
  width: 90%;
  left: calc(var(--Left) * 1px);
  transform: skewX(-20deg);
  border-radius: 5px;
  background: var(--linear-background);
}
main .stack .stack-title h1 {
  text-align: center;
  cursor: default;
  padding: 5px;
  color: white;
  transform: skewX(20deg);
  width: 100%;
}
main .stack .stack-title h1:after {
  content: "";
  width: 0px;
  height: 3px;
  background-color: lime;
  transition: width 500ms ease;
}
main .stack .stack-title h1:hover:after {
  width: 150px;
}
main .stack .stack-container-wrapper {
  padding: 20px 0px;
  width: 100%;
  height: 70%;
  align-items: center;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
}
main .stack .stack-container-wrapper .stack-container {
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
main .stack .stack-container-wrapper .language-container-wrapper {
  position: relative;
  margin: 20px;
  padding: 2px;
  border-radius: 5px;
  border: 3px solid #0fa;
  box-shadow: 0px 0px 5px #0fa, inset 0px 0px 5px #0fa;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: border 500ms ease, box-shadow 500ms ease;
}
main
  .stack
  .stack-container-wrapper
  .language-container-wrapper
  .language-container {
  position: relative;
  z-index: 1;
  width: 140px;
  height: 180px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  filter: brightness(95%);
  padding: 10px;
  background-color: transparent;
}
main
  .stack
  .stack-container-wrapper
  .language-container-wrapper
  .language-container:hover {
  filter: brightness(100%);
}
main
  .stack
  .stack-container-wrapper
  .language-container-wrapper
  .language-container
  .img-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: brightness(0.5);
  transition: filter 500ms ease;
}
main
  .stack
  .stack-container-wrapper
  .language-container-wrapper
  .language-container:hover
  .img-container {
  filter: brightness(1);
}
main
  .stack
  .stack-container-wrapper
  .language-container-wrapper
  .language-container
  .language-img {
  width: 110px;
  transition: width 500ms ease, filter 500ms ease, top 500ms ease,
    transform 500ms ease;
}
main
  .stack
  .stack-container-wrapper
  .language-container-wrapper
  .language-container
  p {
  filter: brightness(70%);
  color: #0fa;
  transition: filter 500ms ease;
}
main
  .stack
  .stack-container-wrapper
  .language-container-wrapper:hover
  .language-container
  p {
  filter: brightness(100%);
}
@media only screen and (max-width: 900px) {
  main .stack {
    height: 100%;
  }
  main .stack .stack-container-wrapper .stack-container {
    width: 100%;
  }
  main .stack .stack-container-wrapper .language-container-wrapper {
    border-radius: 10px;
    width: 130px;
    margin: 10px;
  }
  .stack .stack-title {
    border: 2px solid lime !important;
  }
}
</style>
