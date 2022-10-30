<template>
  <div id="app">
    <PanellView></PanellView>
    <router-view />
    <footView></footView>
  </div>
</template>


<script>
import FootView from './components/footView.vue';
import PanellView from './components/PanellView.vue';
export default {
  components: { PanellView, FootView }
}
</script>
<style>
#app {
  text-align: center;
}

nav {
  padding: 30px;
}
</style>
