import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

// Using vue-material
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
// vue-material theme
import 'vue-material/dist/theme/black-green-light.css';

Vue.use(VueMaterial);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    beforeCreate() {
        this.$store.commit('initialiseStore');
    },
    render: (h) => h(App),
}).$mount('#app');
