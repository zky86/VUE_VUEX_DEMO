import Vue from 'vue'
import store from './vuex/store'
import App from './components/App.vue'
import testmodelpub from 'testmodelpub'
console.log(345);

console.log(testmodelpub);
new Vue({
  store, 
  el: '#app',
  components: { App }
  // render: h => h(App)
})
