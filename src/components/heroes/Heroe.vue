<template>
  <FullDescription
    :title="heroe.name"
    :imageUrl="imageUrl(heroe)"
    :description="heroe.description"
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
      heroeId: null,
      heroe: {},
    };
  },
  mounted() {
    const id = this.setHeroeId();
    this.getHeroe(id);
  },
  methods: {
    imageUrl: utils.imageUrl,
    setHeroeId() {
      this.heroeId = this.$route.params.id;
      return this.$route.params.id;
    },
    getHeroe(id) {
      this.$store.commit("loaderOn");
      api.GetHeroe(id).then((res) => {
        this.$store.commit("loaderOff");
        this.heroe = res.data.results[0];
      });
    }
  },
};
</script>


