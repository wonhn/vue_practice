<template>
    <div>
        <h1>{{result}}</h1>
        <input ref="answer" maxlength="4" v-model="value" id="input"/>
        <button v-on:click="onClickBtn()">버튼</button>
        
        <!-- <div>시도: {{ tries.length }}</div>
        <ul>
            <li v-for="t in tries">
                <div>{{t.key}}</div>
                <div>{{t.result}}</div>
            </li>
        </ul> -->
    </div>
</template>
<script>
    // const getNumbers=() => {
    //     const candidates = [1,2,3,4,5,6,7,8,9];
    //     const array = [];
    //     for(let i =0; i<4; i+=1){
    //         const chosen = candidates.splice(Math.floor(Math.random() * (9-i)), 1)[0];
    //         array.push(chosen);
    //     }
    //     return array;
    // }
    export default {
        data() {
            return {
                // answer: getNumbers(),
                // tries: [],
                value: '',
                result: '',
            }
        },
        methods: {
            onClickBtn: function(){
                this.value  = 'hi!!'
                this.result = 'bye!'
            }
            // onSubmitBtn() {
            //     if(this.value === this.answer.join('')){
            //         console.log('1');
            //         this.tries.push({
            //             key: this.value,
            //             result: '홈런'
            //         });
            //         this.result = '홈런';
            //         alert('게임을 다시 실행합니다.');
            //         this.value = '';
            //         this.tries = [];
            //         //this.$ref.answer.focus();
            //     } else {
            //         console.log('2');
            //         let strike = 0;
            //         let ball = 0;
            //         const answerArray = this.value.split('').map(v => parseInt(v));    //문자배열을 숫자배열로 바꾸는 코드
            //         for(let i=0; i<4; i+=1){
            //             if(answerArray[i] === this.answer[i]){
            //                 strike++;
            //             } else if(this.answer.includes(answerArray[i])) {
            //                 ball++;
            //             }

            //         }
            //         this.tries.push({
            //             key: this.value,
            //             result: `${strike} 스트라이크, ${ball} 볼 입니다.`
            //         });
            //         this.tries = [];
            //         //this.$ref.answer.focus();
            //     }
            // }
        }
    }
</script>
<style>

</style>