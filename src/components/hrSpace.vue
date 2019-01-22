<template>

    <div class="hrSpace">
        <div class="buttons">
            <div class="b-row" :class="{even: i%2}"
                 v-for="(row, i) in a16">
                <div class="l-btn" :class="{'active': bs[i*hrData.spaceSize+j]}"
                     v-for="(b, j) in a16"
                     @click="btnClick(i, j)"
                ></div>
            </div>
        </div>
        <br>
        {{hrData.testVar}}



    </div>
</template>

<script>
    export default {
        name: "hrSpace",
        props: ["hr-data"],
        components: {},
        data() {
            return {
                _bs: [],
                a16: [],
                bs: [],
            }
        },
        computed: {},
        methods: {
            inverse(i, j){
                // this.bs.splice([i*spaceSize+j], 1, !this.bs[i*spaceSize+j]) ;
                this._bs[i * this.hrData.spaceSize + j] ^= 1;
            },
            btnClick(i, j){
                let sz = this.hrData.spaceSize;
                let fsz = function (val) {
                    return ((val + sz) % sz);
                };

//                this.inverse(fsz(i), fsz(j));

                this.inverse(fsz(i - 1), fsz(j));
                this.inverse(fsz(i + 1), fsz(j));

                this.inverse(fsz(i), fsz(j - 1));
                this.inverse(fsz(i), fsz(j + 1));

                this.inverse(fsz(i - 1), fsz(j + (i % 2 * 2 - 1)));
                this.inverse(fsz(i + 1), fsz(j + (i % 2 * 2 - 1)));

                this.spaceUpdate();
                this.$emit("board-used");
            },
            spaceUpdate(){
                //  копирование одного массива в другой
                this.bs = [...this._bs];
            },
            reset(){
                this.a16 = Array(this.hrData.spaceSize);
                this._bs = Array(this.hrData.spaceSize ** 2).fill(0);
                this.spaceUpdate();
            }
        },
        watch: {
            'hrData.spaceSize': function (nV) {
                this.hrData.spaceSize = !+nV ? 15 : Math.max(1, +nV);
                this.reset();
            },
        },
        mounted() {
            console.log('hrSpace :: loaded and worked !!!!!!!!  ');
            this.reset();
            this.$emit('register-reset', this.reset);
        },
    };
</script>

<style scoped lang="scss">
    @import "../assets/css/global";

    .hrSpace {
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
                display: flex;
                flex-flow: row nowrap;
                margin: -1px 0;
                &.even {
                    margin-left: $bsize/2;
                }
                .l-btn {
                    background-color: beige;
                    width: $bsize;
                    height: $bsize;
                    box-shadow: inset 0 0 6px -1px black;
                    border-radius: 50%;
                    cursor: pointer;
                    &.active {
                        background-color: coral;
                    }
                }

            }

        }
    }
</style>