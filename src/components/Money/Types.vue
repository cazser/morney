<template>
    <div>
        <ul class="types">
            <li 
                :class="{[classPrefix+'-item']:classPrefix, selected: type==='-'}"
            @click="selectType('-')">支出</li>
            <li :class="type === '+' && 'selected'"
            @click="selectType('+')">收入</li>
        </ul>
    </div>
</template>

<script lang="ts">
/*    export default {
        name:"Types",
        data(){
            return {
                type: '-' //-表示支出，+表示收入
            }
        },
        methods:{
            selectType(type){   //type只能是-或者+
                if(type !== '-' && type !=='+'){
                    throw new Error("type is unknown")
                }
                this.type = type
            }
        }
    }
*/
    import Vue from 'vue';
    import {Component, Prop, Watch} from 'vue-property-decorator';
    @Component
    export default class Types extends Vue{
        @Prop(String) readonly value!: string;  //-表示支出，+表示收入
        @Prop(String) classPrefix?: string;
        type=this.value;
        selectType(type: string){   //type只能是-或者+
            if(type !== '-' && type !=='+'){
                throw new Error("type is unknown")
            }
            
            
            this.type = type;
            
        }
        @Watch('type')
        onTypeChanged(value: string){
            this.$emit("update:value", value);
        }
        
    }
    
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";
    @import "~@/assets/style/reset.scss";
     .types{
        background: #c4c4c4;
        display: flex;
        text-align: center;
        font-size: 24px;
        > li{
            width: 50%;
            height: 64px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            &.selected::after{
                content:'';
                position: absolute;
                bottom: 0;
                left:0;
                width: 100%;
                height: 4px;
                background: #333;
            }
        }
    }
</style>