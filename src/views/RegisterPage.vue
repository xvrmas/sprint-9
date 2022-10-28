<template>
    <div class="mt-6">
        <button class="button" @click="showHome">Home</button>
        <div>
            <section class="columns">
                <div class="column border is-rounded mt-5 is-half is-offset-one-quarter">
                    <div class="box">
                        <p class="title">
                            Create user:
                        </p>
                        <form>
                            <input class="input is-rounded m-2" type="email" placeholder="Enter your email">
                            <input class="input is-rounded m-2" type="Password" placeholder="Enter your password">
                            <button class="button mt-4" type="submit">create</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RegistePage',
    methods:
    {
        showHome() {
            this.$router.push('PanellView')
        }
    }
}
</script>
<style>
/* .box {
    border: solid orange 2px;
    border-radius: 30px;
    box-shadow: 15px 15px 15px rgb(125, 142, 91) ;
}

.button {
    border: solid orange 1px;
} */
</style>
