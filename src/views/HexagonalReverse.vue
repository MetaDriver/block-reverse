<template>

    <div class="HexagonalReverse">
        <hrPanel :hr-data="hrData"
                  @change-size="changeSize"
                  @reset="resetBoard"
        />
        <hrSpace :hr-data="hrData"
                 @register-reset="registerReset"
                 @board-used="hrData.boardIsEmpty=0"
        />
    </div>
</template>

<script>
    // import test from "@/test/test"
    import hrPanel from "@/components/hrPanel"
    import hrSpace from "@/components/hrSpace"

    export default {
        name: "HexagonalReverse",

        components: {hrPanel, hrSpace},
        data() {
            return {
                hrData: {
                    spaceSize: 30,
                    testTube( varName, val ){
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
                this.hrData.spaceSize = newSize;
            },
            reset: ()=>{},
            registerReset(reset){
                this.reset = reset;
            },
            resetBoard(){
                this.reset();
                this.hrData.boardIsEmpty = 1;
            },
        },
        mounted() {
        },
    };
</script>

<style scoped lang="scss">
    .HexagonalReverse {
        position: relative;
    }
</style>