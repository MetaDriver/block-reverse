<template>

    <div class="CircleHexagonal">
        <chPanel :ch-data="chData"
                 @change-size="changeSize"
                 @reset="resetBoard"
        />
        <chSpace :ch-data="chData"
                 @register-reset="registerReset"
                 @board-used="chData.boardIsEmpty=0"
        />
    </div>
</template>

<script>
    // import test from "@/test/test"
    import chPanel from "@/components/chPanel"
    import chSpace from "@/components/chSpace"

    export default {
        name: "CircleHexagonal",

        components: {chPanel, chSpace},
        data() {
            return {
                chData: {
                    spaceSize: 30,
                    testTube(varName, val){
                        this[varName] = val;
                    },
                    testVar: 5,
                    boardIsEmpty: 1,
                }
            }
        },
        computed: {},
        methods: {
            changeSize(newSize){
                this.chData.spaceSize = newSize;
            },
            reset: () => {
            },
            registerReset(reset){
                this.reset = reset;
            },
            resetBoard(){
                this.reset();
                this.chData.boardIsEmpty = 1;
            },
        },
        mounted() {
        },
    };
</script>

<style scoped lang="scss">
    .CircleHexagonal {
        position: relative;
    }
</style>
