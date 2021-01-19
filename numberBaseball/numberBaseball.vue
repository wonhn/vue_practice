<template>
    <div>
        <h1>{{result}}</h1>
        <input ref="answer" maxlength="4" v-model="value"
        <button v-on:click="onSubmitBtn">버튼</button>
        
        <div>시도: {{}}</div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                value: '',
                result: '',
            }
        },
        methods: {
            onSubmitBtn(e) {
                e.preventdefault();
            }
        }
    }
</script>
<style>

</style>