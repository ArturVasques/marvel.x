<template>
  <div class="card">
    <img :src="imageUrl(imgPath, imgExtension)" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">
        {{ getDescription(description) }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgPath: { default: "", type: String },
    imgExtension: { default: "", type: String },
    title: { default: "", type: String },
    description: { default: "", type: String },
  },
  methods: {
    imageUrl(path, extension) {
      if (path === "" || extension === "") {
        return "";
      }
      const imgSize = "standard_medium." + extension;
      return `${path}/${imgSize}`;
    },
    getDescription(description) {
      if (!description) {
        return "Description Not Available";
      } else if (description.length > 100) {
        return description.substring(0, 100) + "[...]";
      }
      return description;
    },
  },
};
</script>

<style scoped>
.card {
  height: 100%;
  text-align: center;
}
</style>