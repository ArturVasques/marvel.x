<template>
  <FullDescription
    :title="serie.title"
    :imageUrl="imageUrl(serie)"
    :description="serie.description"
  />
</template>

<script>
import api from "../../api/axios";
import utils from "../../utils";
import FullDescription from "../ui/FullDescription";

export default {
  components: {
    FullDescription
  },
  data() {
    return {
      serieId: null,
      serie: {},
    };
  },
  mounted() {
    const id = this.setSerieId();
    this.getSerie(id);
  },
  methods: {
    imageUrl: utils.imageUrl,
    setSerieId() {
      this.serieId = this.$route.params.id;
      return this.$route.params.id;
    },
    getSerie(id) {
      this.$store.commit("loaderOn");
      api.GetSerie(id).then((res) => {
        this.$store.commit("loaderOff");
        this.serie = res.data.results[0];
      });
    },
  },
};
</script>


