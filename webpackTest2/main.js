import Vue from 'vue';      // package.json > dependencies > vue를 가지고 옴 

import testComponent from './testComponent';    // main.js와 testcomponent.vue를 연결

new Vue(testComponent).$mount('#root');  // vue 인스턴스

