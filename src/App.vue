<template>
  <div>
    <Header />
    <Body />
  </div>
</template>

<script>
import Header from "./components/ui/Header.vue";
import Body from "./components/ui/Body.vue";

export default {
  name: "App",
  components: {
    Header,
    Body
  },
};
</script>

<style>
</style>
