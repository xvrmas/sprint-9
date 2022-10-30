<template>
    <div class="columns is-multiline is-centered is-mobile m-3">
        <div v-for="(item, i) in getCardFilms" :key="i">
            <div class="card m-3">
                <a class="nav-link" @click="showInfo(item)" >
                    <div class="card-image">
                        <figure class="image" style="height:auto;  width:45vh">
                            <img :src="item.image" alt="image film" >
                        </figure>
                    </div>
                    <div class="card-content">
                        <p class="is-size-6">{{ item.title }}</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name: 'showFilms',
    computed: {
        ...mapGetters(['getCardFilms']),
    },
 methods:{
    showInfo(item){
        this.$store.state.infoFilm =(item),
        this.$router.push('showInfoFilm')
    }
 }
}

</script>
<style scoped>
.card:hover {
    transform: translateY(-8px);

}
</style>