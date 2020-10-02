<template>
    <div class="tags">
             <div class="new">
                <button>新增标签</button>
            </div>
            <ul class="current">
                <li v-for="tag in dataSource"
                :key="tag"
                >{{tag}}</li>
            </ul>
           
        </div>
</template>



<script lang="ts">
    import Vue from 'vue'
    import {Component, Prop} from 'vue-property-decorator';
    @Component
    export default class Tags extends Vue{
        @Prop(Array) dataSource: string[] | undefined;
        selectedTags: string[] = [];
        beforeCreate(){
            console.log(this.dataSource);
            
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