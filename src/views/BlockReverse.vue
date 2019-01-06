<template>

    <div class="BlockReverse">

        <brPanel
                :br-data="brData"
                @change-size="changeSize"
        />
        <brSpace
                :br-data="brData"
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
                    spaceSize: 15
                }
            }
        },
        computed: {},
        methods: {
            changeSize(newSize){ this.brData.spaceSize=newSize; },
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