
<template>
    <Layout class-prefix="layout">
        <NumberPad  @update:value="onUpdateAmount"
                    @submit="saveRecord"/>
        <Types      @update:value="onUpdateType"
                    :value.sync="record.type"/>
        <Notes      @update:value="onUpdateNotes"/>
        <Tags :dataSource.sync="tags" 
                    @update:value="onUpdateTags"/>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue'
    import NumberPad from "@/components/Money/NumberPad.vue"
    import Types from "@/components/Money/Types.vue"
    import Notes from "@/components/Money/Notes.vue"
    import Tags from "@/components/Money/Tags.vue"
    import {Component, Prop, Watch} from 'vue-property-decorator';
    type Record ={
        tags: string[];
        notes: string;
        type: string;
        amount: number;
        createdAt: Date | undefined;
    }

    @Component({
        components:{NumberPad, Types, Notes, Tags}
    })
    export default class Money extends Vue{
        tags = ["衣","食", "住", "行", "通信"];
        record: Record={tags:[], notes:"", type:'-', amount:0, createdAt: undefined};
        recordList: Record[] = JSON.parse(
                                window.localStorage.getItem('recordList') || '[]');
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
            const record2: Record = JSON.parse(JSON.stringify(this.record));
            record2.createdAt = new Date();
            this.recordList.push(record2);
            console.log(this.recordList);
            
        }
        @Watch('recordList')
        onRecordListChange(){
            window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
        }
    }
</script>

<style lang="scss">
    .layout-content{
        display: flex;
        flex-direction: column-reverse;
    }
</style>