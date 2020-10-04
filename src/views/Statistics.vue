import Statistics from '@/views/Statistics.vue';
<template>
    <Layout>
        <Tabs class-prefix="type" :data-source="typeList" :value.sync="type"/>
        <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
        <ol>
            <li v-for="item in result" :key="item.id">
                {{result}}
            </li>
        </ol>        
    </Layout>
    
</template>

<script lang="ts">
    import Vue from 'vue'
    import Types from '../components/Money/Types.vue';
    import intervalList from "@/constants/interval.ts";
    import {Component, Prop} from 'vue-property-decorator';
    import recordTypeList from '../constants/recordTypeList';
    @Component({
        components:{Types}
    })
    export default class Statistics extends Vue{
        type='-';
        interval="day";
        intervalList= intervalList;
        typeList = recordTypeList;
        get recordList(){
            return this.$store.state.recordList ;
        }
        get result(){
            return this.recordList();
        }

        mounted(){
            this.$store.commit('fetchRecords')
        }
    }
</script>

<style lang="scss" scoped>
    ::v-deep .type-tabs-item{
        background: white;
        &.selected{
            background: #c4c4c4;
            &::after{
                display: none;
            }
        }
    }
    ::v-deep li.interval-tabs-item{
        height: 48px;
    }

</style>