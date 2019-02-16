<template>

    <div class="hrSpace">
        <div class="buttons">
            <div class="b-row" :class="{even: (i%2)}"
                 v-for="(row, i) in a18">
                <div class="l-btn" :class="{active: bs[(i*size32+j).toString(36)]}"
                     v-for="(b, j) in a16"
                     @click="btnClick(i,j)"
                >{{(i - 13) + ":" + (j - 13)}}

                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "hrSpace",
        props: ["hr-data"],
//        components: {geomPoint},
        data() {
            return {
//                _bs: [],
                a18: [],// столбцы  i
                a16: [],// строки  j
                size32: 0,
                bs: {},
            }
        },
        computed: {},
        methods: {
            inverse(i, j){
                this.bs[(i * this.size32 + j).toString(36)] ^= 1;
            },
            btnClick(i, j){
//                this.inverse(i, j);
//                console.log("  ",i,":",j);
                let szh = this.hrData.spaceSize;
                let sz = this.size32;
                let fszI = function (val) {
                    return ((val + szh) % szh);
                };
                let fszJ = function (val) {
                    return ((val + sz) % sz);
                };

                let fs1 = [{i: 0, j: 8}, {i: 2, j: 5}, {i: 2, j: 6}, {i: 3, j: 4},
                    {i: 3, j: 5}, {i: 4, j: 4}, {i: 5, j: 4}, {i: 6, j: 4}];
                let fs2 = [{i: 8, j: 4}, {i: 6, j: 1}, {i: 7, j: 1}, {i: 6, j: 0},
                    {i: 7, j: 0}, {i: 6, j: -1}, {i: 7, j: -2}, {i: 7, j: -3}];
                let fs3 = [{i: 8, j: -4}, {i: 4, j: -4}, {i: 5, j: -5}, {i: 3, j: -5},
                    {i: 4, j: -5}, {i: 2, j: -5}, {i: 2, j: -6}, {i: 1, j: -7}];
                let fs4 = [{i: 0, j: -8}, {i: -2, j: -5}, {i: -2, j: -6}, {i: -3, j: -5},
                    {i: -3, j: -6}, {i: -4, j: -4}, {i: -5, j: -5}, {i: -6, j: -4}];
                let fs5 = [{i: -8, j: -4}, {i: -6, j: -1}, {i: -7, j: -2}, {i: -6, j: 0},
                    {i: -7, j: -1}, {i: -6, j: 1}, {i: -7, j: 1}, {i: -7, j: 2}];
                let fs6 = [{i: -8, j: 4}, {i: -4, j: 4}, {i: -5, j: 4}, {i: -3, j: 4},
                    {i: -4, j: 5}, {i: -2, j: 5}, {i: -2, j: 6}, {i: -1, j: 6}];

                let f0 = [fs1, fs2, fs3, fs4, fs5, fs6];

                fs1 = [{i: 0, j: 8}, {i: 2, j: 5}, {i: 2, j: 6}, {i: 3, j: 5},
                    {i: 3, j: 6}, {i: 4, j: 4}, {i: 5, j: 5}, {i: 6, j: 4}];
                fs2 = [{i: 8, j: 4}, {i: 6, j: 1}, {i: 7, j: 2}, {i: 6, j: 0},
                    {i: 7, j: 1}, {i: 6, j: -1}, {i: 7, j: -1}, {i: 7, j: -2}];
                fs3 = [{i: 8, j: -4}, {i: 4, j: -4}, {i: 5, j: -4}, {i: 3, j: -4},
                    {i: 4, j: -5}, {i: 2, j: -5}, {i: 2, j: -6}, {i: 1, j: -6}];
                fs4 = [{i: 0, j: -8}, {i: -2, j: -5}, {i: -2, j: -6}, {i: -3, j: -4},
                    {i: -3, j: -5}, {i: -4, j: -4}, {i: -5, j: -4}, {i: -6, j: -4}];
                fs5 = [{i: -8, j: -4}, {i: -6, j: -1}, {i: -7, j: -1}, {i: -6, j: 0},
                    {i: -7, j: 0}, {i: -6, j: 1}, {i: -7, j: 2}, {i: -7, j: 3}];
                fs6 = [{i: -8, j: 4}, {i: -4, j: 4}, {i: -5, j: 5}, {i: -3, j: 5},
                    {i: -4, j: 5}, {i: -2, j: 5}, {i: -2, j: 6}, {i: -1, j: 7}];

                let f1 = [fs1, fs2, fs3, fs4, fs5, fs6];

                let shi = 13;
                let shj = 13;
                this.inverse(0 + shi, 0 + shj);
                for (let c = 0; c < 8; c++) {
                    let fl = false;
                    for (let d = 0; d < 6; d++) {
                        if (
                            f0[d][c].j !== f1[d][c].j
                        ) {
                            //console.log();
                            fl = true;
                            break;
                        }
                    }
                    if (!fl || fl) {   //
                        for (let d = 0; d < 6; d++) {
                            this.inverse(f1[d][c].i + shi, f1[d][c].j + shj);
                        }
                    }
                    if (fl) {
                        for (let d = 0; d < 6; d++) {
                            if (
                                f0[d][c].j !== f1[d][c].j
                            ) {
                                console.log("i[" + f0[d][c].i+"] j[" + f0[d][c].j + "   " + f1[d][c].j + "]*");
                            }
                            else {
                                console.log("i[" + f0[d][c].i + "==" + f1[d][c].i + "] j[" + f0[d][c].j + "==" + f1[d][c].j + "]");
                            }
                        }
                        console.log("");
                    }
                }

//                this.inverse(fszI(i - 1), fszJ(j));
//                this.inverse(fszI(i + 1), fszJ(j));
//
//                this.inverse(fszI(i), fszJ(j - 1));
//                this.inverse(fszI(i), fszJ(j + 1));
//
//                this.inverse(fszI(i - 1), fszJ(j + (i % 2 * 2 - 1)));
//                this.inverse(fszI(i + 1), fszJ(j + (i % 2 * 2 - 1)));

                //this.spaceUpdate();
                this.$emit("board-used");
            },
            spaceUpdate()
            {
                //  копирование одного массива в другой
                //this.bs = [...this._bs];
            }
            ,
            reset()
            {
//                debugger;
                this.size32 = 2 * Math.round(this.hrData.spaceSize * 3 ** 0.5 / 4);
                this.a18 = Array(this.hrData.spaceSize);
                this.a16 = Array(this.size32);

                let total = this.hrData.spaceSize * this.size32;

                this.bs = {};
                for (let i = 0; i < total; i++) {
                    this.$set(this.bs, [i.toString(36)], 0);
                }
            }
        },
        watch: {
            'hrData.spaceSize': function (nV) {
                this.hrData.spaceSize = !+nV ? 15 : Math.max(1, +nV);
                this.reset();
            }

            ,
        }
        ,
        mounted()
        {
            console.log('hrSpace :: loaded and worked !!!!!!!!  ');
            this.reset();
            this.$emit('register-reset', this.reset);
        }
        ,
    }
    ;
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
            flex-flow: column-reverse nowrap;
            .b-row {
                display: flex;
                flex-flow: row nowrap;
                &.even {
                    margin-left: $bsize/2;
                }
                .l-btn {
                    font-size: 7px;
                    background-color: beige;
                    width: $bsize;
                    height: $bsize;
                    margin-top: -3px;
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