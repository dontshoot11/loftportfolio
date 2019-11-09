import Vue from 'vue'
import axios from "axios";

const baseUrl = 'https://webdev-api.loftschool.com/';

axios.defaults.baseURL = baseUrl;

const tag = {
    template: '#tag',
    props: { tag: {} }


}
const work = {
    template: '#work',

    props: {


        job: {},
        index: "",
        iindex: "",

    },
    data() {
        return {
            url: "https://webdev-api.loftschool.com/",

        }
    },

    methods: {
        selectPreview: function() {
            let i = this.index;
            this.$emit('clickemmited', i);

        }
    },
}

new Vue({
    el: '#jobs',

    components: {
        tag,
        work,



    },

    data() {
        return {
            works: [],
            currentIndex: 0,
            url: baseUrl,
            splitter: /\s*,\s*/,
        }
    },
    computed: {
        techArray() { return this.works[this.currentIndex].techs.split(this.splitter) }
    },

    created() {
        this.fetchGroups();



    },





    methods: {
        fetchGroups() { axios.get('/works/190').then(response => { this.works = response.data }) },
        buttonDown: function(e) { if (this.currentIndex < this.works.length - 1) { this.currentIndex++ } },
        buttonUp: function(e) { if (this.currentIndex > 0) { this.currentIndex-- } },


        previewSelect(i) { this.currentIndex = i },




    },






})