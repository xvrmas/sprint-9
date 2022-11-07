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
                            <button class="button"
                                @click="showProduct(item.price, item.text, item.amount, item.id)">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { mapState } from 'vuex';
export default {
    name: 'showStoreProducts',
    data() {
        return {
            cart: [],
            result: [],
            resultat: 0,
            price: 0,
            product: '',
            amount: 1,
            total: 0,
            id: 0,
            totalPay: 0,
            found: false

        }
    },
    computed: {
        ...mapGetters(['getPosts']),
        ...mapState(['cartFinal'])
    },
    methods: {
        showProduct(itemPrice, itemText, itemAmount, itemId) {
            var cartProto = {
                price: itemPrice,
                product: itemText,
                amount: itemAmount,
                id: itemId,
                total: itemPrice,
            }
            this.cart.push(cartProto)
            let result = this.cart.filter(element => element.id == itemId)
            if (result.length > 1) {
                this.found = true
            } else {
                this.found = false
            }
            if (this.found == true) {
                this.$store.state.cartFinal.forEach((element) => {
                    if (element.id === itemId) {
                        element.amount++
                        element.total = element.price * element.amount
                    }
                })

            } else {
                this.$store.state.cartFinal.push(cartProto)
            }
            let suma = this.$store.state.cartFinal.map(element => element.total)
            this.totalPay = suma.reduce((accu, item) => (accu + item))

            let sumaAmount = this.cartFinal.map(element => element.amount)
            this.$store.state.totalAmount = sumaAmount.reduce((accu, item) => (accu + item))
        },


    }
}

</script>