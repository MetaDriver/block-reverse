<style lang="scss">

    .Card {
        margin-bottom: 50px;
    }

    .toggle {
        &:focus {
            outline: none;
        }
        position: relative;
        height: auto;
        width: 80px;
        justify-content: space-between;
        margin: 50px 0;
        border-radius: 15px;
        background-color: hsl(0, 95%, 88%);
        &.on {
            background-color: hsl(116, 95%, 83%);
        }
    }

    .flx-cont {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
    }

    .my-card {
        position: relative;
        width: 300px;
        height: 350px;
        overflow: auto;
        margin: 10px;
        margin-top: 20px;
        box-shadow: 0 0 10px;
        border-radius: 3px;
    }

    .img-item {
        position: relative;
        width: 90%;
        height: auto;
        background-size: 100% auto;
        background-repeat: no-repeat;
        margin: 15px 10px;
    }

    .title-item {
        position: relative;
        text-align: left;
        font-weight: bold;
        margin: 0 20px;
        margin-top: 10px;
    }

    .text-item {
        position: relative;
        text-align: left;
        margin: 0 10px;
    }

</style>


<template>

    <div class="Card">
        <div v-if="toggleOn" v-html="insertedCss">

        </div>
        <div class="ctr">
            <div class="row">
                <div class="col-12">
                    <button class="toggle" :class="{on:toggleOn}"
                            @click="toggleOn^=1">{{toggleOn ? "On" : "Off"}}

                    </button>
                    <input type="text" v-model="hColor">
                    <div class="flx-cont" v-if="listData">
                        <div class="my-card"
                             v-for="(row, i) in cakes" :key="cards[i].id">
                            <img :src="cards[i].img" alt="" class="img-item">
                            <div class="title-item">
                                <h5>{{row.title}}</h5>
                            </div>
                            <div class="text-item">
                                {{row.text}}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

    // import test from "@/test/test"
    export default {
        name: "Card",
        props: [],
        components: {},
        data() {
            return {
                toggleOn: false,
                hColor: 'green',
                listData: null,
                cards: [
                    {
                        id: 'card-01',
                        img: '/static/img/cakes/cake-1.jpg',
                    },
                    {
                        id: 'card-02',
                        img: '/static/img/cakes/cake-2.jpg',
                    },
                    {
                        id: 'card-03',
                        img: '/static/img/cakes/cake-3.jpg',
                    },
                    {
                        id: 'card-04',
                        img: '/static/img/cakes/cake-4.jpg',
                    },
                    {
                        id: 'card-05',
                        img: '/static/img/cakes/cake-5.jpg',
                    },
                    {
                        id: 'card-06',
                        img: '/static/img/cakes/cake-6.jpg',
                    },
                ],
                cakes: [
                    {
                        title: "Движение на токены",
                        text: "Вы двигаетесь — приложение начисляет токены и вы меняете их на товары в нашем магазине. Все просто."
                    },
                    {
                        title: "Шаги",
                        text: "«Больше шагов — больше токенов», — эта мысль заставит вас использовать все свободное время, чтобы двигаться."
                    },
                    {
                        title: "Повод заняться спортом",
                        text: "Теперь вы точно начнете бегать по утрам, запишитесь на плавание или отправитесь на долгожданную велопрогулку."
                    },
                    {
                        title: "Здоровье",
                        text: "Пробежка по парку или просто прогулка — теперь это не только полезно, но и выгодно."
                    },
                    {
                        title: "Еще пару километров",
                        text: "Неважно куда — важно насколько это далеко. Пройденные километры также помогут вам заработать токены."
                    },
                    {
                        title: "Магазин",
                        text: "Тратьте заработанные токены на тысячи реальных товаров в нашем магазине."
                    },
                ],
            }
        },
        computed: {
            insertedCss(){
                return `<style >
                                   .title-item {color: ${this.hColor}; }
                             </style>`;
            },
        },
        methods: {},
        mounted(){
            let listData = (new Array(this.cards.length));
            for (let i = this.cards.length; i--;) {
                listData[i] = {};
                listData[i].id = this.cards[i].id;
                listData[i].img = this.cards[i].img;
                listData[i].title = this.cakes[i].title;
                listData[i].text = this.cakes[i].text;
            }
            this.listData = listData;
            console.log("cards: ", this.listData);
        },
    };
</script>


