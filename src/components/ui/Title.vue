<template>
  <div class="row mb-3">
    <div class="col-10 offset-1 text-center">
      <h1>{{title}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: "",
      type: String,
    },
  },
};
</script>

<style scoped>
h1 {
  color: #518cca;
}
</style>