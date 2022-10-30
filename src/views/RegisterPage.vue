<template>
    <div class="mt-6">
        <div>
            <section class="columns">
                <div class="column">
                    <img src="@/assets/mononoke-sentada.png" style="height:max-content;">

                </div>
                <div class="column border is-rounded m-5">
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

    }
}
</script>
<style>
.reg {
    margin-top: 10vh;
}
</style>
