<template>
    <div class="columns is-multiline is-centered is-mobile m-3">
        <div v-for="(item, i) in getCardFilms" :key="i">
            <div class="card m-3">
                <a>
                    <div class="card-image">
                        <figure class="image" style="height:auto;  width:50vh">
                            <img :src="item.image" alt="">
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
    data() {
        return {

        }
    }
}

</script>