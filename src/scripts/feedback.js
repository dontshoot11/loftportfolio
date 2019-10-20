import Vue from "vue"
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'


console.log('все ок')



const quote = {
    template: "#quote",
    props: ["wisdom"],
    components: { swiperSlide }
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
        addImagePaths(quotes) {
            return quotes.map(el => {
                let photo = require(`../images/content/mentors/${el.photo}`);
                el.photo = photo
                return el
            })
        }
    },









    created() {
        const data = require("../jsons/quotes.json");
        this.quotes = this.addImagePaths(data)
    }



})