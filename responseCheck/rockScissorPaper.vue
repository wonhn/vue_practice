<template>
    <div>
        <div id="computer" style="background : yellow">
            <h1>{{ imgCoord }}</h1>
        </div>
        <!--<img src="rockScissorPaper.jpg" />-->
        <div>
            <button v-if="intervalFlag" @click="onClickBtn('👊')">바위</button>
            <button v-if="intervalFlag" @click="onClickBtn('✌')">가위</button>
            <button v-if="intervalFlag" @click="onClickBtn('🖐')">보</button>
        </div>
        <br/>
        <div>{{ result }}</div>
        <div>현재 {{ score }}점</div>
        <br/>
        <button v-if="!intervalFlag" @click="startGame">시작!</button>
        <button v-if="score != 0" @click="reset">초기화</button>

    </div>
</template>

<script>
    var interval = null;
    export default{
        data() {
            return {
                result: '결과',
                score: 0,
                coord: ['👊', '✌', '🖐'],
                imgCoord: '👊',
                intervalFlag: null,
            }
        },
        mounted: function() {
            this.startGame();
        },
        destroy: function() {
            clearInterval(interval);
        },
        computed: {

        },
        methods: {
            onClickBtn: function(choice){
                console.log('1 : ' + choice);
                console.log('2 : ' + this.imgCoord);


                // 이긴경우
                if((choice === '👊' && this.imgCoord === '✌')
                 ||(choice === '🖐' && this.imgCoord === '👊')
                 ||(choice === '✌' && this.imgCoord === '🖐')
                ){
                    this.score += 2;
                    this.result = '승리';
                } 
                // 진경우 
                else if((choice === '👊' && this.imgCoord === '🖐' )
                 ||(choice === '✌' && this.imgCoord === '👊' )
                 ||(choice === '🖐' && this.imgCoord === '✌')
                ){
                    this.score -= 1;
                    this.result = '패배';
                } else {
                    this.result = '무승부';
                }

                clearInterval(interval);
                this.intervalFlag = false;
            },
            startGame : function(){
                interval = setInterval(() => {
                    if(this.imgCoord === '👊'){
                        this.imgCoord = this.coord[1];
                    } else if (this.imgCoord === '✌') {
                        this.imgCoord = this.coord[2];
                    } else if (this.imgCoord === '🖐') {
                        this.imgCoord = this.coord[0];
                    }
                    this.intervalFlag = true;
                }, 70);
            },
            reset : function(){
                this.result = '결과';
                this.score = 0;
                this.imgCoord = '👊';
                clearInterval(interval);
                this.startGame();
            }
        }
    };
</script>

<style>

</style>
