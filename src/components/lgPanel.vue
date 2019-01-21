<template>

    <div class="lgPanel" :class='opened ? "opened" : ""'>   <!-- "opened ? 'opened' : ''  эквивалентно   { opened } -->
        <div class="panel-tong"
             :class="{ opened }"
             @click="clickTong"
        >
            <span class="tong-sign">
             {{tongSign[opened]}}
            </span>
        </div>
        <div class="panel-content">
            <p>Размер поля</p>
            <input class="lg-size-input"
                   type="number"
                   min="2"
                   max="40"
                   v-model.lazy="inputValue"
                   @change="changeSize(inputValue)"
                   placeholder="Введите размер"
            />
            <p>{{inputValue}}</p>
            <!--<button class="btn-reset">Reset</button>-->
        </div>
    </div>

</template>

<script>
    // import test from "@/test/test"
    // русский тест
    export default {
        name: "lgPanel",
        props: [],
        components: {},
        data() {
            return {
                opened: 1,
                tongSign: ['►', '×'],
                inputValue: "",
            }
        },
        computed: {
            
        },
        methods: {
            clickTong(){
                this.opened ^= 1;
            },
            changeSize(inputValue)
            {
                this.$emit("change-size", +inputValue);
            },
        },
        mounted(){
        },
    };
</script>

<style lang="scss" scoped>
    @import "../assets/css/global";

    .lgPanel {
        background-color: hsl(0, 0%, 97%);
        box-shadow: 0 0 8px 0;
        position: fixed;
        left: -250px;
        top: 0;
        width: 250px;
        height: 100vh;
        padding: 100px 40px 40px 40px;
        transition: left 0.5s linear;

        .panel-tong {
            background-color: hsl(0, 0%, 97%);
            box-shadow: 0 0 8px 0;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            position: absolute;
            right: -30px;
            top: 60px;
            width: 30px;
            height: 45px;
            border-radius: 0 50% 50% 0;
            transition: all 0.5s linear;
            .tong-sign {
                transform-origin: left;
                transform: scaleX(1) scaleY(2.5);
            }
            &:hover {
                .tong-sign {
                    transform: scaleX(1.3) scaleY(2.5);
                }
                transition: 0s linear;
            }
            &.opened {
                right: 10px;
                box-shadow: 0 0 8px 0 hsl(10, 50%, 70%);
                width: 20px;
                height: 20px;
                top: 72px;
                border-radius: 50% 50% 50% 50%;
                transition: all 0.3s linear;
                color: hsl(348, 83%, 47%);
                &:hover {
                    color: hsl(348, 83%, 27%);
                    background-color: hsl(10, 50%, 80%);
                    transition: all 0s linear;
                    transform: scaleX(1.3) scaleY(1.3);
                }
                .tong-sign {
                    transform-origin: center;
                    transform: scaleX(1.3) scaleY(1.3);
                }
                &:hover {
                    .tong-sign {
                        transform: scaleX(1.8) scaleY(1.8);
                    }
                    transition: 0s linear;
                }
            }
        }
        .panel-content {
            //background-color: hsl(0, 0%, 97%);;
            width: 100%;
            height: 100%;
            .btn-reset {
                width: 70px;
                height: 25px;
            }
        }
        &.opened {
            left: 0px;
            transition: left 0.3s linear;
        }
        .lg-size-input {

            width: 100%;
        }
    }

</style>
