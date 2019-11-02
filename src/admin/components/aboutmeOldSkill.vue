<template lang="pug">
    form.skills-form.skills-form--oldskill(@submit.prevent = 'editSkill' )  
            
                p.old-skill {{skill.title}}
                
              
                p.skill-value.skill-value--edited {{skill.percent}}
                .form-yesno-buttons
                  button(type="submit").button.button--edit
                  button(type="button" @click = "deleteSkill").button.button--delete
</template>

<script>
export default {
    props:{skill:{}},
    methods: {deleteSkill(){console.log('ЭбаутмиОлдСкилл'), this.$emit('deleteSkill', this.skill.id)}}
}
</script>