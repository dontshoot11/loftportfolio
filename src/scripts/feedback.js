import Vue from "vue"
import VueAwesomeSwiper from 'vue-awesome-swiper'


import 'swiper/dist/css/swiper.css'



const quote = {
    template: "#quote",
    props: ["text", "name", "position"]
}




new Vue({
    el: '#feedback',

    components: {

        quote,
        swiper

    },
    data: () => ({

        quotes: []






    }),
    created() {
        const data = require("../jsons/quotes.json");
        this.quotes = data
    }



})