<template>
    <div class="columns">
        <div class="column"> </div>
        <div class="column is-half is-centered m-6 ">
            <form class="box ">
                <div class="field">
                    <label class="label">Name:</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="name">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Adress:</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="adress">
                    </div>
                </div>
                <div class="field">
                    <label class="label">city:</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="city">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Country:</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="country">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Phone:</label>
                    <div class="control">
                        <input class="input" type="number" placeholder="">
                    </div>
                </div>
            </form>
            <button class="button is-primary" @click="lastPage()">Send</button>           
        </div>
        <div class="column "> </div>
    </div>
</template>

<script>

export default {
    name: 'checkoutForm',
    methods: {
        lastPage() {
            this.$router.push('farewellPage')
        }
    }
}
</script>