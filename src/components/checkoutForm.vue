<template>
    <div class="columns">
        <div class="column"> </div>
        <div class="column is-half is-centered m-6 ">
            <form id="app" method="post">
                <p v-if="errors.length">
                    <b>Please correct the following error(s):</b>
                <ul>
                    <li v-for="(error, i) in errors" :key="i">{{ error }}</li>
                </ul>
                </p>
                <p>
                    <label for="name">Name:</label>
                    <input class="input" id="name" c v-model="name" type="text" name="name">
                </p>
                <p>
                    <label for="name">Adress:</label>
                    <input class="input" id="name" required v-model="adress" type="text" name="name">
                </p>
                <p>
                    <label for="email">Email:</label>
                    <input class="input" id="email" required v-model="email" type="email" name="email">
                </p>
            </form>
            <p>
                <input class="button" @click="checkForm" type="submit" value="Enviar">
            </p>
        </div>
        <div class="column "> </div>
    </div>
</template>

<script>

export default {
    name: 'checkoutForm',
    data() {
        return {
            errors: [],
            name: null,
            email: null,
            adress:null,
            pasa: false
        }
    },
    methods: {

        checkForm() {
            if (this.name && this.email) {
                this.pasa = true;
                this.$router.push('farewellPage')

            }

            this.errors = [];

            if (!this.name) {
                this.errors.push('Name is required.');

            }
            if (!this.email) {
                this.errors.push('An email address is required');
            }
            if (!this.adress) {
                this.errors.push('An address is required');
            }

        }

    }
}
</script>