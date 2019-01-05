<template>

    <div class="BlockReverse">

        <brPanel/>
        <brSpace :space-size="15"/>

    </div>

</template>

<script>
    // import test from "@/test/test"
    import brPanel from "@/components/brPanel"
    import brSpace from "@/components/brSpace"

    export default {
        name: "BlockReverse",
        props: [],
        components: {brPanel, brSpace},
        data() {
            return {
                brData: {

                }
            }
        },
        computed: {},
        methods: {},
        mounted() {
        },
    };
</script>

<style scoped lang="scss">

    .BlockReverse {
        position: relative;

    }

</style>