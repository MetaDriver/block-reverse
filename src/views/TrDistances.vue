<template>

    <div class="TrDistances">
        <div class="ctr">
            <div class="row" v-for="(val, key, idx) in points">
                <div class="col"
                v-for="p in val">
                    <div class="my-card">
                        <pre :class="'c'+val.length"><b>{{val.length}} ({{l[val.length]}})</b>{{p}}</pre>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    // import test from "@/test/test"
    export default {
        name: "TrDistances",
        props: [],
        components: {},
        data() {
            return {
                points: [],
                l:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            }
        },
        computed: {},
        methods: {
            calculatePoints(xLen) {
                // let allPoints = this.generatePoints(xLen);
                // allPoints.forEach(v=>{
                //     v.hip2 = (v.x2 = v.x**2) + (v.y2 = v.y**2 * 3);
                // });
                // allPoints.sort((a,b)=>a.hip2-b.hip2);
                // return this.groupPoints(allPoints);
                let allPoints = {};
                for(let i = 1; i <= xLen; i++) {

                    let pointBar = this.generatePointBar(i);
                        // .forEach(v=>{
                        //     v.hip2 = (v.x**2) + (v.y**2 * 3);
                        // });
                    pointBar.sort((a,b)=>a.r2-b.r2);
                    allPoints = {...allPoints, ...this.groupPoints(pointBar)};
                }
                return allPoints;
            },
            generatePointBar(idx){
                let arr = [];
                let lr = idx**2;
                let sr = (idx-1)**2;
                let i=idx-1.5;
        // debugger;
                for(let j=0; j<idx; j++) {
                    let offsetX = j%2/2;
                    for(i+=(1.5); (i)**2 + (j/2)**2*3 > sr; i-=0.5){
                        if((i)**2 + (j/2)**2*3 > lr || (i+j/2)%1) { continue; }
                        let tx, ty;
                        arr.push({
                            x: tx = i,
                            y: ty = j/2,
                            x2: tx **= 2,
                            y2: ty = ty**2 * 3,
                            r2: tx + ty
                        });
                    }
                }
                return arr;
            },
            // generatePoints(xLen){
            //     let arr = [];
            //     for(let i=xLen*2; i--; ){
            //         for(let j=i-1; j>0; j-=2) {
            //             arr.unshift({
            //                 x: i/2,
            //                 y: (j-1)/2
            //             });
            //         }
            //     }
            //     return arr;
            // },


            groupPoints(inp) {
               let out = inp.reduce((a,v)=>{
                   if(!a[v.r2]) { a[v.r2] = [v]; }
                   else { a[v.r2].push(v); }
                   return a;
               },{});
               let keys = Object.keys(out);
               // debugger;
               // let l = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
               keys.forEach(v=>{
                   // l[out[v].length]++;
                   if (++this.l[out[v].length]>1) {
                       delete out[v];
                   }
                       });
               // this.l = l;
               return out;
            }
        },
        mounted() {
            let start = Date.now();
            this.points = this.calculatePoints(200);
            console.log('Worked time ===',Date.now() - start);
            console.log('this.l =', this.l);
        },
    };
</script>

<style scoped lang="scss">

    .TrDistances {
        text-align: left;
        font-size: 12px;
        line-height: 1;
        .my-card {
            height: auto;
            padding: 5px;
            border-radius: 7px;
            margin: 2px -8px;
            box-shadow: 0 0 5px 0 gray;
            background-color: #6c757d;
        }
        pre {
            padding: 3px;
            background-color: #fcf8e3;
            margin: 0;
            &.c3 {
                background-color: hsl(50, 81%, 94%);
            }
            &.c4 {
                background-color: hsl(150, 22%, 94%);
            }
            &.c5 {
                background-color: hsl(250, 81%, 94%);
            }
            &.c6 {
                background-color: hsl(350, 22%, 94%);
            }
            &.c7 {
                background-color: hsl(450, 81%, 94%);
            }
            &.c8 {
                background-color: hsl(550, 66%, 94%);
            }
            &.c9 {
                background-color: hsl(650, 99%, 94%);
            }
            &.c10 {
                background-color: hsl(750, 66%, 94%);
            }
            &.c11 {
                background-color: hsl(850, 99%, 94%);
            }
            &.c12 {
                background-color: hsl(950, 66%, 94%);
            }
            &.c13 {
                background-color: hsl(1050, 99%, 94%);
            }
            &.c14 {
                background-color: hsl(1150, 66%, 94%);
            }
            &.c15 {
                background-color: hsl(1250, 99%, 94%);
            }
            &.c16 {
                background-color: hsl(1350, 88%, 94%);
            }
            &.c17 {
                background-color: hsl(250, 99%, 94%);
            }
            &.c18 {
                background-color: hsl(350, 87%, 94%);
            }
            &.c19 {
                background-color: hsl(450, 99%, 94%);
            }
            &.c20 {
                background-color: hsl(550, 87%, 94%);
            }
        }
    }

</style>