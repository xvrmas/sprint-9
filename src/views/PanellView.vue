<template>
    <div><template>
            <b-navbar class="border">
                <template #brand>
                    <b-navbar-item tag="router-link" class="image" :to="{ path: '/' }">
                        <img class="is-rounded" src="@/assets/logo.jpg" alt="Logo of studio ghibli">
                    </b-navbar-item>
                </template>
                <template #start>
                    <b-navbar-item href="#">
                        Home
                    </b-navbar-item>
                    <b-navbar-item @click="document()">
                        Documentation
                    </b-navbar-item>
                    <b-navbar-dropdown label="Info">
                        <b-navbar-item href="#">
                            About
                        </b-navbar-item>
                        <b-navbar-item>
                            Contact
                        </b-navbar-item>
                    </b-navbar-dropdown>
                </template>
                <template #end>
                    <b-navbar-item tag="div">
                        <div class="buttons">
                            <a class="button is-primary" @click="showRegisterPage">
                                <strong>Sign up</strong>
                            </a>
                            <a class="button is-light" @click="showLoginPage">
                                Log in
                            </a>
                        </div>
                    </b-navbar-item>
                </template>
            </b-navbar>
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
        document(){
            alert('funciona')
        }
    }
}
</script>