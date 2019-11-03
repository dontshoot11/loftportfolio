<template lang="pug">
  .skills-card.section-block 
              form.skills-form.skill-form--name(@submit.prevent = 'editCat' :class="{ editing: this.isEditMode}") 
                
                
                input(v-model="cat.category" required).skill-name
               
                .form-yesno-buttons
              
                  button(type="button" @click="editModeOn" v-if="!isEditMode").button.button--edit
                  
                  button(type="submit" v-if="isEditMode").button.button--green 
                  button(type="button" v-if="isEditMode" @click="editModeOff").button.button--cross 
                  button(type="button" v-if="isEditMode" @click = "deleteCat").button.button--delete
              skill(:skill="skill" v-for = "skill in cat.skills"  @editSkill = "editSkill")
              addSkill(:id = "cat.id",   )

              
            
              
            
                
              
        
                

              





    
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
  computed:{...mapState({compts: state => state.skills})},
  props: {cat:{}},
  methods: {
  
  editSkill(editedSkill){this.$emit('editSkill', editedSkill);this.isEditMode = false},


  deleteCat(){this.isEditMode = false;axios.delete(`categories/${this.cat.id}`).then(this.removeCat(this.cat))},
  editModeOn(){this.isEditMode = true},
  editModeOff(){this.isEditMode = false},
  editCat(){let editedCat ={...this.cat}; editedCat.title = this.cat.category; this.$emit('editCat', editedCat); this.isEditMode = false},
    ...mapMutations(['removeCat'])

  
  
  
  
  
  },
  
  created(){if (this.cat.category === "Введите название тут"){this.isEditMode = true, this.cat.category = " "}},
  components: {skill, addSkill},

  
 
}
</script>

<style lang="postcss" scoped>
.skill-name{pointer-events: none; border-bottom: 1px solid transparent}
.editing .skill-name {pointer-events: all; border-bottom: 1px solid #000; text-align: center}

</style>