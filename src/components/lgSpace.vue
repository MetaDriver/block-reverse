<template>

    <div class="lgSpace">
        LifeGames {{lgData.spaceSize}}

    </div>

</template>

<script>
    // import test from "@/test/test"
    export default {
        name: "lgSpace",
        props: ["lg-data"],
        components: {},
        data() {
            return {}
        },
        computed: {},
        methods: {},
        mounted(){
        },
    };
</script>

<style scoped lang="scss">

    .lgSpace {
        width: 100px;
        height: 100px;
    }

</style>
