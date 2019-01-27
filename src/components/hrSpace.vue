<template>

    <div class="hrSpace">
        <div class="buttons">
            <div class="b-row" :class="{even: !(i%2)}"
                 v-for="(row, i) in a16">
                <div class="l-btn" :class="{active: bs[(i*hrData.spaceSize+j).toString(36)]}"
                     v-for="(b, j) in a16"
                     @click="btnClick( j, hrData.spaceSize-1-i)"
                ></div>
            </div>
        </div>
        <br>
        <p>
            {{pointNull.xi + ":" + pointNull.yj + " -> " + pointNull.x + ":" + pointNull.y}}
        </p>
        <p>
            {{pointSec.xi + ":" + pointSec.yj + " -> " + pointSec.x + ":" + pointSec.y}}
        </p>


    </div>
</template>

<script>
    export default {
        name: "hrSpace",
        props: ["hr-data"],
        components: {},
        data() {
            return {
//                _bs: [],
                a16: [],
                bs: {},
                pointNull: {
                    x: 0,
                    y: 0,
                    xi: 0,
                    yj: 0
                },
                pointSec: {
                    x: 0,
                    y: 0,
                    xi: 0,
                    yj: 0
                },
                statePointNull: false,
            }
        },
        computed: {},
        methods: {
            inverse(j, i){
                let invI = this.hrData.spaceSize - 1 - i;
                this.bs[(invI * this.hrData.spaceSize + j).toString(36)] ^= 1;
            },
            btnClick(i, j){
                let sz = this.hrData.spaceSize;
                let fsz = function (val) {
                    return ((val + sz) % sz);
                };
                const q32 = (3 ** 0.5 / 2);
                let ItoX = (i, j) => !(j % 2) ? i : i + 0.5;
                let JtoY = (j) => j * q32;
                let roundX = (x) => ~~(Math.round(x / 0.5) * 0.5);
                let roundY = (y) => ~~(Math.round(y / q32) * q32);
                let XtoI = (x) => x % 1 ? x : (x - 0.5);
                let YtoJ = (y) => (y / q32);



                if ((this.statePointNull ^= 1)) {
                    this.pointNull.xi = i;
                    this.pointNull.x = ItoX(i, j);
                    this.pointNull.yj = j;
                    this.pointNull.y = JtoY(j);
                } else {
                    this.pointSec.xi = i;
                    this.pointSec.x = ItoX(i, j);
                    this.pointSec.yj = j;
                    this.pointSec.y = JtoY(j);
                    let radius = (n, p) => {
                        let x = (n.x - p.x);
                        let y = (n.y - p.y);
                        return x * x + y + y;
                    };
                    let radiusQ = radius(this.pointNull, this.pointSec);
                    let nx05 = this.pointNull.x + (this.pointSec.x - this.pointNull.x) / 2;
                    let x = this.pointSec.x;
                    console.log("nx05 = " + nx05 + " x = " + x);
//                    debugger;
                    while (nx05 <= x) {
                        x -= 0.5;
                        let dfx = this.pointNull.x - x;
                        let XI = roundX(XtoI(x));

                        let rY = this.pointNull.y + roundY((radiusQ - dfx * dfx)**0.5);
                        let YJ = roundY(YtoJ(rY));

                        let fXI = fsz(XI);
                        let fYJ = fsz(YJ);

                        console.log("XI = " + XI + "| rY = " + rY + " YJ = " + YJ + "| fXI = " + fXI + " fYJ = " + fYJ);
                        this.inverse(fXI, fYJ);
                        if(nx05+nx05/2 <= x){
                            rY = this.pointNull.y + roundY((radiusQ - dfx * dfx)**0.5+1);
                            YJ = roundY(YtoJ(rY));

                            fXI = fsz(XI);
                            fYJ = fsz(YJ);

                            console.log("XI = " + XI + "| rY = " + rY + " YJ = " + YJ + "| fXI = " + fXI + " fYJ = " + fYJ);
                            this.inverse(fXI, fYJ);
                        }
                    }
                }

                this.inverse(fsz(i), fsz(j));


                //                this.inverse(fsz(i - 1), fsz(j));
                //                this.inverse(fsz(i + 1), fsz(j));
                //
                //                this.inverse(fsz(i), fsz(j - 1));
                //                this.inverse(fsz(i), fsz(j + 1));
                //
                //                this.inverse(fsz(i - 1), fsz(j + (i % 2 * 2 - 1)));
                //                this.inverse(fsz(i + 1), fsz(j + (i % 2 * 2 - 1)));

                //                console.log("hrData.testVar = "+this.hrData.testVar++);
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
                this.a16 = Array(this.hrData.spaceSize);
                let total = this.hrData.spaceSize ** 2;
                //this.bs.length = total;
                this.bs = {};
                for (let i = 0; i < total; i++) {
                    this.$set(this.bs, [i.toString(36)], 0);
                }
                this.pointNull.xi = 0;
                this.pointNull.yj = 0;

                this.pointSec.xi = 0;
                this.pointSec.yj = 0;

                this.pointNull.x = 0;
                this.pointNull.y = 0;

                this.pointSec.x = 0;
                this.pointSec.y = 0;
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