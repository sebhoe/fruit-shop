async function http(url, method = 'GET', data) {
    const response = await fetch(url, {
        method,
        data
    });

    return await response.json();
}

export default {
    baseUrl: 'https://api.predic8.de',
    async getProducts() {
        const requestUrl = '/shop/products/?limit=10000';
        let products = [];
        return await http(this.baseUrl + requestUrl)
            .then(
                (response) => {
                    response.products.forEach(
                        async (product) => {
                            if (product.product_url) {
                                let detailedProduct = await http(this.baseUrl + product.product_url);
                                detailedProduct.id = product.product_url.split('/').pop();
                                detailedProduct.product_url = product.product_url;
                                products.push(detailedProduct);
                            }
                        }
                    )
                    return products
                }
            );
    },
    async getCategories() {
        const requestUrl = '/shop/categories/';
        return await http(this.baseUrl + requestUrl)
            .then(
                response =>
                    response.categories
            );
    },
    async getProduct(id) {
        const requestUrl = '/shop/products/' + id;
        return await http(this.baseUrl + requestUrl);
    },
}