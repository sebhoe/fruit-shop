import shop from '@/mixins/fruitApi'

// initial state
const state = () => ({
    baseUrl: shop.baseUrl,
    all: [],
    lastViewedProducts: [],
    categories: [],
    category: 'all',
    product: null,
    loading: false,
    error: null
})

// getters
const getters = {}

// actions
const actions = {
    async getProducts({ commit }) {
        const products = await shop.getProducts();
        commit('setProducts', products);
    },
    async getCategories({ commit }) {
        const categories = await shop.getCategories();
        commit('setCategories', categories);
    },
    setCategory({ commit }, category) {
        commit('setCategory', category);
    },
    async getProduct({ commit }, id) {
        const product = await shop.getProduct(id);
        commit('setProduct', product);
        commit('pushToLastViewedProducts', { id, ...product });
    },
    setLastViewedProducts({ commit }, products) {
        commit('setLastViewedProducts', products);
    },
}

// mutations
const mutations = {
    setProducts(state, products) {
        state.all = products
    },
    setCategories(state, categories) {
        state.categories = categories
    },
    setCategory(state, category) {
        state.category = category
    },
    setProduct(state, product) {
        state.product = product
    },
    pushToLastViewedProducts(state, product) {
        state.lastViewedProducts = state.lastViewedProducts.filter(p => p.id != product.id).slice(0, 9);
        state.lastViewedProducts.unshift(product);
        localStorage.setItem('lastViewedProducts', JSON.stringify(state.lastViewedProducts));
    },
    setLastViewedProducts(state, products) {
        state.lastViewedProducts = products
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}