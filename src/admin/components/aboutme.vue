<template lang="pug">
    .container.container--maincontent
        .section-name
          h1.section-name__text Блок &laquo Обо мне &raquo
          button(type='button' @click="newGroup").button.button--plus Добавить группу
        section.section--skills
        pre {{compts}}
            
            aboutmeCard(@newSkill = "newSkill" @editCat = "editCat" @deleteSkill = "deleteSkill" @editSkill="editSkill" @deleteCat = "deleteCat" v-for = "cat in compts.categories", :cat = "cat" :catName = "cat.category")
          
            
</template>

<script>

import aboutmeCard from "./aboutmeCard";
import {mapState} from 'vuex';

export default {





    components: {aboutmeCard},
    computed:{...mapState({compts: state => state.skills})},
    methods: {
    newGroup(branchName){this.$emit('newGroup', branchName)},
    newSkill(skill){this.$emit('newSkill', skill)},
    deleteSkill(skillId){this.$emit('deleteSkill', skillId)},
    editSkill(editedSkill){this.$emit('editSkill', editedSkill)},
    deleteCat(cat){this.$emit('deleteCat', cat)},
    editCat(editedCat){console.log(editedCat), this.$emit('editCat', editedCat)}
    
    
    
    
    
    },
    

}
</script>