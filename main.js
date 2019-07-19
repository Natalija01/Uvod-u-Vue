Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        },
        detalji: {
            type: String,
            required: true
        }
    },
    template: `

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
                

                
            </div>
            <div>
                <h2>Reviews</h2>
                <p v-if="!reviews.length">There is no reviews yet</p>

                <ul>
                    <li v-for="review in reviews">
                    <p>Name: {{review.name}}</p>
                    <p>Rating: {{review.rating}}</p>
                    <p>Review: {{review.review}}</p>
                    </li>
                </ul>

            </div>

            <product-review @review-submited="addReview"></product-review>
        </div>

`,

    data() {
        return {
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
            reviews: []

        }
    },
    methods: {

        addToCart: function () {
            /*this. se odnosi na podatak iz data*/
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantID)
        },
        deleteProduct: function () {
            this.$emit('delete-product', this.variants[this.selectedVariant].variantID)
        },
        updateProduct: function (index) {
            this.selectedVariant = index
            console.log(index)
        },
        addReview: function (productReview) {
            this.reviews.push(productReview)
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
        shipping() {
            if (this.premium) {
                return "Free"
            } else {
                return 2.00 + '$'
            }
        },
        opis() {
            return this.detalji
        }
    }
})

Vue.component('product-review', {
    template: `
    <div>
    <form class="review-form" @submit.prevent="onSubmit">

    <p v-if="errors.length">
    <b>Please correct folowing errors</b>
    <ul>
        <li v-for="error in errors">{{error}}</li>
    </ul>
    </p>

    <p>
    <label for="name">Name:</label>
    <input id="name" v-model="name">
    </p>

    <p>
    <label for="review">Review:</label>
    <textarea id="review" v-model="review"></textarea>
    </p>

    <p>
    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="rating">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
    </select>
    </p>

    <p>
  
    <label>Would you recommended this product?</label>
    
        <input type="radio" name="gender" v-model="question"> Yes
        <input type="radio" name="gender"  v-model="question"> No
   
    </p>

    <p>
        <input type="submit" value="Submit">
    </p>
    </form>
    </div>
    `,

    data() {
        return {
            name: null,
            review: null,
            rating: null,
            question:null,
            errors: []
        }
    },
    methods: {
        onSubmit() {
            if (this.name && this.review && this.rating && this.question) {
                let productReview = {
                    name: this.name,
                    review: this.review,
                    rating: this.rating,
                    question: this.question
                }
                this.$emit('review-submited', productReview)
                    this.name = null,
                    this.review = null,
                    this.rating = null,
                    this.question = null
            } else {
                if (!this.name) this.errors.push("Name required!")
                if (!this.review) this.errors.push("Review required!")
                if (!this.rating) this.errors.push("Rating required!")
                if (!this.question) this.errors.push("Question required!")
            }

        }
    }
})









var app = new Vue({
    el: '#app',
    data: {
        premium: false,
        detalji: "Fluffy socks",
        cart: []
    },
    methods: {
        updateCart(id) {
            /*this. se odnosi na podatak iz data*/
            this.cart.push(id)
        },
        updateCartDelete(id) {
            /*this. se odnosi na podatak iz data*/
            this.cart.pop(id)
        }
    },

})