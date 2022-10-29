<template>
  <div class="container">
    <div class="box  mt-6">
      <img src="@/assets/Studio_Ghibli_logo.svg.png">
      <p>unofficial site of studio ghibli where you will find information about their movies</p>
    </div>
    <button class="button mb-6" @click="showPanell">Enter</button>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  methods: {
    showPanell() {
      this.$router.push('PanellView')
    }
  }
}
</script>
<style scoped>
.box,
button {
  background-color: rgb(16, 156, 235);
}
</style>
