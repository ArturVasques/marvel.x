<template>
  <SearchBar
    @search="newSearch"
    :searchValue="searchValue"
    placeholder="Search Heroe"
    v-if="showSearchBar"
  />
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
import SearchBar from "../ui/SearchBar";
export default {
  components: {
    Card,
    Pagination,
    Title,
    SearchBar,
  },
  data() {
    return {
      series: [],
      total: 0,
      limit: 20,
      buttons: 8,
      offset: 0,
      searched: false,
      searchValue: this.$route.query.name,
    };
  },
  mounted() {
    this.initSeries();
  },
  methods: {
    getRelativePath: utils.getRelativePath,
    initSeries() {
      this.searched || (this.searchValue && this.searchValue)
        ? this.getSerieByName()
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
    getSerieByName() {
      this.$store.commit("loaderOn");
      api.GetSerieSearch(this.searchValue, this.offset).then((res) => {
        this.$store.commit("loaderOff");
        this.series = res.data.results;
        this.total = res.data.total;
      });
    },
    newOffset(value) {
      this.offset = value;
      this.initSeries();
    },
    newSearch(value) {
      if (value && value != "") {
        (this.searched = true), (this.searchValue = value);
        this.getSerieByName();
        this.changeNameOnUrl();
      }
    },
    changeNameOnUrl() {
      this.$router.push({ query: { name: this.searchValue } });
    },
  },
  computed: {
    showSearchBar() {
      return !this.heroeId;
    },
  },
};
</script>