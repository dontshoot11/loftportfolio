import Vue from "vue"
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import axios from "axios";

const baseUrl = 'https://webdev-api.loftschool.com/';

axios.defaults.baseURL = baseUrl;






const quote = {
    template: "#quote",
    props: ["wisdom"],
    components: { swiperSlide },
    data() { return { url: "https://webdev-api.loftschool.com/" } }
}




new Vue({
    el: '#feedback',

    components: {

        quote,
        swiper


    },
    data: () => ({

        quotes: [],

        swiperOption: {
            slidesPerView: 2,
            spaceBetween: 0,
            navigation: {
                nextEl: '.feedback__button--right',
                prevEl: '.feedback__button--left',
                disabledClass: 'feedback__button--disabled',
            },
            breakpoints: {

                600: {
                    slidesPerView: 1,
                },
            }
        }


    }),

    methods: {
        fetchGroups() { axios.get('/reviews/190').then(response => { this.quotes = response.data }) }
    },









    created() {
        this.fetchGroups()
    }



})