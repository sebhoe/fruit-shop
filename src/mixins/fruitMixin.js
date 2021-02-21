import { mapState } from "vuex";

export default {
    computed: {
        ...mapState({
            baseUrl: (state) => state.products.baseUrl,
            products: (state) => state.products.all,
            product: (state) => state.products.product,
            category: (state) => state.products.category
        })
    },
    methods: {
        imagePath(photoUrl) {
            return photoUrl
                ? this.baseUrl + photoUrl
                : require("@/assets/placeholder.jpeg");
        },
        setFallbackImageUrl(event) {
            event.target.src = require("@/assets/placeholder.jpeg");
        },
        formatPrice(price) {
            return new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
            }).format(price);
        }
    }
} 