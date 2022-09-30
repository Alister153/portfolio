<script>
import Header from "./HomeViews/header.vue";
import Main from "./HomeViews/main.vue";
import Three from "./three.vue";
import Navbar from "./HomeViews/Navbar.vue";
import Contact from "./HomeViews/Contact/contact.vue";
import '../assets/HELLO-DENVER-DISPLAY-REGULAR-Regular/stylesheet.css'
export default {
  components: {
    Header,
    Main,
    Three,
    Navbar,
    Contact,
  },
  data() {
    return {
      stackFadeInOut: false,
      contactState: false,
    };
  },
  methods: {
    ChangeContactState: function (value) {
      this.contactState = value;
    },
  },
};
</script>

<template>
  <div class="mainOverflow-container">
    <navbar v-on:contactChange="ChangeContactState" :contact="this.contactState"></navbar>
    <Header></Header>
    <Main></Main>
    <contact v-if="contactState" v-on:contactChange="ChangeContactState" :contact="this.contactState"></contact>
  </div>
</template>

<style>
@import url("http://fonts.cdnfonts.com/css/omnes-regular");

body,
html {
  width: 100%;
  height: 100%;
  margin: 0%;
  padding: 0%;
  color: white;
  font-family: "Omnes", sans-serif;
  font-family: "Omnes Semibold", sans-serif;
}

:root {
  --dark-bg: #000b16;
  --dark-text: black;
  --dark-underline: white;
  --light-bg: white;
  --light-text: light;
  --dark-underline: black;
  --linear-background: linear-gradient(90deg,
      rgba(157, 254, 0, 1) 0%,
      rgba(20, 217, 229, 1) 100%);
}

.overflow-div {
  width: 100%;
  overflow: hidden;
  background-color: black;
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

  .main .secstastackcktion1 .stack-container .language-container-box:hover .language-img {
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