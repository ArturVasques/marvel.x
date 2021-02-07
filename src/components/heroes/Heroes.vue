<template>
  <SearchBar
    @search="newSearch"
    :searchValue="searchValue"
    placeholder='Search Heroe'
    v-if="showSearchBar"
  />
  <Title title="Heroes" v-if="heroes.length > 0" />
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
      heroes: [],
      total: 0,
      limit: 20,
      buttons: 8,
      offset: 0,
      searched: false,
      searchValue: this.$route.query.name
    };
  },
  mounted() {
    this.initHeroes();
  },
  methods: {
    getRelativePath: utils.getRelativePath,
    initHeroes() {
      this.searched || this.searchValue && this.searchValue
        ? this.getHeroeByName()
        : this.getHeroes();
    },
    getHeroes() {
      this.$store.commit("loaderOn");
      api.GetHeroes(this.limit, this.offset).then((res) => {
        this.$store.commit("loaderOff");
        this.heroes = res.data.results;
        this.total = res.data.total;
      });
    },
    getHeroeByName() {
      this.$store.commit("loaderOn");
      api.GetHeroeSearch(this.searchValue, this.offset).then((res) => {
        this.$store.commit("loaderOff");
        this.heroes = res.data.results;
        this.total = res.data.total;
      });
    },
    newOffset(value) {
      this.offset = value;
      this.initHeroes();
    },
    newSearch(value) {
      if (value && value != "") {
        this.searched = true,
        this.searchValue = value;
        this.getHeroeByName();
        this.changeNameOnUrl();
      }
    },
    changeNameOnUrl() {
      this.$router.push({ query: { name: this.searchValue } });
    },
  },
  computed: {
    showSearchBar() {
      return !this.serieId && !this.comicId;
    },
  },
};
</script>
