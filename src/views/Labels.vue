import Icon from '@/components/Icon.vue';
<template>
    <Layout>
        <div class="tags">
            <div v-for="tag in tags" :key="tag.id"
                        class="tag"  :to="`/label/edit/${tag.id}`">
                <div class="deleteWrapper"
                        @click="deleteTag(tag.id)">
                    <Icon name="delete"/> 
                </div>
                <span>{{tag.name}}</span>
            </div>
        </div>
        <div class="createTag-wrapper">
            <button class="createTag"
                    @click="createTag">新建标签</button>
        </div>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {tagListModel} from '@/models/tagListModel.ts';
    import {Component} from 'vue-property-decorator';
        tagListModel.fetch();
    @Component
    export default class Labels extends Vue{
        tags = tagListModel.data;
        createTag(){
            const name = window.prompt('请输入标签名')
            if(name){
                try{
                tagListModel.create(name);
                }catch(error){
                    if(error.message === 'duplicated'){
                        window.alert('标签重复');
                    }
                }
            }
        }
        deleteTag(id: string){
            tagListModel.delete(id);
            this.tags = tagListModel.data;
            //console.log(this.tags);
            //console.log("done");
        
        }
    }
</script>

<style lang="scss" scoped>
    .tags{
        
        background: white;
        font-size: 16px;
        padding-left: 16px;
        > .tag{
            display:flex;
            flex-direction: row-reverse;
            justify-content: space-between;
            align-items: center;
            min-height: 44px;
            border-bottom: 1px solid #e6e6e6;
        }
        
    }
    .createTag{
        background: #767676;
        color: white;
        border-radius: 4px;
        border: none;
        height: 40px;
        &-wrapper{
            text-align: center;
            margin-top: 44px;
        }
    }

    .deleteWrapper{
        padding-right: 16px;
        color: red;
    }
</style>