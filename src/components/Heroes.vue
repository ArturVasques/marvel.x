<template>
  <div>
    <ul>
      <li v-for="heroe in heroes" :key="heroe.id">
        <img :src="heroe.thumbnail.path + '/portrait_small.' + heroe.thumbnail.extension"/>
        <p>Heroe Name: {{ heroe.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import api from "../api/axios";
export default {
  name: "HelloWorld",
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

<style scoped>
ul {
  list-style-type: none;
}
</style>
