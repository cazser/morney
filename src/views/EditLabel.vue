<template>
    <Layout>
        <div class="wrapper">
            <Icon name="left"/>

            <span>
                编辑标签
            </span>
        </div>
        <Notes field-name="标签名" 
            place-holder="请输入标签名" />
    </Layout>
</template>
<script lang="ts">
import Vue from 'vue'
import {Component, Prop} from 'vue-property-decorator';
import Layout from '@/components/Layout.vue';
import { tagListModel } from '@/models/tagListModel';
import Icon from '@/components/Icon.vue';
import Notes from '../components/Money/Notes.vue';
@Component({components:{Notes}})
export default class EditLabel extends Vue{
    created(){
        const id = this.$route.params.id;
        tagListModel.fetch();
        const tags = tagListModel.data;
        const tag = tags.filter(t=> t.id === id)[0];
        if(tag){
            
            console.log(tag);
        }else{
            this.$router.replace('/404');
        }
        
    }

}
</script>
<style lang="scss" scoped>
    .wrapper{
        display: flex;
        flex-direction: row;
    }

</style>