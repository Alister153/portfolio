<script>
export default {
  data() {
    return {
      containerTimeout: 0,
      textTimeout: 0,
      screen: screen.width,
    };
  },
  methods: {
    Parallex: function (event) {
      const x = (event.pageX * -1) / 20;
      const y = (event.pageY * -1) / 20;

      this.$refs.header.style.setProperty("--x", x);
      this.$refs.header.style.setProperty("--y", y);
    },
    prespectiveEffect: function (e) {
      const { x, y, width, height } = this.$refs.info.getBoundingClientRect();
      const limit = 50;
      const Xangle = (e.clientX - x - width / 2) / limit;
      const Yangle = -(e.clientY - y - height / 2) / limit;

      if (this.screen > 900) {
        this.$refs.info.style.setProperty("--XDeg", Yangle);
        this.$refs.info.style.setProperty("--YDeg", Xangle);
      }
    },
    Navbar: function () {
      const id = document.querySelector("[data-Me]");
      const navbar = document.querySelector(".navigation-panel");
      const active = navbar.querySelector("[data-active]");
      const navSections = navbar.querySelector("#Me");
      delete active.dataset.active;
      navSections.dataset.active = true;
    },
  },
  mounted: function () {
    const headerObserver = new IntersectionObserver(
      (entries) => {
        Array.from(entries).forEach((e) => {
          if (e.isIntersecting) {
            this.Navbar();
            this.containerTimeout = setTimeout(() => {
              this.$refs.info.style.boxShadow = `0px 0px 2rem #0fa, inset 0px 0px 20px #0fa`;
              this.$refs.info.style.border = `3px solid #0fa`;
              this.$refs.info.classList.add("reflection-lights-on");
              this.textTimeout = setTimeout(() => {
                this.$refs.hi.style.color = `#0fa`;
                this.$refs.fname.style.color = `#0fa`;
                this.$refs.about.style.color = `#0fa`;

                this.$refs.fname.classList.add("glow");
                this.$refs.hi.classList.add("glow");
                this.$refs.fname.classList.add("flicker-effect");
                this.$refs.hi.classList.add("flicker-effect-1");
                this.$refs.about.classList.add("glow-1");
                this.$refs.avatar.classList.add("on");
              }, 500);
            }, 1100);
          } else {
            if (this.containerTimeout) clearTimeout(this.containerTimeout);
            if (this.textTimeout) clearTimeout(this.textTimeout);
            this.$refs.info.removeAttribute("style");
            this.$refs.hi.removeAttribute("style");
            this.$refs.fname.removeAttribute("style");
            this.$refs.about.removeAttribute("style");
            this.$refs.hi.classList.remove("glow");
            this.$refs.fname.classList.remove("glow");
            this.$refs.about.classList.remove("glow-1");
            this.$refs.fname.classList.remove("flicker-effect");
            this.$refs.hi.classList.remove("flicker-effect-1");
            this.$refs.info.classList.remove("reflection-lights-on");
            this.$refs.avatar.classList.remove("on");
          }
        });
      },
      { threshold: 0.1 }
    );
    headerObserver.observe(this.$refs.header);
  },
};
</script>

<template>
  <header class="about view" ref="header" id="Me" v-on:mousemove="this.prespectiveEffect" data-on-Screen data-Me>
    <div class="info-container lights-on" ref="info">
      <div class="info">
        <h1 class="text-4xl hi" ref="hi">HI I'M</h1>
        <h1 class="name text-5xl w-fit d-fname" ref="fname">
          ALISTER
        </h1>
        <p class="about-me" ref="about">SELF-TAUGHT FRONT-END DEVELOPER.</p>
      </div>
      <div class="avatar-container" ref="avatar">
        <img class="avatar" src="/src/assets/Zoro.jpg" alt="" />
      </div>
      <div v-if="this.screen < 900" class="floating float1"></div>
      <div v-if="this.screen < 900" class="floating float2"></div>
    </div>
  </header>
</template>

<style>
.about {
  position: relative;
  font-family: 'HELLO DENVER DISPLAY REGULAR';
  z-index: 1;
  color: var(--light-text);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
}

.about .info-container {
  position: relative;
  z-index: 1;
  width: 60%;
  height: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 5px solid black;
  border-radius: 10px;
  transform: perspective(600px) rotateX(calc(var(--XDeg) * 1deg)) rotateY(calc(var(--YDeg) * 1deg));
  transition: box-shadow 500ms ease, border 500ms ease;
}

.about .info {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 15px 0px 15px;
  z-index: 1;
  font-family: 'HELLO DENVER DISPLAY REGULAR';
}

.about .info .hi {
  position: relative;
  z-index: 3;
  margin: 0px;
  color: black;
  transition: transform 500ms ease, text-shadow 500ms ease;
}

.about .d-fname {
  color: black;
  letter-spacing: 4px;
  transition: transform 500ms ease, text-shadow 500ms ease;
}

.about .info .about-me {
  position: relative;
  margin: 10px 0px;
  width: 100%;
  letter-spacing: 1px;
  line-height: 30px;
  font-size: 20px;
  z-index: 3;
  color: black;
  transition: transform 500ms ease, text-shadow 500ms ease;
}

/* glow and flicker and on effects */
.glow {
  text-shadow: 3px 0px 0px rgb(4, 150, 101), 3px 0px 5px rgb(6, 150, 102),
    3px 0px 10px rgb(6, 150, 102),
    2px 0px 80px #0fa,
    6px 0px 90px #0fa, 0px 0px 60px #0fa, 4px 0px 100px #0fa;
}

.lights-on {
  animation: lights-on 600ms 1s ease;
}

.reflection-lights-on::after {
  content: "";
  position: absolute;
  background-color: #0fa;
  top: 105%;
  left: 0%;
  width: 100%;
  height: 30%;
  animation-delay: 4s;
  transform: perspective(5em) rotateX(50deg) scale(1, 0.35);
  filter: blur(4em);
}

.glow-1 {
  text-shadow: 0px 0px 0px rgb(0, 128, 85), 1px 1px 0px rgb(0, 128, 85),
    2px 2px 0px rgb(0, 128, 85), 3px 3px 0px rgb(0, 128, 85),
    0 0 0.125em hsl(0 0% 100%/0.3), 0 0 20rem #0fa, 0 0 0.45em #0fa;
}

.flicker-effect {
  animation: flicker 1s ease;
}

.flicker-effect-1 {
  animation: flicker-1 1s ease;
}

.avatar-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 30%;
  height: 70%;
  z-index: 1;
  filter: brightness(0);
  transition: transform 500ms ease;
}

.on {
  filter: brightness(1) !important;
}

.avatar-container img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  box-shadow: 1px 1px 1px lime, 2px 2px 2px lime, 3px 3px 3px lime;
}

.about .shape {
  position: absolute;
  transform: translateY(-150%);
  background: rgba(255, 255, 255, 0.3);
  transition: all 200ms ease;
  animation: background-animate 10s infinite ease;
}

@keyframes lights-on {
  from {
    filter: blur(1px) brightness(0);
  }

  to {
    filter: blur(1px) brightness(1);
  }
}

@keyframes flicker {
  0% {
    filter: blur(1px) brightness(1);
  }

  3% {
    text-shadow: 0px 0px 1px #0fa, 1px 1px 1px #0fa;
    color: black;
    filter: blur(1px) brightness(0.1);
  }

  6% {
    filter: blur(1px) brightness(1);
  }

  7% {
    text-shadow: 0px 0px 1px #0fa, 1px 1px 1px #0fa;
    color: black;
    filter: blur(1px) brightness(0.3);
  }

  8% {
    filter: blur(1px) brightness(1);
  }

  9% {
    text-shadow: 0px 0px 1px #0fa, 1px 1px 1px #0fa;
    color: black;
    filter: blur(1px) brightness(0);
  }

  10% {
    filter: blur(1px) brightness(1);
  }

  20% {
    text-shadow: 0px 0px 1px #0fa, 1px 1px 1px #0fa;
    color: black;
    filter: blur(1px) brightness(0.6);
  }

  30% {
    filter: blur(1px) brightness(1);
  }

  40% {
    text-shadow: 0px 0px 1px #0fa, 1px 1px 1px #0fa;
    color: black;
    filter: blur(1px) brightness(0.2);
  }

  50% {
    filter: blur(1px) brightness(1);
  }

  100% {
    text-shadow: 0px 0px 1px #0fa, 1px 1px 1px #0fa;
    color: black;
    filter: blur(1px) brightness(0.5);
  }
}

@keyframes flicker-1 {
  0% {
    text-shadow: 0px 0px 1px #0fa, 1px 1px 1px #0fa;
    color: black;
    filter: blur(1px) brightness(0.5);
  }

  3% {
    filter: blur(1px) brightness(1);
  }

  6% {
    filter: blur(1px) brightness(1);
  }

  7% {
    filter: blur(1px) brightness(1);
  }

  8% {
    text-shadow: 0px 0px 1px #0fa, 1px 1px 1px #0fa;
    color: black;
    filter: blur(1px) brightness(0.5);
  }

  9% {
    text-shadow: 0px 0px 1px #0fa, 1px 1px 1px #0fa;
    color: black;
    filter: blur(1px) brightness(0.2);
  }

  10% {
    filter: blur(1px) brightness(1);
  }

  20% {
    text-shadow: 0px 0px 1px #0fa, 1px 1px 1px #0fa;
    color: black;
    filter: blur(1px) brightness(0.2);
  }

  30% {
    filter: blur(1px) brightness(1);
  }

  40% {
    text-shadow: 0px 0px 1px #0fa, 1px 1px 1px #0fa;
    color: black;
    filter: blur(1px) brightness(0.4);
  }

  50% {
    text-shadow: 0px 0px 1px #0fa, 1px 1px 1px #0fa;
    color: black;
    filter: blur(1px) brightness(0.2);
  }

  90% {
    text-shadow: 0px 0px 1px #0fa, 1px 1px 1px #0fa;
    color: black;
    filter: blur(1px) brightness(0.9);
  }

  100% {
    filter: blur(1px) brightness(1);
  }
}

@media only screen and (max-width: 900px) {
  .floating {
    position: absolute;
    width: 90px;
    height: 80px;
    backdrop-filter: blur(10px);
    border-radius: 5px;
  }

  .floating.float1 {
    bottom: 90%;
    right: 10px;
    animation: up-down 3s ease infinite;
  }

  .floating.float1::after {
    content: "";
    position: absolute;
    border-radius: 5px;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(20px);
    background-color: rgba(0, 0, 0, 0);
  }

  .floating.float2 {
    top: 89%;
    left: 20px;
    animation: up-down 3s ease reverse infinite;
    animation-delay: 1s;
  }

  .floating.float2::after {
    content: "";
    position: absolute;
    border-radius: 5px;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(20px);
    background-color: rgba(0, 0, 0, 0);
  }

  @keyframes up-down {

    0%,
    100% {
      transform: translateY(10%) translateX(10%);
    }

    50% {
      transform: translateY(-10%) translateX(-10%);
    }
  }
}

@media only screen and (max-width: 500px) {
  .about .info-container .info .about-me {
    margin-top: 10%;
  }
}
</style>
