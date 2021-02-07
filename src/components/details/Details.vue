<template>
  <FullDescription
    :title="title"
    :imageUrl="imageUrl"
    :description="description"
    v-if="showFullDescription"
  />
</template>

<script>
import api from "../../api/axios";
import utils from "../../utils";
import FullDescription from "../ui/FullDescription";

export default {
  components: {
    FullDescription,
  },
  data() {
    return {
      id: null,
      title: "",
      imageUrl: "",
      description: "",
      showFullDescription: false
    };
  },
  mounted() {
    const id = this.setId();
    this.init(id);
  },
  methods: {
    getImageUrl: utils.imageUrl,
    setId() {
      this.id = this.$route.params.id;
      return this.$route.params.id;
    },
    init(id) {
      const currentPath = this.$route.path.split("/")[1];
      if (currentPath === "series") {
        this.getSerie(id);
      } else if (currentPath === "comics") {
        this.getComic(id);
      } else {
        this.getHeroe(id);
      }
    },
    getHeroe(id) {
      this.$store.commit("loaderOn");
      api.GetHeroe(id).then((res) => {
        this.$store.commit("loaderOff");
        const data = res.data.results[0];
        this.title = data.name;
        this.imageUrl = this.getImageUrl(data);
        this.description = data.description;
        this.showFullDescription = true;
      });
    },
    getComic(id) {
      this.$store.commit("loaderOn");
      api.GetComic(id).then((res) => {
        this.$store.commit("loaderOff");
        const data = res.data.results[0];
        this.title = data.title;
        this.imageUrl = this.getImageUrl(data);
        this.description = data.description;
        this.showFullDescription = true;
      });
    },
    getSerie(id) {
      this.$store.commit("loaderOn");
      api.GetSerie(id).then((res) => {
        this.$store.commit("loaderOff");
        const data = res.data.results[0];
        this.title = data.title;
        this.imageUrl = this.getImageUrl(data);
        this.description = data.description;
        this.showFullDescription = true;
      });
    },
  },
};
</script>


