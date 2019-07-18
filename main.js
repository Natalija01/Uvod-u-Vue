Vue.component('product', {
props:{
    premium:{
        type:Boolean,
        required:true
    },
    detalji:{
        type:String,
        required:true
    }
},
template:`

<div class="product">
            <div class="product-image">
                <img :src="image" alt="" target="_blank">

            </div>
            <div class="product-info">
                <h1>{{title}}</h1>

                <p v-if='inStock'>In stock</p>
                <p v-else :class="{inStockFalse:!inStock}">Out of stock</p>
                <p>{{sale}}</p>
                <p>Shipping: {{shipping}}</p>
                <p>Details: {{opis}}</p>

                <ul>
                    <li v-for="detail in details" :key="detail">{{detail}}</li>
                </ul>

                <div v-for="(variant, index) in variants" :key="variantID" class="color-box"
                    :style="{ backgroundColor: variant.variantColor }" @mouseover="updateProduct(index)">


                </div>

                <button v-on:click="addToCart()" 
                :disabled="!inStock" 
                :class="{disabledButton: !inStock}">Add to
                    cart</button>

                <div class="cart">
                    <p>Cart({{cart}})</p>
                </div>
            </div>
        </div>

`,
data(){
   return  {
        product: 'Socks',
        brand: 'Vue Mastery',
        selectedVariant: 0,
        onSale: true,
        details: ["80 cotton", "20 polyester", "Universal"],
        variants: [
            {
                variantID: 22234,
                variantColor: "green",
                variantImage: "./assets/vmSocks-green-onWhite.jpg",
                variantQuantity: 10,
    
    
            },
            {
                variantID: 22235,
                variantColor: "blue",
                variantImage: "./assets/vmSocks-blue-onWhite.jpg",
                variantQuantity: 0,
    
    
            }
        ],
        cart: 0
    }
},
methods: {
    addToCart: function () {
        /*this. se odnosi na podatak iz data*/
        this.cart += 1
    },

    updateProduct: function (index) {
        this.selectedVariant = index
        console.log(index)
    }
},
computed: {
    title() {
        return this.brand + ' ' + this.product
    },
    image() {
        return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
        return this.variants[this.selectedVariant].variantQuantity
    },
    sale() {
        if (this.onSale) {
            return this.brand + ' ' + this.product + ' is on sale'
        } else {
            return this.brand + ' ' + this.product + ' is not on sale'
        }
    },
    shipping(){
        if(this.premium){
            return "Free"
        }else{
            return 2.00 + '$'
        }
    },
    opis(){
        return this.detalji
    }
}
    })

var app = new Vue({
    el: '#app',
    data:{
        premium:false,
        detalji:"Fluffy socks"
    }
    
})