<template lang="pug">
  .skills-card.section-block 
              pre {{cat}} вот эта категория
              form.skills-form.skill-form--name(@submit.prevent = 'editCat' :class="{ editing: this.isEditMode}") 
              
                
                
                input(v-model="currentCat.category" required).skill-name
               
                .form-yesno-buttons
              
                  button(type="button" @click="editModeOn" v-if="!isEditMode").button.button--edit
                  
                  button(type="submit" v-if="isEditMode").button.button--green 
                  button(type="button" v-if="isEditMode" @click="editModeOff").button.button--cross 
                  button(type="button" v-if="isEditMode" @click = "deleteCat").button.button--delete
              skill(:skill="skill" v-for = "skill in currentCat.skills" )
              addSkill(:id = "currentCat.id")

              
            
              
            
                
              
        
                

              





    
</template>

<script>
import addSkill from "./aboutmeAddSkill"
import skill from './aboutmeSkill'
import {mapState} from 'vuex';
import {mapMutations} from 'vuex';
import axios from 'axios';
const baseUrl ='https://webdev-api.loftschool.com/';
let token = localStorage.getItem("token");
axios.defaults.baseURL = baseUrl;
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;


export default {
  data(){return{
  
    
    
    
    isEditMode: false,
    
    
   
   
  }},

   computed:{currentCat: function(){return this.cat}},

  props: {cat:{}},
  methods: {
  



  deleteCat(){this.isEditMode = false;axios.delete(`categories/${this.currentCat.id}`).then(this.removeCat(this.cat))},
  editModeOn(){this.isEditMode = true},
  editModeOff(){this.isEditMode = false},
  editCat(){let editedCat ={...this.currentCat}; editedCat.title = this.currentCat.category; this.isEditMode = false;
  axios.post(`/categories/${editedCat.id}`, editedCat)},
    ...mapMutations(['removeCat'])

  
  
  
  
  
  },
  
  created(){if (this.cat.category === "Введите название тут"){this.isEditMode = true, this.cat.category = " "}},
  updated(){if (this.cat.category === "Введите название тут"){this.isEditMode = true, this.cat.category = " "}},
  components: {skill, addSkill},

  
 
}
</script>

<style lang="postcss" scoped>
.skill-name{pointer-events: none; border-bottom: 1px solid transparent}
.editing .skill-name {pointer-events: all; border-bottom: 1px solid #000; text-align: center}

</style>