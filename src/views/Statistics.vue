import Statistics from '@/views/Statistics.vue';
<template>
    <Layout>
        <Types/>
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
        
    }
</script>

<style lang="scss" scoped>

</style>