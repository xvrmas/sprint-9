<template>
    <div class="mt-6">
        <section class="columns shadow">
            <div class="column p-4 is-quarter m-5">
                <div class="box">
                    <p class="title">
                        Login:
                    </p>
                    <form @submit.prevent="login">
                        <input v-model="usuario" required class="input is-rounded m-2" type="email"
                            placeholder="Enter your email">
                        <input v-model="contrasena" class="input is-rounded m-2" type="Password"
                            placeholder="Enter your password">
                        <button class="button mt-4" required type="submit">Enter</button>
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
import { mapState } from 'vuex'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
    name: 'Login',
    data() {
        return {
            usuario: '',
            contrasena: ''

        }
    },
    computed: {
        ...mapState(['condition'])
    },
    methods: {
        showHome() {
            this.$router.push('PanellView')
        },
        login() {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, this.usuario, this.contrasena)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    // ...
                    this.$store.state.condition = false
                    this.$router.push('showFilms')
                    alert('successfully logged in')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
        },
       
    }

}

</script>
<style>

</style>