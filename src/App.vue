<template>
    <div id="app">
        <header class="header">
            <div class="container">
                <div class="row">
                    <col-12>
                        <router-link to="/">Home</router-link>

                        <router-link to="/about">About</router-link>

                        <router-link to="/block-reverse">Block Reverse</router-link>
                    </col-12>
                </div>
            </div>
        </header>
        <main>

            <router-view  :space-size="15"/>

        </main>
        <footer></footer>
    </div>
</template>

<script>
    export default {
        name: "App",
    }
</script>


<style lang="scss">

@import "./assets/css/global.scss";

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        padding-top: 100px;
    }

    .header {
        width: 100%;
        height: 50px;
        position: fixed;
        top: 0;
        left: 0;
        background-color: hsl(30, 50%, 20%);
        padding-top: 15px;
        text-align: left;
        a {
            color: white;
            padding: 0 10px;
        }
    }

</style>
