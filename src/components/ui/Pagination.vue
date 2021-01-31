<template>
  <div class="d-flex justify-content-center">
    <ul class="pagination">
      <li class="page-item">
        <button
          type="button"
          class="page-link selector"
          @click="selectFirstPage"
        >
          First
        </button>
      </li>
      <li class="page-item">
        <button
          type="button"
          class="page-link selector"
          @click="selectPreviousPage"
        >
          Prev
        </button>
      </li>
      <li class="page-item">
        <button
          type="button"
          class="page-link"
          v-for="currentPage in currentPages"
          :key="currentPage.number"
          @click="selectCurrentPage(currentPage.number)"
          :class="{ active: isActive(currentPage.number) }"
        >
          {{ currentPage.number }}
        </button>
      </li>
      <li class="page-item">
        <button
          type="button"
          @click="selectNextPage"
          class="page-link selector"
        >
          Next
        </button>
      </li>
      <li class="page-item">
        <button
          type="button"
          class="page-link selector"
          @click="selectLastPage"
        >
          Last
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      pages: 1,
    };
  },
  props: {
    total: Number,
    limit: Number,
    buttons: Number,
  },
  mounted() {
    this.pages = Math.ceil(this.total / this.limit);
  },
  computed: {
    currentPages() {
      const firstNButtons = Math.floor(this.buttons / 2);
      const secondNButtons = Math.ceil(this.buttons / 2);
      const array = [];
      for (let i = this.page - firstNButtons; i < this.page; i++) {
        if (i >= 1) {
          array.push({ number: i });
        }
      }
      for (let i = this.page; i < this.page + secondNButtons; i++) {
        if (i <= this.pages) {
          array.push({ number: i });
        }
      }
      return array;
    },
  },
  methods: {
    selectFirstPage() {
      this.page = 1;
      this.setOffset();
    },
    selectLastPage() {
      this.page = this.pages;
      this.setOffset();
    },
    selectCurrentPage(pageNumber) {
      this.page = pageNumber;
      this.setOffset();
    },
    selectPreviousPage() {
      if (this.page > 1) {
        this.page--;
        this.setOffset();
      }
    },
    selectNextPage() {
      if (this.page < this.pages) {
        this.page++;
        this.setOffset();
      }
    },
    setOffset() {
      const offset = this.page * this.limit - this.limit;
      this.scrollToTop();
      this.$emit("offset", offset);
    },
    isActive(currentPage) {
      return currentPage === this.page;
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>
button.page-link {
  display: inline-block;
}

button.page-link:focus {
  box-shadow: 0 0 0 0;
}

button.page-link {
  font-size: 20px;
  color: #518cca;
  font-weight: 500;
  border: 1px solid #518cca;
}

button.selector {
  background-color: #518cca;
  border: qpx solid #518cca;
  color: white;
}

button.selector:hover {
  color: #504a4a !important;
}

.active {
  color: #e23636 !important;
}
</style>