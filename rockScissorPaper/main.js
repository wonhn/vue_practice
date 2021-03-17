import Vue from 'vue';      // package.json > dependencies > vue를 가지고 옴 

import rockScissorPaper from './rockScissorPaper';    // main.js와 responseCheck.vue를 연결

new Vue(rockScissorPaper).$mount('#root');  // vue 인스턴스

