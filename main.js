var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        brand:'Vue Mastery',
        selectedVariant:0,
        onSale: true,
        details: ["80 cotton", "20 polyester", "Universal"],
        variants: [
            {
                variantID: 22234,
                variantColor: "green",
                variantImage: "./assets/vmSocks-green-onWhite.jpg",
                variantQuantity:10,
                
                
            },
            {
                variantID: 22235,
                variantColor: "blue",
                variantImage: "./assets/vmSocks-blue-onWhite.jpg",
                variantQuantity:0,
                
                
            }
        ],
        cart: 0
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
        title(){
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        },
        sale(){
            if(this.onSale){
                return this.brand + ' ' + this.product + ' is on sale'
            }else{
                return  this.brand + ' ' + this.product + ' is not on sale'
            }
        }
    }
})