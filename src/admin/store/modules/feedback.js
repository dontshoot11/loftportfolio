import {get } from "http"

const feedback = {
    state: { feedback: [] },
    actions: {
        getFeedback(store, feedback) {
            store.commit("getFeedback", feedback)
        }
    },
    getters: {},
    mutations: {
        getFeedback(state, feedback) { state.feedback = feedback },
        addReview(state, review) { state.feedback.unshift(review) },
        removeReview(state, review) { state.feedback = state.feedback.filter(function(c) { return c !== review }) }



    }

}





export default feedback;