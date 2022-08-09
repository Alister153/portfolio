<script>
import Header from "./components/header.vue";
import Main from "./components/main.vue";
import Three from "./components/three.vue";
import scrollComponents from "./components/scrollComponents.vue";
export default {
  components: {
    Header,
    Main,
    Three,
    scrollComponents,
  },
  data() {
    return {
      stackFadeInOut: false,
    };
  },
};
</script>

<template>
  <scrollComponents />
  <Three />
  <Header></Header>
  <Main></Main>
</template>

<style>
body,
html {
  width: 100%;
  height: 100%;
  margin: 0%;
  padding: 0%;
  color: white;
  overflow: hidden;
  font-family: "Times New Roman";
}

:root {
  --dark-bg: #000b16;
  --dark-text: black;
  --dark-underline: white;
  --light-bg: white;
  --light-text: light;
  --dark-underline: black;
}

.overflow-div {
  width: 100%;
  height: 100%;
  overflow: auto;
  padding-right: 15px;
  scroll-behavior: smooth;
  background-color: transparent;
}

.overflow-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

@media only screen and (max-width: 1300px) {
  .about .info {
    width: 100%;
    padding: 10px 40px;
  }
  .about .info .about-me {
    margin: 20px 0px;
  }

  .about .avatar-container {
    display: none;
  }
}

@media only screen and (max-width: 500px) {
  .about {
    justify-content: none;
  }
  .about .info-container {
    width: 80%;
    height: 60%;
  }
  .about .info {
    padding: 20px;
  }
  .about .info .about-me {
    line-height: 30px;
    padding: 0px;
  }
  main .stack {
    width: 100%;
  }
  .main .stack .stack-container .language-container-box {
    margin: 10px 0px 10px 0px;
  }
  .main .stack .stack-container .language-container-box {
    padding: 1px;
  }
  .main .stack .stack-container .language-container .language-img {
    width: 100px;
  }
  .main
    .secstastackcktion1
    .stack-container
    .language-container-box:hover
    .language-img {
    width: 110px;
  }
}

@keyframes stack {
  0% {
    opacity: 1;
    transform: translateX(-150px);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
