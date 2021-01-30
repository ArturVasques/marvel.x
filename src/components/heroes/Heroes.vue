<template>
  <div class="row">
    <div class="col-3 mb-5" v-for="heroe in heroes" :key="heroe.id">
      <HeroeCard :heroe="heroe" />
    </div>
  </div>
</template>

<script>
import api from "../../api/axios";
import HeroeCard from "./HeroeCard";
export default {
  components: {
    HeroeCard,
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
