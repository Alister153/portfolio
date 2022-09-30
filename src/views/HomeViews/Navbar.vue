<script>
export default {
  props: ["contact"],
  data() {
    return {
      screen: screen.width,
    };
  },

  methods: {
    handleNav(e) {
      e.stopPropagation();
      document.querySelector(".navigation-panel").classList.toggle("active");
    },

    lightsOn(e) {
      const element = e.currentTarget;
      element.style.color = "#0fa";
      element.dataset.hover = true;
    },

    lightsOff(e) {
      const element = e.currentTarget;
      element.removeAttribute("style");
      delete element.dataset.hover;
    },

    handleClick(e) {
      e.stopPropagation();
      const { id } = e.currentTarget;
      const navbar = document.querySelector(".navigation-panel");
      const active = navbar.querySelector("[data-active]");

      delete active.dataset.active;
      e.currentTarget.dataset.active = true;

      if (id !== "Contact") {
        document
          .querySelector(`[data-${id}]`)
          .scrollIntoView({ behavior: "smooth" });
        this.$emit("contactChange", false);
      }
    },

    handleContact(e) {
      this.handleClick(e);
      this.handleNav(e);
      this.$emit("contactChange", !this.contact);
    },
  },

  mounted: function () {},
};
</script>

<template>
  <div>
    <div class="nav-open" v-on:click="handleNav" v-if="this.screen <= 900">
      <fawsome-icon :icon="['fas', 'bars']"> </fawsome-icon>
    </div>
    <nav
      class="navigation-panel flex justify-end items-center"
      v-on:click="handleNav"
      data-navParent
    >
      <ul
        class="nav-wrapper"
        v-on:click="
          (e) => {
            e.stopPropagation();
          }
        "
      >
        <li v-on:click="handleNav" v-if="this.screen <= 900">
          <svg
            width="14"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
            class="nav-close"
          >
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            />
          </svg>
        </li>
        <li
          class="cursor-pointer text-center flex items-center md:justify-center"
          id="Me"
          v-on:mouseenter="lightsOn"
          v-on:mouseleave="lightsOff"
          v-on:click="handleClick"
          data-active
        >
          <p>Me</p>
        </li>
        <li
          class="cursor-pointer text-center flex items-center md:justify-center"
          id="Stack"
          v-on:mouseenter="lightsOn"
          v-on:mouseleave="lightsOff"
          v-on:click="handleClick"
        >
          <p>Stack</p>
        </li>
        <li
          class="cursor-pointer text-center flex items-center md:justify-center"
          id="Projects"
          v-on:mouseenter="lightsOn"
          v-on:mouseleave="lightsOff"
          v-on:click="handleClick"
        >
          <p>Projects</p>
        </li>
        <li
          class="cursor-pointer text-center flex items-center md:justify-center"
          id="Contact"
          v-on:mouseenter="lightsOn"
          v-on:mouseleave="lightsOff"
          v-on:click="handleContact"
        >
          <p>Contact Me</p>
        </li>
        <span class="slider"></span>
      </ul>
    </nav>
  </div>
</template>

<style>
.navigation-panel {
  position: fixed;
  z-index: 99;
  top: 0%;
  left: 0%;
  right: 0%;
  height: 10vh;
  background-color: black;
}
.navigation-panel ul {
  display: flex;
  height: 100%;
  position: relative;
}
nav li {
  position: relative;
  z-index: 2;
  width: 200px;
  height: 100%;
  background: var(--linear-background);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.slider {
  position: absolute;
  z-index: 1;
  top: 98%;
  left: 0%;
  bottom: 0%;
  transform: translateX(0);
  width: 200px;
  background: #0fa;
  transition: transform 500ms ease;
}
#Me[data-active] ~ .slider {
  transform: translateX(0px);
}
#Stack[data-active] ~ .slider {
  transform: translateX(200px);
}
#Projects[data-active] ~ .slider {
  transform: translateX(400px);
}
#Contact[data-active] ~ .slider {
  transform: translateX(600px);
}

#Me[data-hover] ~ .slider {
  transform: translateX(0px);
}
#Stack[data-hover] ~ .slider {
  transform: translateX(200px);
}
#Projects[data-hover] ~ .slider {
  transform: translateX(400px);
}
#Contact[data-hover] ~ .slider {
  transform: translateX(600px);
}

@media only screen and (max-width: 900px) {
  .nav-open {
    position: fixed;
    padding: 10px;
    z-index: 10;
  }
  .nav-open svg {
    height: 25px;
  }
  .nav-open path {
    fill: #0fa;
  }
  .nav-close {
    fill: #0fa;
  }
  .navigation-panel {
    position: fixed;
    top: 0%;
    left: 0%;
    bottom: 0%;
    right: 100%;
    width: 0%;
    height: 0%;
    background-color: rgba(0, 0, 0, 0.303);
    justify-content: start !important;
    /* overflow: hidden; */
    transition: right 500ms ease, width 500ms;
  }
  .navigation-panel.active {
    width: 100vw;
    height: 100vh;
    right: 0%;
  }
  .navigation-panel ul {
    flex-direction: column;
    width: 250px;
    background-color: black;
    padding: 20px 0px;
  }
  li {
    text-align: start !important;
    padding: 10px 40px;
    width: 250px;
    height: 50px;
  }
  .slider {
    top: 0%;
    left: 0%;
    height: 50px;
    right: 100%;
    width: 5px;
  }
  #Me[data-active] ~ .slider {
    transform: translateY(70px) translateX(0px);
  }
  #Stack[data-active] ~ .slider {
    transform: translateY(120px) translateX(0px);
  }
  #Projects[data-active] ~ .slider {
    transform: translateY(170px) translateX(0px);
  }
  #Contact[data-active] ~ .slider {
    transform: translateY(220px) translateX(0px);
  }
  #Me[data-hover] ~ .slider {
    transform: translateY(70px) translateX(0px);
  }
  #Stack[data-hover] ~ .slider {
    transform: translateY(120px) translateX(0px);
  }
  #Projects[data-hover] ~ .slider {
    transform: translateY(170px) translateX(0px);
  }
  #Contact[data-hover] ~ .slider {
    transform: translateY(220px) translateX(0px);
  }
}
</style>
