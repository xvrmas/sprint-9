<template>
    <div>
        <button class="button mt-6" @click="showHome">Home</button>
        <section class="columns shadow">
            <div class="column  mt-5 is-half is-offset-one-quarter">
                <div class="box">
                    <p class="title">
                        Login:
                    </p>
                    <form>
                        <input class="input is-rounded m-2" type="email" placeholder="Enter your email">
                        <input class="input is-rounded m-2" type="Password" placeholder="Enter your password">
                        <button class="button mt-4" type="submit">Enter</button>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name: 'Login',
    methods: {
        showHome() {
            this.$router.push('PanellView')
        },

    }
}
</script>
<style >

</style>