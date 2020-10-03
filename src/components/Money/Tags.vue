<template>
    <div class="tags">
             <div class="new">
                <button @click="create">新增标签</button>
            </div>
            <ul class="current">
                <li v-for="tag in dataSource"
                :key="tag"
                :class="{selected: selectedTags.indexOf(tag)>=0}"
                @click="toggle(tag)"
                >{{tag}}</li>
            </ul>
           
        </div>
</template>



<script lang="ts">
    import Vue from 'vue'
    import {Component, Prop} from 'vue-property-decorator';
    import {tagListModel} from '@/models/tagListModel.ts';
    @Component
    export default class Tags extends Vue{
        dataSource= tagListModel.data; 
        selectedTags: string[] = [];
        toggle(tag: string){
            const index = this.selectedTags.indexOf(tag);
            if(index >=0){
                this.selectedTags.splice(index, 1);
            }else{
            this.selectedTags.push(tag);
            }
            this.$emit("update:value", this.selectedTags);
        }
        create(){
            const name = 
            window.prompt("请输入标签名")
            if(name){
                try{
                tagListModel.create(name);
                }catch(error){
                    if(error.message === 'duplicated'){
                        window.alert('标签重复');
                    }
                }
            }
            this.dataSource=tagListModel.data;
        }
    }
</script>
<style lang="scss" scoped>
        @import "~@/assets/style/helper.scss";
        @import "~@/assets/style/reset.scss";
        .tags{
        flex-grow: 1;
        display: flex;
        flex-direction: column-reverse;
        font-size: 14px;
         > .current{
             display: flex;
             flex-wrap: wrap;
             margin-top: 4px;
             overflow:auto;
             > li{
                 background: #d9d9d9;
                 $h: 24px;
                 height: $h;
                 border-radius: $h/2;
                 padding: 0 16px;
                 margin-right: 12px;
                 line-height: $h;
                 &.selected{
                     border: 1px solid blue;
                     color: white;
                 }
             }
         }
         > .new{
             padding-top: 16px;
             button{
                 background: transparent;
                 border: none;
                 border-bottom:1px solid;
                 color: #999;
                 padding: 0 3px;
             }
         }
    }
</style>