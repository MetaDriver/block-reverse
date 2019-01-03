<template>

    <div class="test256">
        <h1> Buttons 256</h1>
        <div class="buttons">
            <div class="b-row" v-for="(row, i) in bs">
                <div class="l-btn"
                     v-for="(b, j) in bs[i]"
                     @click="btnClick(i, j)"
                ></div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "test256",
        props: [],
        components: {},
        data() {
            return {
                bs: [
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                ],

            }
        },
        computed: {},
        methods: {
            btnClick(i, j){
                this.bs[i][j] ^= 1;
            },
        },
        mounted() {
            console.log('test256 :: loaded and worked 1!!!!!!!!!  ');
        },
    };
</script>

<style scoped lang="scss">
$bsize: 25px;
    .test256 {
        padding: 40px 40px 40px 40px;
        h1 {
            font-size: 30px;
            margin: 10px auto 40px 0;
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
                    &.active {
                        background-color: coral;
                    }
                }

            }

        }
    }

</style>