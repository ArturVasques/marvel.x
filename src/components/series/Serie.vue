<template>
  <FullDescription
    :title="serie.title"
    :imageUrl="imageUrl(serie)"
    :description="serie.description"
  />
  <!-- <Comics :serieId="serieId" v-if="serieId" />
  <Series :serieId="serieId" v-if="serieId" /> -->
</template>

<script>
import api from "../../api/axios";
import utils from "../../utils";
import FullDescription from "../ui/FullDescription";
// import Comics from "../comics/Comics";
// import Series from "../series/Series";

export default {
  components: {
    FullDescription,
    // Comics,
    // Series,
  },
  data() {
    return {
      serieId: null,
      serie: {},
    //   comics: [],
    //   series: [],
    };
  },
  mounted() {
    const id = this.setSerieId();
    this.getSerie(id);
    // this.getComicsByHeroe(id);
    // this.getSeriesByHeroe(id);
  },
  methods: {
    imageUrl: utils.imageUrl,
    setSerieId() {
      this.heroeId = this.$route.params.id;
      return this.$route.params.id;
    },
    getSerie(id) {
      this.$store.commit("loaderOn");
      api.GetSerie(id).then((res) => {
        this.$store.commit("loaderOff");
        this.serie = res.data.results[0];
      });
    },
  }
};
</script>


