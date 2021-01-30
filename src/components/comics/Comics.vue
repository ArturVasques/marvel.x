<template>
  <div class="row">
    <div class="col-3 mb-5" v-for="comic in comics" :key="comic.id">
      <Card :imgPath="comic.thumbnail.path" :imgExtension="comic.thumbnail.extension" :title="comic.title" :description="comic.description" />
    </div>
  </div>
</template>

<script>
import api from "../../api/axios";
import Card from "../ui/Card"
export default {
  components: {
      Card
  },
  data() {
    return {
      comics: [],
    };
  },
  mounted() {
    this.getComics();
  },
  methods: {
    getComics() {
      api.GetComics().then((res) => {
        this.comics = res.data.results;
      });
    },
  },
};
</script>