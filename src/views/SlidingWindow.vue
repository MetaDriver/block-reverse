<style scoped lang="scss">

    .SlidingWindow {
        position: relative;
        .my-win {
            top: 300px;
            left: 500px;
            box-shadow: 3px 3px 20px 0 hsla(0, 0%, 0%, .3);
            z-index: 1000000;
            background-color: hsla(0, 0%, 100%, .8);
        }
    }

</style>

<template>

    <div class="SlidingWindow"
         v-if="winShow">
        <winMoving :config="winConfig" @click-footer="clickFooter" class="my-win">
            <div slot="header">Верхний колонтитул</div>
            <p>Тело компонента 1</p>
            <p>Тело компонента 2</p>
            <p>Тело компонента 3</p>
            <div slot="footer">Нижний колонтинул</div>
        </winMoving>
    </div>

</template>

<script>

    import winMoving from "@/components/winMoving"

    export default {
        name: "SlidingWindow",
        props: [],
        components: {winMoving},
        data() {
            return {
                winShow: true,
                winConfig: {
                    id: 'testWin',
                    moveable: true,
                }
            }
        },
        computed: {},
        methods: {
            clickFooter(val){
                this.winShow=!val;
                console.log("clickFoote S");
            },
        },
        mounted(){
        },
    };
</script>

