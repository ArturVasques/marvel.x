<template>
  <div class="row">
    <div class="col-3 mb-5" v-for="serie in series" :key="serie.id">
      <Card :imgPath="serie.thumbnail.path" :imgExtension="serie.thumbnail.extension" :title="serie.title" :description="serie.description" />
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
      series: [],
    };
  },
  mounted() {
    this.getSeries();
  },
  methods: {
    getSeries() {
      api.GetSeries().then((res) => {
        this.series = res.data.results;
      });
    },
  },
};
</script>