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

import $axios from "../requests";
import {mapState, mapActions} from 'vuex';


export default {
    components: {
        aboutmeCard
        },
    computed:{
        ...mapState({compts: state => state.skills
        }
        )
        },
    methods: {
        
    newGroup(){
        this.addCat()
        },

    ...mapActions(['addCat'])
    
    
    
    
    
    },
    

}
</script>