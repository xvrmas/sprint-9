<template>
    <section class="hero">
        <div class="hero-body">
            <div class="columns">
                <div class="column is-half my-5">
                    <a href="#">
                        <img src="@/assets/icons/iconmonstr-facebook-6.svg">
                        <img src="@/assets/icons/iconmonstr-instagram-13.svg">
                        <img src="@/assets/icons/iconmonstr-twitch-3.svg">
                        <img src="@/assets/icons/iconmonstr-twitter-3.svg">
                    </a>
                </div>
                <div class="column is-half adres">
                    <div class="text">
                        <p><strong>Name:</strong> Studio Ghibli fan club</p>
                        <p><strong>Phone:</strong>+81570055777</p>
                        <p><strong>Address:</strong> 1 Chome-1-83 Shimorenjaku</p>
                        <p><strong>City:</strong> Mitaka, Tokyo 181-0013</p>
                        <p><strong>Country:</strong> Japan</p>
                    </div>
                </div>
            </div>
            <div class="column copy">
                <img class="alinear" src="@/assets/icons/iconmonstr-copyright-2.svg"><span> Copyright @xvrmasgarcia </span>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'footView'
}
</script>

<style scoped>
.hero {
    margin-top: 3vh;
    background-color: rgb(229, 229, 229);
    color: white
}

.adres {
    color: rgb(72, 70, 70);
    text-align: start;
    border-left: solid rgb(190, 188, 188) 1px;
}

img {
    margin: 25px;
}

.text {
    margin-left: 100px;
}

.copy {
    color: black;
    padding: 0;
}

.alinear {
    vertical-align: middle;
    margin: 0px;
}

@media only screen and (max-width: 800px) {
    .adres {
        border-left: none;
        text-align: center;
        border-top: solid rgb(190, 188, 188) 1px;
        border-bottom: solid rgb(190, 188, 188) 1px;
    }

    .text {
        margin-left: 0px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
}
</style>