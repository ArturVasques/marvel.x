<template>
  <div class="row">
    <div class="col-4 offset-8">
      <div class="input-group rounded">
        <input
          type="search"
          class="form-control rounded"
          :placeholder="placeholder"
          aria-label="Search"
          aria-describedby="search-addon"
          v-model="search"
          v-on:keydown.enter.prevent="sendSearch"
        />
        <span
          class="input-group-text border-0"
          id="search-addon"
          @click.left="sendSearch"
        >
          <i class="fa fa-search" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      default: "Search",
      type: String,
    },
  },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    sendSearch() {
      this.$emit("search", this.search);
    },
  },
};
</script>