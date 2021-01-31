<template>
  <div class="container-fluid mb-4">
    <div class="row header">
      <div class="col-12 text-center">
        <router-link class="router-link" to="/">
          <span class="logo">Marvel.X</span>
        </router-link>
      </div>
    </div>
    <div class="row sub-header">
      <div class="col-12">
        <ul class="menu">
          <li class="menu-item">
            <router-link class="router-link menu-link" to="/heroes">
              <span>Heroes</span>
            </router-link>
          </li>
          <li class="menu-item">
            <router-link class="router-link menu-link" to="/series">
              <span>Series</span>
            </router-link>
          </li>
          <li class="menu-item">
            <router-link class="router-link menu-link" to="/comics">
              <span>Comics</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Marvel Color Pallete */
/* https://www.color-hex.com/color-palette/6563 */
.header {
  background-color: #000000;
}
.sub-header {
  background-color: #504a4a;
}
.logo {
  color: white;
  font-size: 50px;
  font-weight: bold;
}
.logo {
  color: white;
}
.logo:hover {
  color: #e23636;
}
.router-link {
  text-decoration: none;
}
.menu {
  list-style-type: none;
  margin-bottom: 0;
  text-align: center;
  padding: 0;
}
.menu-item {
  display: inline;
}
.menu-link {
  color: white;
  font-size: 20px;
  padding: 0 15px;
}
.menu-link:hover {
  color: #518cca;
}
</style>