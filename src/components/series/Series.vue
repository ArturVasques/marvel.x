<template>
  <Title title="Series" v-if="series.length > 0" />
  <div class="row">
    <div class="col-3 mb-5" v-for="serie in series" :key="serie.id">
      <Card
        :imgPath="serie.thumbnail.path"
        :imgExtension="serie.thumbnail.extension"
        :title="serie.title"
        :description="serie.description"
        :relativePath="getRelativePath('series', serie.id)"
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
    heroeId: {
      default: null,
      type: String,
    }
  },
  components: {
    Card,
    Pagination,
    Title,
  },
  data() {
    return {
      series: [],
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
      this.heroeId
        ? this.getSeriesByHeroe(this.heroeId)
        : this.getSeries();
    },
    getSeries() {
      this.$store.commit("loaderOn");
      api.GetSeries(this.limit, this.offset).then((res) => {
        this.$store.commit("loaderOff");
        this.series = res.data.results;
        this.total = res.data.total;
      });
    },
    getSeriesByHeroe(id) {
      this.$store.commit("loaderOn");
      api.GetSeriesByHeroe(this.limit, this.offset, id).then((res) => {
        this.$store.commit("loaderOff");
        this.series = res.data.results;
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