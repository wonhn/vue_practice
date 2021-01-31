<!-- 생긴건 html과 비슷한데 결론적으론 js임. 특수한 문법을 사용하는 js -->
<template>
    <div>
        <h1>{{ result }}</h1>
        <input ref="answer" v-model="value"/>
        <button v-on:click="onSubmitForm">입력</button>
        <div>시도 : {{input}}</div>

    </div>
</template>

<script>
    export default{
        data() {
            return {
                value: '',
                result: '',
                input: '',
            }
        },
        methods: {
            onSubmitForm: function () {
                console.log('hihi');
                this.input = this.value;
            }
        }
    };
</script>

<style>

</style>
