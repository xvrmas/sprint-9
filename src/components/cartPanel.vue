<template>
    <div>{{ cartFinal }}</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'cartPanel',
    computed: {
        ...mapState(['cartFinal'])
    },
}
</script>