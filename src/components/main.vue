<script>
import projects from "./MainComponents/projects.vue";
import stack from "./MainComponents/stack.vue";
export default {
  components: {
    projects,
    stack
  },
};
</script>

<template>
  <main class="main">
    <stack />
    <projects />
  </main>
</template>
<style>
main {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

</style>
