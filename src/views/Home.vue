<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue';
//    import restApi from '@/restApi.js';       //это пошло в views\BlockList.vue

    export default {
        name: 'home',
        components: {
            HelloWorld
        },
        mounted(){  //и это тоже в views\BlockList.vue
//            restApi.velasPing().then(resp => {
//                console.log("velasPing: ", resp);
//            });
//            restApi.velasHeaders().then(resp => {
//                console.log("velasHeaders: ", resp.data);
//            });
        },
    };
</script>
