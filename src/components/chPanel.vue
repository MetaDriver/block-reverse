import router from './router'

<template>

    <div class="chPanel" :class="{ opened }">
        <div class="panel-tong"
             :class="{ opened }"
             @click="clickTong"
        >
            <span class="tong-sign">{{tongSign[opened]}}</span>
        </div>
        <div class="panel-content">
            <p>Размер</p>
            <input type="number"
                   min="4" max="200" step="2"
                   v-model="size"
                   :disabled="!chData.boardIsEmpty"
                   @input="changeSize(size)"
            >
            <!--<input type="text"-->
            <!--maxlength="2"-->
            <!--v-model="size"-->
            <!--:disabled="!hrData.boardIsEmpty"-->
            <!--@change="changeSize(size)"-->
            <!--&gt;-->
            <p></p>
            <p></p>
            <button class="btn-reset" @click="reset">Reset</button>
            <br>
            <br>
            <br>
            {{chData.testVar}}


            <button class="btn-reset"
                    @click="chData.testTube('testVar' ,chData.testVar+1)"
            >Inc Var
            </button>

            <hr>
            <input type="number" v-model.number="x">
            <br> <br>
            <input type="number" v-model.number="y">
            <br> <br>
            <input type="number" v-model.number.lazy="result">
        </div>
    </div>
</template>

<script>
    //import xxx from "yyy/xxx";

    export default {
        name: "chPanel",
        props: ["ch-data"],
        data() {
            return {
                opened: 1,
                tongSign: ['►', '×'],
                size: 0,
                x: 0,
                y: 0,

            }
        },
        computed: {
            result: {
                get: function () {
                    return (+this.x + (+this.y));
                },
                set: function (val) {
//                    if(!val)  {return;}
                    val = val == 0 ? 0.00001 : val;
                    let x = this.x, y = this.y, sum = x + y;
                    if (!sum) {
                        return;
                    }
//                    if(sum===0){ return;}
                    let norm = val / sum;
                    this.x = x * norm;
                    this.y = y * norm;
                }
            },


        },
        methods: {
            precission(val, dig)
            {
                return val - (val % dig);
            }
            ,
            clickTong()
            {
                this.opened ^= 1;
            }
            ,
            changeSize(size)
            {

                size = !+size ? 15 : Math.max(1, size);
                size = Math.min(200, size);
                this.$emit("change-size", +size);

            }
            ,
            clickBtnReset()
            {

            }
            ,
            reset()
            {
                this.$emit('reset');
            }
        }
        ,
        mounted()
        {
            console.log('chPanel::  this == ', this);
        }
        ,
    }
</script>

<style lang="scss" scoped>
    @import "../assets/css/global";

    .chPanel {
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
    }

</style>
