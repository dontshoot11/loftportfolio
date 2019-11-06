<template lang="pug">
    form(:class="{ editing: this.isEditMode}" @submit.prevent = "editSkill").skills-form.skills-form--oldskill
        pre {{newSkill}} Вот этот скилл

            
            
                input(v-model="newSkill.title").old-skill
                
                
              
                
                input.skill-value.skill-value--edited(v-model="newSkill.percent")
                .form-yesno-buttons
                  button(type="button" @click="editModeOn" v-if="!isEditMode").button.button--edit
                  button(type="button" @click = "deleteSkill" v-if="!isEditMode").button.button--delete
                  button(type="submit" v-if="isEditMode").button.button--green 
                  button(type="button" v-if="isEditMode" @click="editModeOff").button.button--cross 
</template>

<script>
import {mapState} from 'vuex';
import {mapMutations} from 'vuex';
import axios from 'axios';
const baseUrl ='https://webdev-api.loftschool.com/';
let token = localStorage.getItem("token");
axios.defaults.baseURL = baseUrl;
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;


export default {
    props:{skill:{}},
    data(){return{
       

        
        isEditMode: false,
        
    }},
    computed:{newSkill: function(){return this.skill}},


    methods: {
        deleteSkill(){axios.delete(`/skills/${this.newSkill.id}`).then(this.removeSkill(this.skill))},
        editModeOn(){this.isEditMode = true},
        editModeOff(){this.isEditMode = false},
        editSkill(){this.isEditMode = false;
        ; axios.post(`/skills/${this.newSkill.id}`, this.newSkill).then(response =>{this.redactSkill(this.newSkill)})},
            ...mapMutations(['removeSkill','redactSkill'])
         
    }
    
    

     
}
</script>

<style lang="postcss" scoped>
.skills-form--oldskill .skill-value--edited,.old-skill  {pointer-events:none; border-bottom: 1px transparent solid}
.editing .skill-value--edited{pointer-events: all; border-bottom: 1px solid #000}
.editing .old-skill {pointer-events: all; border-bottom: 1px solid #000; text-align: center}

</style>