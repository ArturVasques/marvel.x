<template>
  <div class="row">
    <div class="col-10 offset-1 text-center">
      <h1>{{ title }}</h1>
      <img :src="imageUrl" class="card-img-top mt-3 heroe-image" />
      <p class="mt-3">{{ getDescription(description) }}</p>
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
    imageUrl: {
      default: "",
      type: String,
    },
    description: {
      default: "",
      type: String,
    },
  },
  methods: {
    getDescription(description) {
      if (!description) {
        return "Description Not Available";
      }
      return description;
    },
  },
};
</script>

<style scoped>
.heroe-image {
  max-width: 250px;
}
h1 {
  color: #518cca;
}
</style>