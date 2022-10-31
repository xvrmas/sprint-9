<template>
    <div class="mt-6">
        <section class="columns shadow">
            <div class="column p-4 is-quarter m-5">
                <div class="box">
                    <p class="title">
                        Login:
                    </p>
                    <form @submit.prevent="login">
                        <input v-model="usuario" class="input is-rounded m-2" type="email"
                            placeholder="Enter your email">
                        <input v-model="contrasena" class="input is-rounded m-2" type="Password"
                            placeholder="Enter your password">
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
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
export default {
    name: 'Login',
    data() {
        return {
            usuario: '',
            contrasena: ''

        }
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
                    alert('Log in')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    // User is signed in, see docs for a list of available properties
                    // https://firebase.google.com/docs/reference/js/firebase.User
                    const uid = user.uid;
                    // ...
                } else {
                    // User is signed out
                    // ...
                }
            });
        },
        info() {
            const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    // User is signed in, see docs for a list of available properties
                    // https://firebase.google.com/docs/reference/js/firebase.User
                    const uid = user.uid;
                    console.log(uid)
                    // ...
                } else {
                    console.log('User is signed out')
                    // User is signed out
                    // ...
                }
            });
        }
    }

}

</script>
<style>

</style>