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
  <div class="space-y-4">
    <NavBar ></NavBar>
    <router-view></router-view>
  </div>
</template>