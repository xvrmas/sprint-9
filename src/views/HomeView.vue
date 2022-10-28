<template>
  <div class="container">
    <div class="box border mt-6">
      <img src="@/assets/Studio_Ghibli_logo.svg.png">
    </div>
    <button class="button" @click="showPanell">Enter</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  methods: {
    showPanell() {
      this.$router.push('PanellView')
    }
  }



}
</script>
