<template lang="pug">
    .container.container--maincontent
        .section-name
          h1.section-name__text Блок &laquo Обо мне &raquo
          button(type='button').button.button--plus Добавить группу
        section.section--skills
            aboutmeAdd(@newGroup = "newGroup",)
            aboutmeOld(@newSkill = "newSkill", @deleteSkill = "deleteSkill", v-for = "cat in categories", :cat = "cat")
          
            
</template>

<script>
import aboutmeAdd from "./aboutmeAdd";
import aboutmeOld from "./aboumeOld";

export default {





    components: {aboutmeAdd, aboutmeOld},
    methods: {
    newGroup(branchName){this.$emit('newGroup', branchName)},
    newSkill(skill){console.log('эбаут ми'), this.$emit('newSkill', skill)},
    deleteSkill(skillId){this.$emit('deleteSkill', skillId)}
    
    
    
    
    },
    props: {categories: {}}
}
</script>