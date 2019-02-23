<template>

    <div class="LifeGame">
        <lgPanel @change-size="changeSize"/>
        <lgSpace :lg-data="lgData"/>
    </div>

</template>

<script>
    // import test from "@/test/test"
    import lgPanel from "@/components/lgPanel"
    import lgSpace from "@/components/lgSpace"

    export default {
        name: "LifeGame",
        props: [],
        components: {lgPanel, lgSpace,},
        data() {
            return {
                lgData: {
                    spaceSize: 15,
                },

            }
        },
        computed: {},
        methods: {
            changeSize(newSize){
                this.lgData.spaceSize = newSize;
            },

        },
        mounted(){
        },
    };
</script>

<style scoped lang="scss">

    .LifeGame {
        position: relative;
    }

</style>
