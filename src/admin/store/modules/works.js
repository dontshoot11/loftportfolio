const works = {
    state: { works: [] },
    actions: {},
    getters: {},
    mutations: {
        getWorks(state, works) {
            state.works = works, console.log(state.works)
        },
        addWork(state, work) { state.works.unshift(work) },
        removeWork(state, work) { state.works = state.works.filter(function(c) { return c !== work }) }


    }

}





export default works;