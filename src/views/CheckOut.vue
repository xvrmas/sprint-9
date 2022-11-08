<template>
    <div>{{ checkout }}</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'CheckOut',
    computed: {
        ...mapState(['checkout'])
    }
}
</script>