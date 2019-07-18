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
                variantColor: "green"
            },
            {
                variantID: 22235,
                variantColor: "blue"
            }
        ],
        sizes:["extra small", "small", "medium", "Large"]
    }
})