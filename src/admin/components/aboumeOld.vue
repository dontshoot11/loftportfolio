<template lang="pug">
  .skills-card.section-block 
              form.skills-form.skill-form--name(@submit.prevent = 'editSkillBranchName') 
                p.skill-name {{cat.category}} 
               
                .form-yesno-buttons
                  button(type="submit").button.button--edit
              oldSkill(:skill="skill" v-for = "skill in cat.skills" @deleteSkill = "deleteSkill")
              skill(:id = "cat.id", @newSkill = "newSkill" )

              
            
              
            
                
              
        
                

              





    
</template>

<script>
import skill from "./aboutmeSkill"
import oldSkill from './aboutmeOldSkill'
export default {
  props: {cat:{}},
  methods: {
  newSkill(skill){this.$emit("newSkill", skill), console.log('эбаут ми олд')},

  deleteSkill(skillId){this.$emit('deleteSkill', skillId)}},
  components: {skill, oldSkill}
}
</script>