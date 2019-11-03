const skills = {
    state: { categories: [] },
    actions: {},
    getters: {},
    mutations: {
        getCategories(state, categories) { state.categories = categories },
        addCategory(state, category) { state.categories.unshift(category) },
        removeCat(state, cat) { state.categories = state.categories.filter(category => category !== cat) }
    }

}





export default skills;