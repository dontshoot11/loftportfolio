const works = {
    state: { works: [] },

    actions: {
        getWorks(store, works) {
            store.commit("getWorks", works)
        }
    },

    getters: {},
    mutations: {
        getWorks(state, works) {
            state.works = works
        },
        addWork(state, work) { state.works.unshift(work) },
        removeWork(state, work) { state.works = state.works.filter(function(c) { return c !== work }) }


    }

}





export default works;