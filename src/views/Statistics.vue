import Statistics from '@/views/Statistics.vue';
<template>
    <Layout>
        <Types  :value="yyy"
                :classPrefix="xxx"/>
    </Layout>
    
</template>

<script lang="ts">
    import Vue from 'vue'
    import Types from '../components/Money/Types.vue';

    import {Component, Prop} from 'vue-property-decorator';
    @Component({
        components:{Types}
    })
    export default class Statistics extends Vue{
        yyy='-';
        
    }
</script>

<style lang="scss" scoped>
    ::v-deep li{
        background: white;
        &.selected{
            background: #c4c4c4;
            &::after{
                display: none;
            }
        }
    }
</style>