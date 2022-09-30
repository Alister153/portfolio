<script>
import projects from "./Projects/projects.vue";
import stack from "./Stack/stack.vue";
export default {
  components: {
    projects,
    stack,
  },
  methods: {
    handleRoute: function (value) {
      setTimeout(() => {
        this.$router.push(`/${value}`);
      }, 200);
    },
  },
};
</script>

<template>
  <main class="main">
    <!-- <stack v-on:changeRoute="handleRoute" />
    <projects v-on:changeRoute="handleRoute" /> -->
  </main>
</template>
<style>
main {
  position: relative;
  z-index: 2;
  width: 100%;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
