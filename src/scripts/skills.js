import Vue from 'vue';
import { endianness } from 'os';


const skill = {
    template: "#skill",
    props: {
        name: {
            type: String,
            default: '',
        },
        percent: {
            type: Number,
            default: 0,
        },
    }



};

new Vue({
    el: '#skills-container--frontend',
    template: '#skills-list',
    components: {
        skill,
    },
    data: {
        section: 'Front-end',
        skills: [
            { name: 'HTML5', value: 80 },
            { name: 'CSS3', value: 75 },
            { name: 'Javascript', value: 15 },
            { name: 'Jqery и Vue.js', value: 30 },
        ]
    }
})

new Vue({
    el: '#skills-container--wf',
    template: '#skills-list',
    components: {
        skill,
    },
    data: {
        section: 'Workflow',
        skills: [
            { name: 'GIT', value: 70 },
            { name: 'Terminal', value: 40 },
            { name: 'Gulp', value: 15 },
            { name: 'Webpack', value: 30 },
        ]
    }
})