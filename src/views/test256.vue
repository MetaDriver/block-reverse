<template>

    <div class="test256">
        <!--<h1> Buttons 256</h1>-->
        <div class="buttons">
            <div class="b-row" v-for="(row, i) in a16">
                <div class="l-btn" :class="{'active': bs[i*spaceSize+j]}"
                     v-for="(b, j) in a16"
                     @click="btnClick(i, j)"
                ></div>
            </div>
        </div>
    </div>

</template>

<script>

    const spaceSize = 15;
    let bs = [];

    export default {
        name: "test256",
        props: [],
        components: {},
        data() {
            return {
                spaceSize: spaceSize,

                a16:[],
                bs: [],


            }
        },
        computed: {},
        methods: {
            inverse(i, j){
                // this.bs.splice([i*spaceSize+j], 1, !this.bs[i*spaceSize+j]) ;
                bs[i*spaceSize+j] ^= 1;
            },
            btnClick(i, j){
                console.log(`btnClick ( ${i}, ${j} )`);
                for(let ii = i-1; ii<=i+1; ii++) {
                    for(let jj = j-1; jj<=j+1; jj++) {
                        this.inverse((ii + spaceSize) % spaceSize, (jj + spaceSize) % spaceSize);
                    }
                }
                this.spaceUpdate();
            },
            spaceUpdate(){
                this.bs = [...bs];
            },
        },
        mounted() {
            console.log('test256 :: loaded and worked !!!!!!!!  ');
            this.a16 = Array(spaceSize).fill(0);
            bs = Array(spaceSize*spaceSize).fill(0);
            this.spaceUpdate();
        },
    };
</script>

<style scoped lang="scss">
$bsize: 30px;
    .test256 {
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