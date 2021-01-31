<template>
  <Title title="Heroes" v-if="heroes.length > 0" />
  <div class="row">
    <div class="col-3 mb-5" v-for="heroe in heroes" :key="heroe.id">
      <Card
        :imgPath="heroe.thumbnail.path"
        :imgExtension="heroe.thumbnail.extension"
        :title="heroe.name"
        :description="heroe.description"
        :relativePath="getRelativePath('heroes', heroe.id)"
      />
    </div>
    <div class="col-12" v-if="total > 0">
      <Pagination
        :total="total"
        :limit="limit"
        :buttons="buttons"
        @offset="newOffset"
      />
    </div>
  </div>
</template>

<script>
import api from "../../api/axios";
import Card from "../ui/Card";
import Pagination from "../ui/Pagination";
import utils from "../../utils";
import Title from "../ui/Title";
export default {
  props: {
    serieId: {
      default: null,
      type: String,
    },
    comicId: {
      default: null,
      type: String,
    },
  },
  components: {
    Card,
    Pagination,
    Title,
  },
  data() {
    return {
      heroes: [],
      total: 0,
      limit: 20,
      buttons: 8,
      offset: 0,
    };
  },
  mounted() {
    this.initSeries();
  },
  methods: {
    getRelativePath: utils.getRelativePath,
    initSeries() {
      this.serieId
        ? this.getHeroesBySerie(this.serieId)
        : this.comicId
        ? this.getHeroesByComic(this.comicId)
        : this.getHeroes();
    },
    getHeroes() {
      this.$store.commit("loaderOn");
      api.GetHeroes(this.limit, this.offset).then((res) => {
        this.$store.commit("loaderOff");
        this.heroes = res.data.results;
        this.total = res.data.total;
      });
    },
    getHeroesBySerie(id) {
      this.$store.commit("loaderOn");
      api.GetHeroesBySerie(this.limit, this.offset, id).then((res) => {
        this.$store.commit("loaderOff");
        this.heroes = res.data.results;
        this.total = res.data.total;
      });
    },
    getHeroesByComic(id) {
      this.$store.commit("loaderOn");
      api.GetHeroesByComic(this.limit, this.offset, id).then((res) => {
        this.$store.commit("loaderOff");
        this.heroes = res.data.results;
        this.total = res.data.total;
      });
    },
    newOffset(value) {
      this.offset = value;
      this.initSeries();
    },
  },
};
</script>
