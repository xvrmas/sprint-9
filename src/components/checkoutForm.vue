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
                    <input class="input" id="name" v-model="name" type="text" name="name" placeholder="James Stewart">
                </p>
                <p>
                    <label for="name">Adress:</label>
                    <input class="input" id="name" v-model="adress" type="text" name="name"
                        placeholder="Madison avenue 3">
                </p>
                <p>
                    <label for="email">Email:</label>
                    <input class="input" id="email" v-model="email" type="email" name="email"
                        placeholder="user@user.com">
                </p>
                <hr>
                <p>
                    <label for="card">Card number:</label>
                    <input class="input" id="card" v-model="card" type="number" name="card"
                        placeholder="52100236674339006">
                </p>
                <p>
                    <label for="cvc">CVC:</label>
                    <input class="input" id="CVC" v-model="cvc" type="number" name="cvc" placeholder="659">
                </p>
            </form>
            <p>
                <input class="button is-success m-6" @click="checkForm" type="submit" value="Submit">
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
            name: '',
            email: '',
            adress: '',
            card: 0,
            cvc: 0,
            expression: /\w+@\w+\.+[a-z]/,
            onlyLetter: "^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$",
            pasa: false
        }
    },
    methods: {


        checkForm: function (e) {
            this.submitted = true;
            this.errors = [];

            if (!this.name) {
                this.errors.push('Name is required.');
            }
            if (this.name.match(this.onlyLetter) == null) {
                this.errors.push('Name cannot be a number');
            }
            if (this.name.length < 3) {
                this.errors.push('The name must have at least three letters');
            }


            if (!this.adress) {
                this.errors.push('An address is required');
            }

            if (this.adress.length < 3) {
                this.errors.push('The address must have at least three letters');
            }
            if (!this.email) {
                this.errors.push('An email address is required');
            }
            if (this.email.match(this.expression) == null) {
                this.errors.push('The email must have the correct format "user@user.com"');
            }
            if (!this.card) {
                this.errors.push('A card number is needed');
            }
            if (this.card.length < 16 || this.card.length > 16) {
                this.errors.push('the card number must have 16 numbers');
            }
            if (this.cvc.length < 3 || this.cvc.length > 3) {
                this.errors.push('The cvv must have 3 numbers');
            } if (!this.cvc) {
                this.errors.push('enter a cvv number');
            }
            if (this.submitted = true && this.errors.length == 0) {
                this.$router.push('farewellPage')
            }
        }

    }
}
</script>