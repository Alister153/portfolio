<script>
export default {
  data() {
    return {};
  },
  methods: {
    Parallex: function (event) {
      const x = (event.pageX * -1) / 20;
      const y = (event.pageY * -1) / 20;

      this.$refs.header.style.setProperty("--x", x);
      this.$refs.header.style.setProperty("--y", y);
    },
  },
  mounted: function () {
    const headerObserver = new IntersectionObserver(
      (entries) => {
        Array.from(entries).forEach((e) => {
          if (e.isIntersecting) {
            this.$refs.header.addEventListener("mousemove", this.Parallex);
            const active_slide = document.querySelector("[data-navslide]");
            const active = document.querySelector("[data-on-Screen]");
            delete active.dataset.onScreen;
            delete active_slide.dataset.navslide;
            e.target.dataset.onScreen = true;
            document.getElementById("about").dataset.navslide = true;
          } else {
            return;
          }
        });
      },
      { threshold: 1 }
    );
    headerObserver.observe(this.$refs.header);
  },
};
</script>

<template>
  <header class="about view" ref="header" data-on-Screen>
    <div class="info-container">
      <div class="info">
        <h1 class="hi">Hi, I'm</h1>
        <h1 class="name">
          <div class="fname-container">
            <span class="fname"> </span>
          </div>
        </h1>
        <p class="about-me">
          Self-Taught Front-end Developer.
          <br />
          Currently learning Backend languages <br />
          Uni student learning Information Technology
        </p>
      </div>
      <div class="avatar-container">
        <img class="avatar" src="../assets/Zoro.jpg" alt="" />
      </div>
    </div>
  </header>
</template>

<style>
.about {
  position: relative;
  color: var(--light-text);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
.about .info-container {
  position: relative;
  z-index: 1;
  width: 60%;
  height: 50%;
  display: flex;
  transform: translate3d(calc(var(--x) * 1px), calc(var(--y) * 1px), 0px);
  justify-content: space-evenly;
  /* background-color: var(--dark-bg); */
  /* box-shadow: inset 0px 0px 100rem var(--dark-bg); */
  /* border: 1px solid white; */
  border-radius: 10px;
}
.about .info {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 15px 0px 15px;
  z-index: 1;
}

.about .info .hi {
  position: relative;
  z-index: 3;
  margin: 0px;
}

.about .name {
  cursor: default;
  width: 100%;
  margin: 10px 0px;
  font-size: 40px;
  height: 10%;
  position: relative;
}

.about .name .fname-container span::before {
  content: "Alister";
  background-color: orange;
  transform: translateY(-23px) rotateX(-90deg);
  padding: 0px 10px;
  position: absolute;
  top: 0%;
  left: 0%;
  color: var(--dark-text);
  z-index: 1;
  transition: all 500ms ease;
}

.about .name .fname-container:hover span::before {
  z-index: 2;
  perspective: none;
  transform: translateY(0px);
}

.about .name .fname-container span::after {
  content: "Alister";
  background-color: red;
  color: white;
  top: 0%;
  padding: 0px 10px;
  position: absolute;
  left: 0%;
  transition: all 500ms ease;
}

.about .name .fname-container:hover span::after {
  transform: translateY(23px) rotateX(90deg);
}

.about .info .about-me {
  position: relative;
  margin: 10px 0px;
  width: 100%;
  letter-spacing: 1px;
  line-height: 30px;
  font-size: 20px;
  z-index: 3;
}

.avatar-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 40%;
  z-index: 1;
}

.avatar-container img {
  width: 70%;
  border-radius: 5px;
  box-shadow: 5px 5px white, 10px 10px orange, 15px 15px white;
  transition: box-shadow 400ms ease;
}

.avatar-container img:hover {
  transition: box-shadow 400ms ease;
  box-shadow: 0px 0px white, 0px 0px orange, 0px 0px white;
}

.about .shape {
  position: absolute;
  transform: translateY(-150%);
  background: rgba(255, 255, 255, 0.3);
  transition: all 200ms ease;
  animation: background-animate 10s infinite ease;
}
</style>
