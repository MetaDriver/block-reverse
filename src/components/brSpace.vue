<template>

    <div class="brSpace">
        <div class="buttons">
            <div class="b-row" v-for="(row, i) in a16">
                <div class="l-btn" :class="{'active': bs[i*brData.spaceSize+j]}"
                     v-for="(b, j) in a16"
                     @click="btnClick(i, j)"
                ></div>
            </div>
        </div>
    </div>

</template>

<script>

    // const spaceSize = 15;

    export default {
        name: "brSpace",
        props: [ "br-data" ],
        components: {},
        data() {
            return {
                // spaceSize: spaceSize,

                _bs:[],
                a16:[],
                bs: [],


            }
        },
        computed: {},
        methods: {
            inverse(i, j){
                // this.bs.splice([i*spaceSize+j], 1, !this.bs[i*spaceSize+j]) ;
                this._bs[i*this.brData.spaceSize+j] ^= 1;
            },
            btnClick(i, j){
                for(let ii = i-1; ii<=i+1; ii++) {
                    for(let jj = j-1; jj<=j+1; jj++) {
                        this.inverse((ii + this.brData.spaceSize) % this.brData.spaceSize, (jj + this.brData.spaceSize) % this.brData.spaceSize);
                    }
                }
                this.spaceUpdate();
            },
            spaceUpdate(){
                this.bs = [...this._bs];
            },
                reset(){
                this.a16 = Array(this.brData.spaceSize).fill(0);
                this._bs = Array(this.brData.spaceSize**2).fill(0);
                this.spaceUpdate();
            }
        },
        watch: {
           'brData.spaceSize': function (nV){
              this.reset();
           },
        },
        mounted() {
            console.log('brSpace :: loaded and worked !!!!!!!!  ');
            this.reset();
        },
    };
</script>

<style scoped lang="scss">
    @import "../assets/css/global";
    .brSpace {
        padding: 0px 40px 40px 40px;
        margin-top: 20px;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        h1 {
            font-size: 30px;
            margin: 10px 0 40px 0;
        }
        .buttons {
            width: auto;
            height: auto;
            display: flex;
            flex-flow: column nowrap;
            .b-row {
                width: calc($bsize * 16);
                display: flex;
                flex-flow: row nowrap;
                .l-btn {
                    background-color: beige;
                    width: $bsize;
                    height: $bsize;
                    box-shadow: inset 0 0 6px -1px black;
                    border-radius: 7px;
                    margin: 0px;
                    cursor: pointer;
                    &.active {
                        background-color: coral;
                    }
                }

            }

        }
    }

</style>