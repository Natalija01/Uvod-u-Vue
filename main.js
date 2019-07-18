var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: './assets/vmSocks-green-onWhite.jpg',
        /*inventory:8*/
        inStock: true,
        onSale: true,
        details: ["80 cotton", "20 polyester", "Universal"],
        variants: [
            {
                variantID: 22234,
                variantColor: "green",
                variantImage: "./assets/vmSocks-green-onWhite.jpg"
            },
            {
                variantID: 22235,
                variantColor: "blue",
                variantImage: "./assets/vmSocks-blue-onWhite.jpg"

            }
        ],
        cart: 0
    },
    methods: {
        addToCart: function () {
            /*this. se odnosi na podatak iz data*/
            this.cart += 1
        },
        deleteFromCart: function () {
            this.cart -= 1
        },
        updateProduct: function (variantImage) {
            this.image = variantImage
        }
    }
})