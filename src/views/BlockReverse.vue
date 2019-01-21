<template>
    <div class="BlockReverse">
        <br-panel :br-data="brData"
                 @change-size="changeSize"
                 @reset="resetBoard"
        />
        <brSpace :br-data="brData"
                 @register-reset="registerReset"
                 @board-used="brData.boardIsEmpty=0"
        />
    </div>
</template>

<script>
    // import test from "@/test/test"
    import brPanel from "@/components/brPanel"
    import brSpace from "@/components/brSpace"

    export default {
        name: "BlockReverse",

        components: {brPanel, brSpace},
        data() {
            return {
                brData: {
                    spaceSize: 15,
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
                this.brData.spaceSize = newSize;
            },
            reset: ()=>{},
            registerReset(reset){
                this.reset = reset;
            },
            resetBoard(){
                this.reset();
                this.brData.boardIsEmpty = 1;
            },
        },
        mounted() {
        },
    };
</script>

<style scoped lang="scss">
    .BlockReverse {
        position: relative;
    }
</style>