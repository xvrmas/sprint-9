<template>
    <div>
        <template>
            <div class="hero is-dark">スタジオジブリのファンサイト</div>
            <b-navbar class="border barra">
                <template #brand>
                    <b-navbar-item tag="router-link" class="image" :to="{ path: '/' }">
                        <img class="is-rounded" src="@/assets/imgbin.png" alt="Logo of studio ghibli">
                    </b-navbar-item>
                </template>
                <template #start>
                    <b-navbar-item href="#">
                        Home
                    </b-navbar-item>
                    <b-navbar-item @click="getFilms()">
                        Films
                    </b-navbar-item>
                </template>
                <template #end>
                    <b-navbar-item tag="div">
                        <div class="buttons">
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
        <showFilms></showFilms>
    </div>

</template>
<script>
import showFilms from '@/components/showFilms.vue'
export default {
    name: 'PanellView',
    components: { showFilms },
    methods: {
        showLoginPage() {
            this.$router.push('LoginPage')
        },
        showRegisterPage() {
            this.$router.push('RegisterPage')

        },
        getFilms() {
            return this.$store.dispatch('GET_FILMS');
        }
    }
}
</script>
<style scoped>
.barra {
    background-color: rgb(16, 156, 235);
}
</style>