<template>
    <div class="app">
        <header class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <router-link to="/">Home</router-link>

                        <router-link to="/about">About</router-link>

                        <router-link to="/block-reverse">Block Reverse</router-link>

                        <router-link to="/hexagonal-reverse">Hexagonal Reverse</router-link>

                        <router-link to="/circle-hexagonal">Circle Hexagonal</router-link>

                        <router-link to="/life-game">Life</router-link>

                        <router-link to="/distances">Triangle Distances</router-link>

                        <router-link to="/tr-distances">Tr Distances</router-link>

                        <router-link to="/block-list">List</router-link>

                        <router-link to="/card">Card</router-link>

                        <router-link to="/sliding-window">Sliding Window</router-link>

                    </div>
                </div>
            </div>
        </header>
        <main>
            <router-view/>
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

    .app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        padding-top: 80px;
    }

    .header {
        z-index: 1000;
        width: 100%;
        //height: 50px;
        position: fixed;
        top: 0;
        left: 0;
        background-color: hsl(30, 50%, 20%);
        padding-top: 15px;
        padding-bottom: 15px;
        text-align: left;
        a {
            color: white;
            padding: 0 10px;
            &.router-link-exact-active.router-link-active {
                font-weight: bold;
                &:hover {
                    text-decoration: none;
                }
            }
        }
    }

</style>
