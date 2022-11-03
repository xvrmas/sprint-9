<template>
    <div>
        <div class="columns is-multiline is-centered is-mobile m-3">
            <div v-for="(item, i) in getPosts" :key="i">
                <div class="card m-3">
                    <div>
                        <div class="card-image">
                            <figure class="image" style="height:50vh;  width:45vh">
                                <img :src="item.img" alt="image film">
                            </figure>
                        </div>
                        <div class="card-content">
                            <p class="is-size-6"> <strong> {{ item.text }}</strong></p>
                            <p class="is-size-6">Price:{{ item.price }} $</p>
                            <button class="button" @click="showProduct(item.price, item.text)">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <pre>{{ $data }}</pre>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name: 'showStoreProducts',
    data() {
        return {
            cartPrice: [],
            cartProduct: [],
            cartFinal:[],
            resultat: 0,
        }
    },
    computed: {
        ...mapGetters(['getPosts'])
    },
    methods: {
        showProduct(item, itemText) {
            this.cartPrice.push(item)
            this.cartProduct.push(item, itemText)
            this.resultat = this.cartPrice.reduce((acu, item) => acu + item)
            
        }
    }
}
</script>