const skills = {
    state: { categories: [] },
    actions: {},
    getters: {},
    mutations: {
        getCategories(state, categories) { state.categories = categories },
        addCategory(state, category) { state.categories.unshift(category) },
        removeCat(state, cat) { state.categories = state.categories.filter(category => category !== cat) },
        addSkill(state, skill) { state.categories = state.categories.map(function(a) { if (a.id === skill.category) { a.skills.push(skill) } return a }) },
        removeSkill(state, skill) { state.categories = state.categories.map(function(a) { if (a.id === skill.category) { a.skills = a.skills.filter(function(c) { return c !== skill }) } return a }) }
    }

}





export default skills;