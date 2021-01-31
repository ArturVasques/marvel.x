<template>
  <FullDescription :title="heroe.name" :imageUrl="imageUrl(heroe)" :description="heroe.description"/>
  <Comics :heroeId="heroeId" v-if="heroeId" />
  <Series :heroeId="heroeId" v-if="heroeId" />
</template>

<script>
import api from "../../api/axios";
import utils from "../../utils";
import FullDescription from "../ui/FullDescription";
import Comics from "../comics/Comics";
import Series from "../series/Series";

export default {
  components: {
    FullDescription,
    Comics,
    Series,
  },
  data() {
    return {
      heroeId: null,
      heroe: {},
      comics: [],
      series: [],
    };
  },
  mounted() {
    const id = this.setHeroeId();
    this.getHeroe(id);
    this.getComicsByHeroe(id);
    this.getSeriesByHeroe(id);
  },
  methods: {
    imageUrl: utils.imageUrl,
    setHeroeId() {
      this.heroeId = this.$route.params.id;
      return this.$route.params.id;
    },
    getHeroe(id) {
      this.$store.commit("loaderOn");
      api.GetHeroe(id).then((res) => {
        this.$store.commit("loaderOff");
        this.heroe = res.data.results[0];
      });
    },
    getComicsByHeroe(id) {
      this.$store.commit("loaderOn");
      api.GetComicsByHeroe(20, 0, id).then((res) => {
        this.$store.commit("loaderOff");
        this.comics = res.data.results;
      });
    },
    getSeriesByHeroe(id) {
      this.$store.commit("loaderOn");
      api.GetSeriesByHeroe(20, 0, id).then((res) => {
        this.$store.commit("loaderOff");
        this.series = res.data.results;
      });
    }
  }
};
</script>


