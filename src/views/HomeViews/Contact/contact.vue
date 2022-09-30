<script>
import emailjs from "emailjs-com";

export default {
  props: ["contact"],
  data() {
    return {
      name: "",
      email: "",
      message: "",
      send: undefined,
      emailActive: false,
      nameActive: false,
    };
  },
  methods: {
    sendEmail: function (e) {
      if (this.validate()) {
        try {
          this.send = "loading";
          emailjs
            .send(
              "service_qfh5m9x",
              "template_erq4h2c",
              {
                from_name: this.name,
                to_name: "Alister",
                from_email: this.email,
                message: this.message,
              },
              "YGydwiDxBuQnIDA7N"
            )
            .then((res) => {
              setTimeout(() => {
                this.send = true;
              }, 2000);
            });
        } catch (err) {
          console.log(err);
          setTimeout(() => {
            this.send = false;
          }, 2000);
        }
      }
    },

    validate: function () {
      const emailValidate =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          this.email.toLowerCase()
        );

      const nameValidate = this.name.length !== 0;
      const messageValidate = this.message.length !== 0;

      if (!emailValidate) this.$refs.emailTag.style.color = "red";
      if (!nameValidate) this.$refs.nameTag.style.color = "red";
      if (!messageValidate) this.$refs.messageTag.classList.add("invalid");

      if (!emailValidate || !nameValidate || !messageValidate) {
        this.send = false;
        setTimeout(() => {
          this.$refs.emailTag.removeAttribute("style");
          this.$refs.nameTag.removeAttribute("style");
          this.$refs.messageTag.classList.remove("invalid");
          this.send = undefined;
        }, 2000);
      }
      return (
        emailValidate == true && nameValidate == true && messageValidate == true
      );
    },
    handleClick: function () {
      this.$emit("contactChange", !this.contact);
    },
  },
};
</script>

<template>
  <div class="contact-wrapper" @click="handleClick">
    <div
      class="contact"
      @click="
        (e) => {
          e.stopPropagation();
        }
      "
    >
      <div class="contact-title">
        <h1>Contact Me</h1>
      </div>
      <div class="contact-form">
        <label
          class="name-wrapper"
          :class="{ active: nameActive }"
          @click="
            if (name.length === 0) {
              if (nameActive) this.$refs.name.blur();
              nameActive = !nameActive;
            }
            if (emailActive && email.length === 0) emailActive = !emailActive;
          "
        >
          <p
            ref="nameTag"
            @click="
              if (name.length === 0) {
                if (nameActive) this.$refs.name.blur();
                nameActive = !nameActive;
              }
              if (emailActive && email.length === 0) emailActive = !emailActive;
            "
          >
            Your Name
          </p>
          <input id="name" type="text" ref="name" v-model="name" />
        </label>
        <label
          class="email-wrapper"
          :class="{ active: emailActive }"
          @click="
            if (email.length === 0) {
              if (emailActive) this.$refs.email.blur();
              emailActive = !emailActive;
            }
            if (nameActive && name.length === 0) nameActive = !nameActive;
          "
        >
          <p
            ref="emailTag"
            @click="
              if (email.length === 0) {
                if (emailActive) this.$refs.email.blur();
                emailActive = !emailActive;
              }
              if (nameActive && name.length === 0) nameActive = !nameActive;
            "
          >
            Your Email
          </p>
          <input type="text" ref="email" v-model="email" />
        </label>
        <textarea
          ref="messageTag"
          v-model="message"
          @click="
            if (nameActive && name.length === 0) nameActive = !nameActive;
            if (emailActive && email.length === 0) emailActive = !emailActive;
          "
          placeholder="Message..."
        ></textarea>
        <button class="send-btn" v-on:click="sendEmail">
          <div v-if="this.send === 'loading'" class="loading">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <fawsome-icon :icon="['fas', 'arrows-rotate']"></fawsome-icon>
          </div>
          <div v-else-if="this.send === true" class="sent">
            <fawsome-icon :icon="['fas', 'check']"></fawsome-icon>
          </div>
          <div v-else-if="this.send === false" class="send-error">
            <fawsome-icon :icon="['fas', 'xmark']"></fawsome-icon>
          </div>
          <span v-else="this.send">Send</span>
        </button>
      </div>
      <span class="topBorder"></span>
      <span class="leftBorder"></span>
      <span class="rightBorder"></span>
      <span class="bottomBorder"></span>
    </div>
  </div>
</template>

<style>
.contact-wrapper {
  position: fixed;
  z-index: 90;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0%;
  right: 0%;
  left: 0%;
  bottom: 0%;
  background-color: rgba(0, 0, 0, 0.411);
}
.contact-wrapper .contact {
  position: relative;
  width: 60%;
  height: 80%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  opacity: 0;
  animation: popup 500ms forwards;
}
.contact-wrapper .contact::after {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0%;
  right: 0%;
  left: 0%;
  bottom: 0%;
  background-color: black;
  filter: blur(20px);
}

@keyframes popup {
  0% {
    transform: scale(2);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.contact-wrapper .contact .contact-title {
  font-size: 50px;
}
.contact-wrapper .contact .contact-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.contact-wrapper .contact .contact-form > * {
  margin: 10px 0px;
  width: 60%;
  height: 40px;
  border-radius: 5px;
  resize: none;
  color: black;
  outline: none;
}
.contact-wrapper .contact .contact-form input {
  position: absolute;
  padding: 10px;
  border-radius: 5px;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  outline: none;
}
.contact-wrapper .contact .contact-form .name-wrapper p,
.contact-wrapper .contact .contact-form .email-wrapper p {
  position: absolute;
  top: 0%;
  transform: translateX(10%) translateY(30%);
  z-index: 1;
  transition: transform 100ms ease, font-size 100ms ease, color 100ms ease;
}
.contact-wrapper .contact .contact-form .name-wrapper.active p,
.contact-wrapper .contact .contact-form .email-wrapper.active p {
  font-size: 10px;
  color: grey;
  transform: translateX(10%) translateY(0%);
}
.contact-wrapper .contact .contact-form .name-wrapper,
.contact-wrapper .contact .contact-form .email-wrapper {
  position: relative;
}
.contact-wrapper .contact .contact-form textarea {
  padding: 10px;
  height: 250px;
}
.contact-wrapper .contact .contact-form .send-btn {
  width: 150px;
  color: white;
  box-shadow: 0px 0px 5px grey;
}
.contact-wrapper .contact .contact-form .send-btn:active {
  box-shadow: inset 0px 0px 5px grey;
}
.invalid::placeholder {
  color: red;
}

.loading {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  overflow: hidden;
}
.loading svg {
  animation: rotate 1.5s infinite;
}

.loading span:nth-child(1) {
  position: absolute;
  top: 0%;
  left: -100%;
  width: 100%;
  height: 4px;
  background-color: lime;
  animation: load-1 500ms forwards;
}
.loading span:nth-child(2) {
  position: absolute;
  top: -100%;
  right: 0%;
  width: 4px;
  height: 100%;
  background-color: lime;
  animation: load-2 500ms forwards;
  animation-delay: 500ms;
}
.loading span:nth-child(3) {
  position: absolute;
  bottom: 0%;
  right: -100%;
  width: 100%;
  height: 4px;
  background-color: lime;
  animation: load-3 500ms forwards;
  animation-delay: 1s;
}
.loading span:nth-child(4) {
  position: absolute;
  bottom: -100%;
  left: 0%;
  width: 4px;
  height: 100%;
  background-color: lime;
  animation: load-4 500ms forwards;
  animation-delay: 1.5s;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes load-1 {
  0% {
    left: -100%;
  }
  100% {
    left: 0%;
  }
}
@keyframes load-2 {
  0% {
    top: -100%;
  }
  100% {
    top: 0%;
  }
}
@keyframes load-3 {
  0% {
    right: -100%;
  }
  100% {
    right: 0%;
  }
}
@keyframes load-4 {
  0% {
    bottom: -100%;
  }
  100% {
    bottom: 0%;
  }
}

.send-btn .sent {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: lime;
  border: 1px solid lime;
  overflow: hidden;
}
.send-btn .send-error {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  color: red;
  border: 1px solid red;
}
.send-btn .send-error svg,
.send-btn .sent svg {
  animation: response 500ms ease;
}
@keyframes response {
  0% {
    opacity: 0;
    transform: scale(5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.topBorder,
.leftBorder,
.rightBorder,
.bottomBorder {
  position: absolute;
  padding: 2px;
  border-radius: 50px;
}
.topBorder {
  top: 0%;
  left: 10%;
  right: 0%;
  background-color: aqua;
  box-shadow: 2px 0px 5px aqua, -2px 0px 10px aqua;
}
.leftBorder {
  background-color: aqua;
  top: 0%;
  left: 99.7%;
  bottom: 10%;
  box-shadow: 2px 0px 5px aqua, -2px 0px 10px aqua;
}
.rightBorder {
  background-color: orange;
  top: 10%;
  right: 99.7%;
  bottom: -0.5%;
  box-shadow: 2px 0px 5px orange, -2px 0px 10px orange;
}
.bottomBorder {
  background-color: orange;
  top: 100%;
  left: 0%;
  right: 10%;
  bottom: 10%;
  box-shadow: 2px 0px 5px orange, -2px 0px 10px orange;
}
@media only screen and (max-width: 900px) {
  .contact-wrapper .contact {
    width: 90%;
    height: 550px;
  }
  .contact-wrapper .contact .contact-form > * {
    width: 80%;
  }
}
@media only screen and (max-width: 500px) {
  .contact-wrapper .contact .contact-title {
    font-size: 30px;
  }
}
</style>
