<template>
  <SearchBar
    @search="newSearch"
    :searchValue="searchValue"
    :placeholder="'Search ' + title"
  />
  <Title :title="title" v-if="showTitle" />
  <div class="row">
    <div class="col-3 mb-5" v-for="detail in details" :key="detail.id">
      <Card
        :imgPath="detail.cardImgPath"
        :imgExtension="detail.cardImgExtension"
        :title="detail.cardTitle"
        :description="detail.cardDescription"
        :relativePath="detail.cardRelativePath"
      />
    </div>
    <!-- <div class="col-12" v-if="total > 0">
      <Pagination
        :total="total"
        :limit="limit"
        :buttons="buttons"
        @offset="newOffset"
      />
    </div> -->
  </div>
</template>

<script>
import api from "../../api/axios";
import Card from "../ui/Card";
// import Pagination from "../ui/Pagination";
import utils from "../../utils";
import Title from "../ui/Title";
import SearchBar from "../ui/SearchBar";
export default {
  components: {
    Card,
    // Pagination,
    Title,
    SearchBar,
  },
  data() {
    return {
      details: [],
      title: "",
      showTitle: true,
      cardImgPath: "",
      cardImgExtension: "",
      cardTitle: "",
      cardDescription: "",
      cardRelativePath: "",
      total: 0,
      limit: 20,
      buttons: 8,
      offset: 0,
      searched: false,
      searchValue: this.$route.query.name,
    };
  },
  created() {
    this.init();
  },
  methods: {
    getRelativePath: utils.getRelativePath,
    init() {
      const currentPath = this.$route.path.split("/")[1];
      if (currentPath === "series") {
        this.initSeries();
      } else if (currentPath === "comics") {
        this.initComics();
      } else {
        this.initHeroes();
      }
    },
    initHeroes() {
      this.title = "Heroes";
      this.searched || (this.searchValue && this.searchValue)
        ? this.getHeroeByName()
        : this.getHeroes();
    },
    initSeries() {
      this.title = "Series";
      this.searched || (this.searchValue && this.searchValue)
        ? this.getSerieByName()
        : this.getSeries();
    },
    initComics() {
      this.title = "Comis";
      this.searched || (this.searchValue && this.searchValue)
        ? this.getComicByName()
        : this.getComics();
    },
    getHeroes() {
      this.$store.commit("loaderOn");
      api.GetHeroes(this.limit, this.offset).then((res) => {
        this.$store.commit("loaderOff");
        const data = res.data.results;
        this.setDetails(data, "name");
        this.total = res.data.total;
      });
    },
    getHeroeByName() {
      this.$store.commit("loaderOn");
      api.GetHeroeSearch(this.searchValue, this.offset).then((res) => {
        this.$store.commit("loaderOff");
        const data = res.data.results;
        this.setDetails(data, "name");
        this.total = res.data.total;
      });
    },
    getSeries() {
      this.$store.commit("loaderOn");
      api.GetSeries(this.limit, this.offset).then((res) => {
        this.$store.commit("loaderOff");
        const data = res.data.results;
        this.setDetails(data, "title");
        this.total = res.data.total;
      });
    },
    getSerieByName() {
      this.$store.commit("loaderOn");
      api.GetSerieSearch(this.searchValue, this.offset).then((res) => {
        this.$store.commit("loaderOff");
        const data = res.data.results;
        this.setDetails(data, "title");
        this.total = res.data.total;
      });
    },
    getComics() {
      this.$store.commit("loaderOn");
      api.GetComics(this.limit, this.offset).then((res) => {
        this.$store.commit("loaderOff");
        const data = res.data.results;
        this.setDetails(data, "title");
        this.total = res.data.total;
      });
    },
    getComicByName() {
      this.$store.commit("loaderOn");
      api.GetComicSearch(this.searchValue, this.offset).then((res) => {
        this.$store.commit("loaderOff");
        const data = res.data.results;
        this.setDetails(data, "title");
        this.total = res.data.total;
      });
    },
    setDetails(data, keyCardTitle) {
      this.details = [];
      data.forEach((element) => {
        this.details.push({
          id: element.id,
          cardImgPath: element.thumbnail.path,
          cardImgExtension: element.thumbnail.extension,
          cardTitle: element[keyCardTitle],
          cardDescription: element.description,
          cardRelativePath: this.getRelativePath("heroes", element.id),
        });
      });
    },
    // newOffset(value) {
    //   this.offset = value;
    //   this.init();
    // },
    newSearch(value) {
      if (value && value != "") {
        this.searched = true;
        this.searchValue = value;
        this.getDetailsByName();
        this.changeNameOnUrl();
      }
    },
    getDetailsByName() {
      const currentPath = this.$route.path.split("/")[1];
      if (currentPath === "series") {
        this.getSerieByName();
      } else if (currentPath === "comics") {
        this.getComicByName();
      } else {
        this.getHeroeByName();
      }
    },
    changeNameOnUrl() {
      this.$router.push({ query: { name: this.searchValue } });
    },
  },
  watch: {
    $route(to) {
      if(!to.query.name) {
        this.searchValue = '';
        this.searched = false;
        this.init();
      }
    },
  },
};
</script>
