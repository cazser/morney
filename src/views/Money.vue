
<template>
    <Layout class-prefix="layout">
        <NumberPad  @update:value="onUpdateAmount"
                    @submit="saveRecord"/>
        <Types      @update:value="onUpdateType"
                    :value.sync="record.type"/>
        <FormItem   fieldName="备注"
                    placeHolder="在这里输入备注"
                    @update:value="onUpdateNotes"/>
        <Tags :dataSource.sync="tags" 
                    @update:value="onUpdateTags"/>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue'
    import NumberPad from "@/components/Money/NumberPad.vue"
    import Types from "@/components/Money/Types.vue"
    import Tags from "@/components/Money/Tags.vue"
    import FormItem from "@/components/Money/FormItem.vue"
    import Tabs from "@/components/Tabs.vue"
    import {recordListModel} from "@/models/recordList.ts"
    import {tagListModel} from "@/models/tagListModel.ts"
    import RecordItem from '@/custom';
    import {Component, Prop, Watch} from 'vue-property-decorator';
    import clone from '../libs/clone';
    /*type RecordItem ={
        tags: string[];
        notes: string;
        type: string;
        amount: number;
        createdAt: Date | undefined;
    }*/

    const tagList = tagListModel.fetch();
    @Component({
        components:{NumberPad, FormItem, Tabs, Tags, Types}
    })
    export default class Money extends Vue{
        tags = tagList;
        record: RecordItem={tags:[], notes:"", type:'-', amount:0, createdAt: undefined};
        recordList =recordListModel.fetch();
        //JSON.parse( window.localStorage.getItem('recordList') || '[]');
        onUpdateTags(value: string[]){
            this.record.tags = value;
            
        }
        onUpdateNotes(value: string){
            this.record.notes = value;
            
        }
        onUpdateAmount(value: string){
            console.log(value);
            this.record.amount = parseFloat(value);
        }
        onUpdateType(value: string){
            this.record.type = value;
        }
        saveRecord(){
            const record2: RecordItem = clone(this.record);
            record2.createdAt = new Date();
            this.recordList.push(record2);            
        }
        @Watch('recordList')
        onRecordListChange(){
            //window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
            recordListModel.save();
        }
    }
</script>

<style lang="scss">
    .layout-content{
        display: flex;
        flex-direction: column-reverse;
    }
</style>