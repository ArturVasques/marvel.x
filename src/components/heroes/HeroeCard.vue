<template>
    <div class="card">
      <img
        :src="imageUrl(heroe.thumbnail.path, heroe.thumbnail.extension)"
        class="card-img-top"
      />
      <div class="card-body">
        <h5 class="card-title">{{ heroe.name }}</h5>
        <p class="card-text" maxlength="100" :title="heroe.description">
          {{
            heroe.description ? getDescription(heroe.description) : "Description Not Available"
          }}
        </p>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    heroe: Object,
  },
  methods: {
    imageUrl(path, extension) {
      const imgSize = "portrait_medium." + extension;
      return `${path}/${imgSize}`;
    },
    getDescription(description) {
        console.log(description.length);
        if(description.length > 100) {
            return description.substring(0,100) + '[...]'
        } 
        return description;
    }
  },
};
</script>

<style scoped>
.card {
  height: 100%;
}
</style>