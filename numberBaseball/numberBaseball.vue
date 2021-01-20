<template>
    <div>
        <h1>{{result}}</h1>
        <input ref="answer" maxlength="4" v-model="value" id="input"/>
        <button v-on:click="onSubmitBtn()">버튼</button>
        
        <div>시도: {{ tries.length }}</div>
        <ul>
            <li v-for="t in tries">
                <div>{{t.key}}</div>
                <div>{{t.result}}</div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tries: [],
                value: '',
                result: '',
            }
        },
        methods: {
            onSubmitBtn: function() {
                this.tries.push({
                    key: this.value,
                    result: '홈런'
                });
                this.value = '';
                this.$refs.answer.focus();
            }
        }
    }
</script>
<style>

</style>