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
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { mapState } from 'vuex';
export default {
  components: { PanellView, FootView },
  computed: {
    ...mapState(['condition'])
  },
  beforeCreate() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.$store.state.condition = false
        const uid = user.uid;
      }
    });
  },
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
