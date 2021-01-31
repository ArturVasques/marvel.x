<template>
  <Title title="Heroes" />
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
    id: {
      default: null,
      type: Number,
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
    this.getHeroes();
  },
  methods: {
    getRelativePath: utils.getRelativePath,
    getHeroes() {
      this.$store.commit("loaderOn");
      api.GetHeroes(this.limit, this.offset).then((res) => {
        this.$store.commit("loaderOff");
        this.heroes = res.data.results;
        this.total = res.data.total;
      });
    },
    newOffset(value) {
      this.offset = value;
      this.getHeroes();
    },
  },
};
</script>
