<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <router-view  :key="$route.path"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>