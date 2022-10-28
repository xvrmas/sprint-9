<template>
    <div>
        <template>
            <div class="hero is-dark">スタジオジブリのファンサイト</div>
            <b-navbar class="border is-info">
                <template #brand>
                    <b-navbar-item tag="router-link" class="image" :to="{ path: '/' }">
                        <img class="is-rounded" src="@/assets/imgbin.png" alt="Logo of studio ghibli">
                    </b-navbar-item>
                </template>
                <template #start>
                    <b-navbar-item href="#">
                        Home
                    </b-navbar-item>
                    <b-navbar-item @click="document()">
                        Documentation
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
        <div class="hero is-black">
            <div></div>
        </div>
        <div>
            <img class="image" src="@/assets/Nois-png.png" >
        </div>
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
        document() {
            alert('funciona')
        }
    }
}
</script>