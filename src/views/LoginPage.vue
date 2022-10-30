<template>
    <div class="mt-6">
        <section class="columns shadow">
            <div class="column p-4 is-quarter m-5">
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
            <div class="column reg">
                <img src="@/assets/totoro-amics.png" style="height:max-content; align-self: center;">
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
<style>
/* .reg {
    margin-top: 20vh;
    margin-left: 5vh;
} */
</style>