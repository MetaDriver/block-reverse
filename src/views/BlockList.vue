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
                    <div class="block-row head">
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
                    <div class="block-row" :style="{ background: (!(i%2)?colFirst:colSec) }"
                         v-for="(row, i) in listData">
                        <div class="list-item"
                             :style="{ width: col.width + '%' }"
                             :class="{clicable: !!col.click}"
                             v-for="col in listConfig.fields"
                             @click="col.click && col.click(row)">
                            <div v-if="col.fieldName === 'height'">
                                {{row[col.fieldName]}}
                            </div>
                            <div v-else-if="col.fieldName === 'timestamp'">
                                {{row[col.fieldName] | tsp2iso}}
                            </div>
                            <div v-else-if="col.fieldName === 'hash'">
                                {{row[col.fieldName] | truncHash}}
                            </div>
                            <div v-else>
                                {{row[col.fieldName]}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <b-modal ref="viewModalRef" size="lg" ok-only ok-title="Go Back" :title="headerText">
                <pre>{{modalData}}</pre>
            </b-modal>
        </div>
    </div>
</template>
<!--<b-btn class="close-btn"  block @click="hideModal">Go Back</b-btn>-->
<!--hide-footer-->
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
                listData: [],
                modalData: {},
                headerText: "",
                listConfig: {
                    fields: [
                        {label: "Height", fieldName: 'height', width: 9, click: this.showModal}, //- высота
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
        methods: {
            showModal(row){
                restApi.blocks(row.hash).then(resp => {
                    this.modalData = resp.data;
                    console.log("row.hash.data: ", resp.data);
                    this.headerText = "Block #" + this.modalData.header.height;
                    console.log("headerText: ", this.headerText);
                    this.$refs.viewModalRef.show();
                })
            },
            hideModal() {
                this.$refs.viewModalRef.hide();
            }
        },
        mounted(){
//            restApi.velasPing().then(resp => {
//                console.log("velasPing: ", resp);
//            });
            restApi.velasHeaders().then(resp => {
//                console.log("velasHeaders: ", resp.data);
                this.listData = resp.data;
                console.log("this.listData: ", this.listData);
            });
//            restApi.blocks("45aabe287e1e85f02827716d7ff72784f65ecb7843d0208db23b12c523a5bd4c").then( resp => {
//
//                console.log("hash.data: ", resp.data);
//            });
        },
    };
</script>

<style lang="scss">

    .btn.btn-primary {
        padding-left: 35px !important;
        padding-right: 35px !important;
        color: black !important;
        background-color: hsl(133, 95%, 88%) !important;
        border-color: hsl(133, 95%, 78%) !important;

        &:hover {
            background-color: hsl(133, 55%, 58%) !important;
        }
    }
</style>

<style scoped lang="scss">

    .BlockList {
        text-align: left;
        .page-head {
            height: 50px;

        }
        .block-row {
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
        .list-item {
            &.clicable {
                color: darkblue;
                cursor: pointer;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
        .close-btn {

        }
    }

</style>
