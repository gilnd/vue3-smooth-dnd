<script>
import NavBar from './components/NavBar.vue';

export default {
  name: "App",
  components: { NavBar },
  beforeMount() {
    this.$store.dispatch("initTheme");
  },
};
</script>

<template>
  <div class="bg-gray-300 dark:bg-gray-900 h-screen flex flex-col">
    <NavBar ></NavBar>
    <router-view class="flex-grow p-4"></router-view>
  </div>
</template>