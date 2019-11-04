<template lang="pug">
    .container.container--maincontent
        .section-name
          h1.section-name__text Блок &laquo Обо мне &raquo
          button(type='button' @click="newGroup").button.button--plus Добавить группу
        section.section--skills
        
            
            aboutmeCard( v-for = "cat in compts.categories", :cat = "cat" :catName = "cat.category")
          
            
</template>

<script>

import aboutmeCard from "./aboutmeCard";
import {mapState} from 'vuex';
import axios from 'axios';
import {mapMutations} from 'vuex';
const baseUrl ='https://webdev-api.loftschool.com/';
let token = localStorage.getItem("token");
axios.defaults.baseURL = baseUrl;
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export default {





    components: {aboutmeCard},
    computed:{...mapState({compts: state => state.skills})},
    methods: {
    newGroup(){axios.post("/categories",{title: "Введите название тут"}).then(response=>{this.addCategory(response.data)})},

   

  

     ...mapMutations(['addCategory']),
    
    
    
    
    
    },
    

}
</script>