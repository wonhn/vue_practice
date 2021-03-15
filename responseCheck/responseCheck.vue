<template>
    <div>
        <div id="screen" v-bind:class="state" v-on:click="onClickScreen"> {{message}} </div>
        <div>
            <div>평균시간 : {{ average }}</div>
            <button v-on:click="onReset">리셋</button>
        </div>
    </div>
</template>

<script>
    let startTime = 0;
    let endTime = 0;
    let timeout = 0;
    export default{
        data() {
            return {
                result: [],
                state: 'waiting',
                message: '클릭해서 시작하세요.',
            }
        },
        computed: {
            average: function(){
                return this.result.length ==0 ?  0 : this.result.reduce((a,c) => a + c, 0) / this.result.length;
            }
        },
        methods: {
            onReset: function() {
                this.result = []
            },
            onClickScreen: function() {
                if(this.state === 'waiting'){
                    this.state = 'ready';
                    this.message = '초록색에 클릭';
                    timeout = setTimeout(() => {
                        this.state = 'now';
                        this.message = '지금클릭!!';
                        startTime = new Date();
                    }, Math.floor(Math.random() * 1000) + 2000);
                } else if(this.state === 'ready'){
                    this.message = '넘빠름, 초록색에 클릭';
                    this.state='ready';
                } else if(this.state === 'now'){
                    endTime = new Date();
                    this.message = '클릭해서 시작하세요.';
                    this.state = 'waiting';
                    this.result.push(endTime - startTime);
                }
            }
        }
    };
</script>

<style scoped>
    #screen {
        width: 300px;
        height: 200px;
        text-align: center;
        user-select: none;
    }
    #screen.waiting {
        background-color: aqua;
    }
    #screen.ready {
        background-color: red;
    }
    #screen.now {
        background-color: greenyellow;
    }
</style>
