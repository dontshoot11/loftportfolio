import Vue from 'vue';
import { endianness } from 'os';



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
        const data = require("../jsons/skills.json");
        this.skills = data
    }




}

new Vue({
    el: '#skills',

    components: {

        branches,

    },

})