<template>
    <div>
        <div>Login</div>
        <button class="button" @click="showHome">Home</button>
    </div>
</template>
<script>
export default {
    name: 'Login',
    methods: {
        showHome() {
            this.$router.push('PanellView')
        }
    }
}
</script>