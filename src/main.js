import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAnQal7ueYLGsZtkxMU2km4_8TCwQ9HgRY",
  authDomain: "studio-ghibli-8bce3.firebaseapp.com",
  projectId: "studio-ghibli-8bce3",
  storageBucket: "studio-ghibli-8bce3.appspot.com",
  messagingSenderId: "325594389758",
  appId: "1:325594389758:web:5cc3aecee3885aa8a819af"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
Vue.config.productionTip = false
Vue.use(Buefy)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
