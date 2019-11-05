const feedback = {
    state: { feedback: [] },
    actions: {},
    getters: {},
    mutations: {
        getFeedback(state, feedback) { state.feedback = feedback },
        addReview(state, review) { state.feedback.unshift(review) },
        removeReview(state, review) { state.feedback = state.feedback.filter(function(c) { return c !== review }) }



    }

}





export default feedback;