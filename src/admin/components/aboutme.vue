<template lang="pug">
    .container.container--maincontent
        .section-name
          h1.section-name__text Блок &laquo Обо мне &raquo
          button(type='button' @click="newGroup").button.button--plus Добавить группу
        section.section--skills
            
            aboutmeCard(@newSkill = "newSkill" @editCat = "editCat" @deleteSkill = "deleteSkill" @editSkill="editSkill" @deleteCat = "deleteCat" v-for = "cat in categories", :cat = "cat")
          
            
</template>

<script>

import aboutmeCard from "./aboutmeCard";

export default {





    components: { aboutmeCard},
    methods: {
    newGroup(branchName){this.$emit('newGroup', branchName)},
    newSkill(skill){console.log('эбаут ми'), this.$emit('newSkill', skill)},
    deleteSkill(skillId){this.$emit('deleteSkill', skillId)},
    editSkill(editedSkill){this.$emit('editSkill', editedSkill)},
    deleteCat(catId){this.$emit('deleteCat', catId)},
    editCat(editedCat){console.log(editedCat), this.$emit('editCat', editedCat)}
    
    
    
    
    
    },
    props: {categories: {}}
}
</script>