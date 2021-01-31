<template>
  <div>
    <Header />
    <Body />
    <Loader />
  </div>
</template>

<script>
import Header from "./components/ui/Header.vue";
import Body from "./components/ui/Body.vue";
import Loader from "./components/ui/Loader.vue";

export default {
  name: "App",
  components: {
    Header,
    Body,
    Loader
  },
};
</script>

<style>
</style>