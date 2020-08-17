/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import firebase from 'firebase'
import DiskUsage from './components/DiskUsage.vue'
import Home from './components/Home.vue'
import DiskUsageCompositions from './components/DiskUsageCompositions.vue'
import Gallery from './components/Gallery.vue'
import ShowImage from './components/ShowImage.vue'


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

var firebaseConfig = {
    apiKey: "AIzaSyCurn6Ib2R6pN_MWK_LmZ6CHRqzwc07H3s",
    authDomain: "gallery-3b212.firebaseapp.com",
    databaseURL: "https://gallery-3b212.firebaseio.com",
    projectId: "gallery-3b212",
    storageBucket: "gallery-3b212.appspot.com",
    messagingSenderId: "272760485671",
    appId: "1:272760485671:web:3a52570909ca9348031b02",
    measurementId: "G-V3HSNQLGQ5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

Vue.component('DiskUsage', DiskUsage);
Vue.component('Home', Home);
Vue.component('Gallery', Gallery);
Vue.component('DiskUsageCompositions', DiskUsageCompositions);
Vue.component('ShowImage', ShowImage);


Vue.component('App', require('./components/App.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
