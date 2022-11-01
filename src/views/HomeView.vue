<template>
  <div class="container">
    <div class="box  mt-6">
      <img src="@/assets/Studio_Ghibli_logo.svg.png">
      <p>unofficial site of studio ghibli where you will find information about their movies</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'HomeView',
  computed: {
    ...mapState(['condition'])
  },

}
</script>
<style scoped>
.box,
button {
  background-color: rgb(16, 156, 235);
}
</style>
