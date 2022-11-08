<template>
    <div class="columns">
        <div class="column  mt-5">
            <table class="table">
                <thead>
                    <tr>
                        <th><abbr title="Product"></abbr>Product</th>
                        <th><abbr title="Price"></abbr>Price</th>
                        <th><abbr title="Price"></abbr></th>
                        <th><abbr title="Amount"></abbr>Amount</th>
                        <th><abbr title="Price"></abbr></th>

                        <th><abbr title="total"></abbr>Total</th>
                    </tr>
                </thead>
                <tbody v-for="(item, i) in cartFinal" :key="i">
                    <td>{{ item.product }}<strong></strong></td>
                    <td>{{ item.price }}$</td>
                    <button class="button is-danger" @click="resta(item)">-</button>
                    <td>{{ item.amount }}</td>
                    <button class="button is-danger" @click="suma(item)">+</button>
                    <td>{{ item.total }}$</td>
                </tbody>
            </table>
            <h1><strong>Total:</strong> {{ resultat }}$</h1>
        </div>

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
export default {
    name: 'showStoreProducts',
    data() {
        return {
            cart: [],
            result: [],
            cartFinal: [],
            totalAmount: 0,
            resultat: 0,
            price: 0,
            product: '',
            amount: 1,
            total: 0,
            id: 0,
            found: false

        }
    },
    computed: {
        ...mapGetters(['getPosts']),
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
                this.cartFinal.forEach((element) => {
                    if (element.id === itemId) {
                        element.amount++
                        element.total = element.price * element.amount
                    }
                })

            } else {
                this.cartFinal.push(cartProto)
                localStorage.setItem('cart', JSON.stringify(this.cartFinal));
            }

            this.calculTotal()

        },
        resta(item) {
            item.amount--
            if (item.amount == 0) {

                this.deleteItem(item)
            }
            item.total = item.price * item.amount

            this.calculTotal()
        },
        suma(item) {
            item.amount++
            item.total = item.price * item.amount
            this.calculTotal()

        },
        calculTotal() {
            let suma = this.cartFinal.map(element => element.total);
            this.resultat = suma.reduce((accu, item) => (accu + item), 0)
        },
        deleteItem(item){
            let arr = this.cartFinal.indexOf(item)
            this.cartFinal.splice(arr, 1)
            this.cart.splice(arr, 1)
            this.cartFinal = [...this.cartFinal];

        },

        mounted() {
            if (localStorage.cart) this.cart = localStorage.cart;
        },

    },
    watch: {
        name(newName) {
            localStorage.cart = newName;
        }
    }
}

</script>
<style scoped>

</style>