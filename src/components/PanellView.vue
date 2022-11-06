<template>
    <div>
        <template>
            <div class="hero  is-dark">スタジオジブリのファンサイト</div>
            <b-navbar class="border  barra">
                <template #brand>
                    <b-navbar-item tag="router-link" class="image" :to="{ path: '/' }">
                        <img class="is-rounded" src="@/assets/imgbin.png" alt="Logo of studio ghibli">
                    </b-navbar-item>
                </template>
                <template #start>
                    <b-navbar-item @click="getFilms()">
                        Films
                    </b-navbar-item>
                    <b-navbar-item @click="showStore">
                        Store
                    </b-navbar-item>
                </template>
                <template #end>            
                    <b-button class="button mt-2" @click="open()">Cart: {{totalAmount }}</b-button>
                    <b-navbar-item tag="div">
                        <div class="buttons is-centered" v-if="condition">
                            <a class="button is-warning" @click="showLoginPage">
                                <strong> Log in</strong>
                            </a>
                            <a class="button" @click="showRegisterPage">
                                Register
                            </a>
                        </div>
                        <div v-if="!condition">
                            <a class="button" style="background-color:rgb(3, 187, 46); color:white;"
                                @click="logOut">Sign out</a>
                        </div>
                    </b-navbar-item>
                </template>
            </b-navbar>
            <div class="hero is-dark">スタジオジブリ</div>
        </template>

    </div>

</template>
<script>
import { mapState } from 'vuex'
import { getAuth, signOut } from "firebase/auth"
export default {
    name: 'PanellView',
  
    computed: {
        ...mapState(['condition', 'cartFinal','totalAmount'])
    },
    methods: {
        showLoginPage() {
            this.$router.push('LoginPage')
        },
        showRegisterPage() {
            this.$router.push('RegisterPage')

        },
        getFilms() {
            this.$router.push('showFilms')
            return this.$store.dispatch('GET_FILMS');
        },
        showStore() {
            this.$router.push('storeView')
        },
        logOut() {
            const auth = getAuth();
            signOut(auth).then(() => {
                // Sign-out successful.
                this.$store.state.condition = true
                alert('Sign out successfully')
            }).catch((error) => {
                // An error happened.
                console.error(error)
            });
        },
        open(){
            this.$router.push('showCart')

        }
        
    }
}

</script>
<style scoped>
.barra {
    background-color: rgb(16, 156, 235);

}
</style>