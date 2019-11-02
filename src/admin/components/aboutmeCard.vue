<template lang="pug">
  .skills-card.section-block 
              form.skills-form.skill-form--name(@submit.prevent = 'editCat' :class="{ editing: this.isEditMode}") 
                
                
                input(v-model="cat.category").skill-name
               
                .form-yesno-buttons
              
                  button(type="button" @click="editModeOn" v-if="!isEditMode").button.button--edit
                  
                  button(type="submit" v-if="isEditMode").button.button--green 
                  button(type="button" v-if="isEditMode" @click="editModeOff").button.button--cross 
                  button(type="button" v-if="isEditMode" @click = "deleteCat").button.button--delete
              skill(:skill="skill" v-for = "skill in cat.skills" @deleteSkill = "deleteSkill" @editSkill = "editSkill")
              addSkill(:id = "cat.id", @newSkill = "newSkill"  )

              
            
              
            
                
              
        
                

              





    
</template>

<script>
import addSkill from "./aboutmeAddSkill"
import skill from './aboutmeSkill'

export default {
  data(){return{
    isEditMode: false,
  }},
  props: {cat:{}},
  methods: {
  newSkill(skill){this.$emit("newSkill", skill), console.log('эбаут ми олд')},
  editSkill(editedSkill){this.$emit('editSkill', editedSkill)},

  deleteSkill(skillId){this.$emit('deleteSkill', skillId)},
  deleteCat(){this.$emit('deleteCat', this.cat.id)},
  editModeOn(){this.isEditMode = true},
  editModeOff(){this.isEditMode = false},
  editCat(){let editedCat ={...this.cat}; editedCat.title = this.cat.category; this.$emit('editCat', editedCat); this.isEditMode = false}
  
  
  
  
  
  },
  updated(){if (this.cat.category === "Введите название тут"){this.isEditMode = true, this.cat.category = " "}},
  created(){if (this.cat.category === "Введите название тут"){this.isEditMode = true, this.cat.category = " "}},
  components: {skill, addSkill}
}
</script>

<style lang="postcss" scoped>
.skill-name{pointer-events: none; border-bottom: 1px solid transparent}
.editing .skill-name {pointer-events: all; border-bottom: 1px solid #000; text-align: center}

</style>