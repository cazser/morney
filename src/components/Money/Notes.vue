<template>
    <div>
        <label class="notes">
            <span class="name">备注</span>
            <input class="value" 
            v-model="value"
            type="text"
             placeholder="在这里输入备注">
        </label>
    </div>
    
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component, Prop} from 'vue-property-decorator';
    @Component
    export default class Notes extends Vue{
        value='';        
        onInput(event: KeyboardEvent){
            const target = event.target as HTMLInputElement;
            this.value = target.value;
        }
    }
</script>

<style lang="scss" scoped>
        @import "~@/assets/style/helper.scss";
        @import "~@/assets/style/reset.scss";
        .notes{
        background: #f5f5f5;
        font-size: 14px;
        display: block;
        padding: 0 16px;
        display: flex;
        align-items: center;
        .name{
            padding-right: 16px;
        }
        input{
            height: 64px;
            flex-grow: 1;
            background: transparent;
            border: none;        
        }
        > input:focus {
        outline:none;
        border: 1px solid #4e6ef2;
        background:white;
        }   
    }
</style>