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
                    <b-navbar-item tag="div">
                        <div class="buttons is-centered">
                            <a class="button is-warning" @click="showLoginPage">
                                <strong> Log in</strong>
                            </a>
                            <a class="button" @click="showRegisterPage">
                                Register
                            </a>
                        </div>
                    </b-navbar-item>
                </template>
            </b-navbar>
            <div class="hero is-dark">スタジオジブリ</div>
        </template>
      
    </div>

</template>
<script>
export default {
    name: 'PanellView',
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
        showStore(){
            this.$router.push('storeView')
        }
    }
}
</script>
<style scoped>
.barra {
    background-color: rgb(16, 156, 235);

}
</style>