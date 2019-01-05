<template>

    <div class="BlockReverse">

        <h1>Hi !!</h1>
        <brSpace :space-size="15" />

    </div>

</template>

<script>
    // import test from "@/test/test"
    import brSpace from "@/components/brSpace"

    export default {
        name: "BlockReverse",
        props: [],
        components: { brSpace },
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

    }

</style>