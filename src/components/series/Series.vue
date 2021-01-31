<template>
  <div class="row">
    <div class="col-3 mb-5" v-for="serie in series" :key="serie.id">
      <Card
        :imgPath="serie.thumbnail.path"
        :imgExtension="serie.thumbnail.extension"
        :title="serie.title"
        :description="serie.description"
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
export default {
  components: {
    Card,
    Pagination,
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
    this.getSeries();
  },
  methods: {
    getSeries() {
      this.$store.commit("loaderOn");
      api.GetSeries(this.limit, this.offset).then((res) => {
        this.$store.commit("loaderOff");
        this.series = res.data.results;
        this.total = res.data.total;
      });
    },
    newOffset(value) {
      this.offset = value;
      this.getSeries();
    },
  },
};
</script>