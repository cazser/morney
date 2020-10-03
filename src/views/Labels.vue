import Icon from '@/components/Icon.vue';
<template>
    <Layout>
        <ul class="tags">
            <li><Icon name="right"/> 衣</li>
            <li><Icon name="right"/> <span>衣</span></li>
            
        </ul>
        <div class="createTag-wrapper">
            <button class="createTag">新建标签</button>
        </div>
    </Layout>
</template>

<script lang="ts">
   
    export default {
        name:"Labels",
    }
</script>

<style lang="scss" scoped>
    .tags{
        
        background: white;
        font-size: 16px;
        padding-left: 16px;
        >li{
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
</style>