<template>
    <div class="columns">
        <showStoreProducts />
    </div>
</template>
<script>
import showStoreProducts from '@/components/showStoreProducts.vue';
export default {   
    name: 'storeView',
    components:{showStoreProducts}
}
</script>