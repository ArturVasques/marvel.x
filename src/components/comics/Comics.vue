<template>
  <div class="row">
    <div class="col-3 mb-5" v-for="comic in comics" :key="comic.id">
      <Card
        :imgPath="comic.thumbnail.path"
        :imgExtension="comic.thumbnail.extension"
        :title="comic.title"
        :description="comic.description"
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
      comics: [],
      total: 0,
      limit: 20,
      buttons: 8,
      offset: 0,
    };
  },
  mounted() {
    this.getComics();
  },
  methods: {
    getComics() {
      this.$store.commit("loaderOn");
      api.GetComics(this.limit, this.offset).then((res) => {
        this.$store.commit("loaderOff");
        this.comics = res.data.results;
        this.total = res.data.total;
      });
    },
    newOffset(value) {
      this.offset = value;
      this.getComics();
    },
  },
};
</script>