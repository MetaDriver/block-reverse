<template>
    <div class="BlockList">
        <div class="container">
            <div class="row">
                <div class="col-12 page-head">
                    <h2>BlockList</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="rows head">
                        <div class="headline"
                             :style="{ width: col.width + '%' }"
                             v-for="col in listConfig.fields">
                            {{col.label}}

                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="rows" :style="{ background: (!(i%2)?colFirst:colSec) }"
                         v-for="(row, i) in ld">
                        <div class="line" :style="{ width: col.width + '%' }"
                             v-for="col in listConfig.fields">
                            <div class="list"
                                 v-if="col.fieldName === 'height'">
                                {{row[col.fieldName]}}

                            </div>
                            <div class="list"
                                 v-else-if="col.fieldName === 'timestamp'">
                                {{row[col.fieldName] | tsp2iso}}

                            </div>
                            <div class="list"
                                 v-else-if="col.fieldName === 'hash'">
                                {{row[col.fieldName] | truncHash}}

                            </div>
                            <div class="list"
                                 v-else>
                                {{row[col.fieldName]}}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import restApi from '@/restApi.js';

    export default {
        name: "BlockList",
        props: [],
        components: {},
        data() {
            return {
                colFirst: '#F4F7F5',
                colSec: '#ffffff',
                ld: [],
                listConfig: {
                    fields: [
                        {label: "Height", fieldName: 'height', width: 9}, //- высота
                        {label: "Age", fieldName: 'timestamp', filter: 'tsp2iso', width: 22}, //- время
                        {label: "Hash", fieldName: 'hash', filter: 'truncHash', width: 24}, //- хэш
                        {label: "Txn", fieldName: 'txn_count', width: 10}, //- количество транзакций
                        {label: "Size", fieldName: 'size', width: 10}, //- размер
                        {label: "Type", fieldName: 'type', width: 10}, //- тип
                        {label: "Reward", fieldName: 'nonce', width: 10}, //- возграграждение
                    ],
                },
            }
        },
        computed: {},
        methods: {},
        mounted(){
//            restApi.velasPing().then(resp => {
//                console.log("velasPing: ", resp);
//            });
            restApi.velasHeaders().then(resp => {
                console.log("velasHeaders: ", resp.data);
                this.ld = resp.data;
                console.log("this.ld: ", this.ld);
            });
        },
    };
</script>

<style scoped lang="scss">

    .BlockList {
        text-align: left;
        .page-head {
          height: 50px;
            
        }
        .rows {
            position: relative;
            display: flex;
            flex-direction: row;
            width: 100%;
            border-bottom: 1px solid rgba(108, 117, 125, 0.28);
        }
        .head {
            border-top: 1px solid rgba(108, 117, 125, 0.97);
            border-bottom: 1px solid rgba(108, 117, 125, 0.97);
            align-items: center;
            height: 35px;
        }
        .headline {
            font-weight: bold;
        }

        .line {

        }
        .list {

        }
    }

</style>
