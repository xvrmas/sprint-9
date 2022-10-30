<template>
    <div class="container p-5">
        <div class="columns">
            <div class="column is-half ml-4 mt-3">
                <img :src="infoFilm.movie_banner">
            </div>
            <div class="column is-half mt-3">
                <h2><strong>Title:</strong>{{ infoFilm.title }}</h2>
                <h2><strong>Original title:</strong>{{ infoFilm.original_title }}</h2>
                <h2><strong>Original title romanised:</strong>{{ infoFilm.original_title_romanised }}</h2>
                <h2><strong>Director:</strong>{{ infoFilm.director }}</h2>
                <h2><strong>Producer:</strong>{{ infoFilm.producer }}</h2>
                <h2><strong>Realise date:</strong>{{ infoFilm.release_date }}</h2>
                <h2><strong>Duration:</strong>{{ infoFilm.running_time }}min.</h2>
                <h2><strong>Description:</strong>{{ infoFilm.description }}</h2>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
export default {
    name: 'showInfoFilm',
    computed: {
        ...mapGetters(['getCardFilms']),
        ...mapState(['infoFilm'])
    }

}
</script>