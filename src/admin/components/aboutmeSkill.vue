<template lang="pug">
    form(:class="{ editing: this.isEditMode}" @submit.prevent = "editSkill").skills-form.skills-form--oldskill

            
            
                input(v-model="title").old-skill
                
              
                
                input.skill-value.skill-value--edited(v-model="percent")
                .form-yesno-buttons
                  button(type="button" @click="editModeOn" v-if="!isEditMode").button.button--edit
                  button(type="button" @click = "deleteSkill" v-if="!isEditMode").button.button--delete
                  button(type="submit" v-if="isEditMode").button.button--green 
                  button(type="button" v-if="isEditMode" @click="editModeOff").button.button--cross 
</template>

<script>

export default {
    props:{skill:{}},
    data(){return{
        title: this.skill.title,
        percent: this.skill.percent,
        
        isEditMode: false,
        
    }},
    methods: {
        deleteSkill(){this.$emit('deleteSkill', this.skill.id)},
        editModeOn(){this.isEditMode = true},
        editModeOff(){this.isEditMode = false},
        editSkill(){let editedSkill = {...this.skill}; editedSkill.title = this.title; editedSkill.percent = this.percent; this.isEditMode = false
        ; this.$emit('editSkill', editedSkill)},
         
    },
    
    

     
}
</script>

<style lang="postcss" scoped>
.skills-form--oldskill .skill-value--edited,.old-skill  {pointer-events:none; border-bottom: 1px transparent solid}
.editing .skill-value--edited{pointer-events: all; border-bottom: 1px solid #000}
.editing .old-skill {pointer-events: all; border-bottom: 1px solid #000; text-align: center}

</style>