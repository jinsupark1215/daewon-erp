/* eslint-disable */
import Vue from 'vue';
import ShardsVue from 'shards-vue';

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import '@/scss/shards-dashboards.scss';
import '@/assets/scss/date-range.scss';

// Core
import App from './App.vue';
import router from './router';

// Layouts
import Default from '@/layouts/Default.vue';

//firebase
import firebase from 'firebase'

ShardsVue.install(Vue);

Vue.component('default-layout', Default);

Vue.config.productionTip = false;
Vue.prototype.$eventHub = new Vue();


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB8STYT4dCy0Iu_y7muvDPiZTymEPz2BrE",
    authDomain: "daewon-s-erp.firebaseapp.com",
    databaseURL: "https://daewon-s-erp.firebaseio.com",
    projectId: "daewon-s-erp",
    storageBucket: "daewon-s-erp.appspot.com",
    messagingSenderId: "957489542273",
    appId: "1:957489542273:web:ed479b565f98ee3b3f4980",
    measurementId: "G-8DMMXSJ8KT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
