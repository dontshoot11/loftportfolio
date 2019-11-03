<template lang="pug">
    
      form.skills-form.skills-form--newskill(@submit.prevent = 'newSkill') 
        input( placeholder="Новый навык" v-model = "skill.title" required).new-skill
        input( type="number" max = "100" placeholder="%" required v-model ="skill.percent").skill-value
        button(type="submit").button.button--big 
</template>

<script>
import {mapState} from 'vuex';
import {mapMutations} from 'vuex';
import axios from 'axios';
const baseUrl ='https://webdev-api.loftschool.com/';
let token = localStorage.getItem("token");
axios.defaults.baseURL = baseUrl;
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;




export default {
    
    props: {id:"", title:""},
    data(){return{

        skill:{
        title: "",
        percent: '',
        category: this.id
        },
    computed:{...mapState({compts: state => state.skills})},
     
       
        





    }},
    methods:{newSkill(){axios.post('/skills', this.skill).then(response => {this.skill = response.data, this.addSkill(this.skill), this.skill = {title: '', percent: ''}})},
     ...mapMutations(['addSkill'])},
    created(){this.skill.category = this.id},

    updated(){this.skill.category = this.id}
}
</script>