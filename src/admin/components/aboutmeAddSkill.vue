<template lang="pug">
    
      form.skills-form.skills-form--newskill(@submit.prevent = 'newSkill') 
        input( placeholder="Новый навык" v-model = "skill.title" ).new-skill
        input( type="number" max = "100" placeholder="%" v-model ="skill.percent").skill-value
        button(type="submit").button.button--big 
</template>

<script>
export default {
    props: {id:""},
    data(){return{
        skill:{title: "",
        percent: '',
        category: this.id}





    }},
    methods:{newSkill(){this.$emit('newSkill', this.skill, this.skill = {title: '', percent: '', category: this.id})}},
    updated(){ this.skill.category = this.id}
}
</script>