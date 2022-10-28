<template>
    <div>
        <div>Register page</div>
        <button class="button" @click="showHome">Home</button>
    </div>
</template>

<script>
export default {
    name: 'RegistePage',
    methods:
    {
        showHome(){
            this.$router.push('PanellView')
        }
    }
}
</script>
