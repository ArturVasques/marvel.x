<template>
  <div class="row">
    <div class="col-3 mb-5" v-for="heroe in heroes" :key="heroe.id">
      <Card :imgPath="heroe.thumbnail.path" :imgExtension="heroe.thumbnail.extension" :title="heroe.name" :description="heroe.description" />
    </div>
  </div>
</template>

<script>
import api from "../../api/axios";
import Card from "../ui/Card";
export default {
  components: {
    Card,
  },
  data() {
    return {
      heroes: [],
    };
  },
  mounted() {
    this.getHeroes();
  },
  methods: {
    getHeroes() {
      api.GetHeroes().then((res) => {
        this.heroes = res.data.results;
      });
    },
  },
};
</script>
