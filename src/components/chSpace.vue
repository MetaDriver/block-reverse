<template>

    <div class="chSpace">
        <div class="buttons">
            <div class="b-row" :class="{even: (i%2)}"
                 v-for="(row, i) in a18">
                <div class="l-btn" :class="{active: (bs[(i*size32+j).toString(36)]), center: i===center.i && j===center.j}"
                     v-for="(b, j) in a16"
                     @click="btnClick($event,i,j)"
                ></div>
            </div>
        </div>
        <!--<br>-->
        <!--<p>-->
            <!--{{pointNull.xi + ":" + pointNull.yj + " -> " + pointNull.x + ":" + pointNull.y}}-->
        <!--</p>-->
        <!--<p>-->
            <!--{{pointSec.xi + ":" + pointSec.yj + " -> " + pointSec.x + ":" + pointSec.y}}-->
        <!--</p>-->
        <!--<p>-->
            <!--{{"radius " + radius + ": i = " + indx.i}}-->
        <!--</p>-->


    </div>
</template>

<script>
    import { Index, Point, Vector} from "@/geomPoint.js";
   

    const TRH = (3 ** 0.5 / 2);   //  TRH :: TRiangle Height
    export default {
        name: "chSpace",
        props: ["ch-data"],
//        components: {geomPoint},
        data() {
            return {
//                _bs: [],
                a18: [],// столбцы  i
                a16: [],// строки  j
                size32: 0,
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
                radius: 0,
                indx: {
                    i: 0,
                    j: 0
                },
                center: {i:15, j:13},
            }
        },
        computed: {},
        methods: {
            getHexPoint(i,j) {
                let lrPoint = this.rotateIdx(i,j,1);
                let rrPoint = this.rotateIdx(i,j,-1);
    //               debugger;
                let temp = [
                    new Index(i,j),
                    new Index(lrPoint.i,lrPoint.j),
                    new Index(rrPoint.i,rrPoint.j),
                    new Index(-i,-j-(!!((this.center.i-i)%2))+Math.abs(this.center.i%2)),
                    new Index(-lrPoint.i,-lrPoint.j-(!!((lrPoint.i-this.center.i)%2))+Math.abs(this.center.i%2)),
                    new Index(-rrPoint.i,-rrPoint.j-!!((rrPoint.i-this.center.i)%2)+Math.abs(this.center.i%2))
                ];
                console.log('temp =',temp);
                return temp;
            },

            rotateIdx(i,j,dir){
               let inpVector = {y: 0.5, x: TRH * dir };
               let inpPoint = new Point(1,1);
               inpPoint.fromIdx(new Index(i,j),this.center.i);
//               let dotProduct = inpPoint.x*inpVector.x + inpPoint.y*inpVector.y;
               let outPoint = new Point(
                   inpPoint.x * inpVector.y - inpPoint.y * inpVector.x,
                   inpPoint.x * inpVector.x + inpPoint.y * inpVector.y
               );
               let outIdx = new Index(0,0);
               
               let result = outIdx.fromPoint(outPoint,this.center.i);
               return  result;
            },
            inverse(i, j){
                this.bs[(i * this.size32 + j).toString(36)] ^= 1;
            },
            btnClick(e, i, j){
                console.log("btn i = ", i, " j = ", j, 'event =', e);
                if(e.altKey || e.shiftKey || e.metaKey || e.ctrlKey) {

                    this.center = {i,j};
                    return;
                }
                //let j = pj + 1;
//                let szh = this.chData.spaceSize;
//                let sz = this.size32;
//                let fszI = function (val) {
//                    return ((val + szh) % szh);
//                };
//                let fszJ = function (val) {
//                    return ((val + sz) % sz);
//                };

//                const q32 = (3 ** 0.5 / 2);
//                let ItoX = (i, j) => !(j % 2) ? i : i + 0.5;
//                let JtoY = (j) => j * q32;
//                let roundX = (x) => (Math.round(x / 0.5) * 0.5);
//                let roundY = (y) => (Math.round(y / q32) * q32);
//                let XtoI = (x) => {
//                    let t = roundX(x);
//                    return t % 1 ? Math.round(t - 0.5) : t;
//                };
//                let YtoJ = (y) => Math.round(y / q32);
//                let radiusPoint = (a, b) => {
//                    return (a * a + b * b) ** 0.5;
//                };
//                let radiusO = (n, p) => {
//                    let xi = (n.x - p.x);
//                    let yj = (n.y - p.y);
//                    return radiusPoint(xi, yj);
//                };

                let ii = i - this.center.i;
                let jj = j - this.center.j;
                let points = this.getHexPoint(ii,jj);
                for(let k = points.length; k--;) {
                    this.inverse(points[k].i + this.center.i, points[k].j + this.center.j);
                }
//               this.inverse(i,j);

//                if ((this.statePointNull ^= 1)) {
//                    this.pointNull.xi = i;
//                    this.pointNull.x = ItoX(i, j);
//                    this.pointNull.yj = j;
//                    this.pointNull.y = JtoY(j);
//                    this.inverse(fszI(i), fszJ(j));
//                }
//                else {
//                    this.pointSec.xi = i;
//                    this.pointSec.x = ItoX(i, j);
//                    this.pointSec.yj = j;
//                    this.pointSec.y = JtoY(j);
//
//                    let Rr = this.radius = radiusO(this.pointNull, this.pointSec);
//                    this.indx.i = XtoI(this.radius);
//
//                    let shI = this.pointNull.xi;
//                    let shJ = this.pointNull.yj;
//
//                    let R = this.indx.i;
//                    this.inverse(fszI(R + shI), fszJ(0 + shJ));
//                    let ai = R, bj = 0;
//                    let cnt = 1;
//                    while (ai > 0) {
//                        let i1 = 0, i2 = 0, i3 = 0, j1 = 0, j2 = 0, j3 = 0, r1 = 0, r2 = 0, r3 = 0, d1 = Rr, d2 = Rr,
//                            d3 = Rr, res = Rr;
//
//                        if (bj % 2) {  // 61 -> 72 62 51
//                            i1 = ai + 1;
//                            j1 = bj + 1;
//                            i2 = ai;
//                            j2 = bj + 1;
//                            i3 = ai - 1;
//                            j3 = bj;
//                        } else {   //70 -> 71 61 60
//                            i1 = ai;
//                            j1 = bj + 1;
//                            i2 = ai - 1;
//                            j2 = bj + 1;
//                            i3 = ai - 1;
//                            j3 = bj;
//                        }
//                        r1 = radiusPoint(ItoX(i1, j1), JtoY(j1));
//                        r2 = radiusPoint(ItoX(i2, j2), JtoY(j2));
//                        r3 = radiusPoint(ItoX(i3, j3), JtoY(j3));
//                        d1 = Math.abs(r1 - Rr);
//                        d2 = Math.abs(r2 - Rr);
//                        d3 = Math.abs(r3 - Rr);
//                        res = Math.min(d1, res);
//                        res = Math.min(d2, res);
//                        res = Math.min(d3, res);
//
//                        if (d1 === res) {
//                            ai = i1;
//                            bj = j1;
//                        } else {
//                            if (d2 === res) {
//                                ai = i2;
//                                bj = j2;
//                            } else {
//                                if (d3 === res) {
//                                    ai = i3;
//                                    bj = j3;
//                                }
//                            }
//                        }
////                        console.log(cnt, "| x = ", ItoX(ai, bj), " y = ", JtoY(bj));
//                        let fl = true;
//                        if (!ai && !(fszJ(bj + shJ) % 2)) {
//                            fl = false;
//                        }
//                        if (true) {
//                            this.inverse(fszI(ai + shI), fszJ(bj + shJ));
//                        }
//
//                        cnt++;
//                        if (cnt > 1000)break;
//                    }
//                }    // закрывающая else
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
                this.size32 = 2 * Math.round(this.chData.spaceSize * 3 ** 0.5 / 4);
                this.a18 = Array(this.chData.spaceSize);
                this.a16 = Array(this.size32);

                let total = this.chData.spaceSize * this.size32;

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
            'chData.spaceSize': function (nV) {
                this.chData.spaceSize = !+nV ? 15 : Math.max(1, +nV);
                this.reset();
            }

            ,
        }
        ,
        mounted()
        {
            console.log('chSpace :: loaded and worked !!!!!!!!  ');
            let indx = new Index(3,4);
            let point = new Point(0,0);
//            debugger;
            point.fromIdx(indx);
            console.log("export test: [",indx.i,":",indx.j,"](",point.x,":",point.y,")");
            this.reset();
            this.$emit('register-reset', this.reset);
        }
        ,
    }
    ;
</script>

<style scoped lang="scss">
    @import "../assets/css/global";

    .chSpace {
        padding: 0px 40px 40px 40px;
        margin-top: 20px;
        margin-left: 200px;
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
                    &.center {
                        background-color: blue !important;
                    }
                }

            }

        }
    }
</style>


