<template lang="pug">
    .container.container--maincontent
        
        .section-name
          h1.section-name__text Блок &laquo Обо мне &raquo
          button(type='button' @click="newGroup").button.button--plus Добавить группу
        section.section--skills
        
            
            aboutmeCard(v-for="cat in compts.categories" :cat = "cat")
          
            
</template>

<script>

import aboutmeCard from "./aboutmeCard";
import {mapState} from 'vuex';
import $axios from "../requests";
import {mapMutations} from 'vuex';


export default {
   





    components: {aboutmeCard},
    computed:{...mapState({compts: state => state.skills})},
    methods: {
    newGroup(){$axios.post(
        "/categories",{title: "Введите название тут"})
            .then(response=>{
                 let category = response.data; category['skills'] = [];
                     this.addCategory(category)})}, //создание новой группы с именем-заглушкой (имя требует API)

   

  

     ...mapMutations(['addCategory']),
    
    
    
    
    
    },
    

}
</script>