<template>
  <FullDescription
    :title="comic.title"
    :imageUrl="imageUrl(comic)"
    :description="comic.description"
  />
  <Heroes :comicId="comicId" v-if="comicId" />
</template>

<script>
import api from "../../api/axios";
import utils from "../../utils";
import FullDescription from "../ui/FullDescription";
import Heroes from "../heroes/Heroes";

export default {
  components: {
    FullDescription,
    Heroes,
  },
  data() {
    return {
      comicId: null,
      comic: {},
    };
  },
  mounted() {
    const id = this.setComicId();
    this.getComic(id);
  },
  methods: {
    imageUrl: utils.imageUrl,
    setComicId() {
      this.comicId = this.$route.params.id;
      return this.$route.params.id;
    },
    getComic(id) {
      this.$store.commit("loaderOn");
      api.GetComic(id).then((res) => {
        this.$store.commit("loaderOff");
        this.comic = res.data.results[0];
      });
    },
  }
};
</script>


