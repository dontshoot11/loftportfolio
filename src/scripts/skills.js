import Vue from 'vue';
import { endianness } from 'os';
import axios from "axios";
const baseUrl = 'https://webdev-api.loftschool.com/';

axios.defaults.baseURL = baseUrl;



const skill = {
    template: "#skill",
    props: ["name", "percent"]



};

const branch = {

    template: '#skills-list',
    components: {
        skill,
    },
    props: [
        "branch"
    ],




}

const branches = {
    template: "#branches",
    components: { branch },
    data: () => ({

        skills: []





    }),
    created() {
        this.fetchGroups()
    },
    methods: { fetchGroups() { axios.get('/categories/190').then(response => { this.skills = response.data }) } }




}

new Vue({
    el: '#skills',

    components: {

        branches,

    },

})