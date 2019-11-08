<template lang="pug">
  section.section--feedback
   
    editor(v-if = "isEditorOpen" @closeEditor = "closeEditor")
    .edited-blocks
            button.button.button--add-card(@click = "openEditor" v-if="!isEditorOpen")
              .button__pic +
              p.button__name Добавить отзыв
            review(v-for="review in feedback.feedback" :review="review")
            
</template>

<script>
import editor from "./feedbackEditor";
import review from "./feedbackReview";


import {mapState} from 'vuex';
export default {
  data(){
    return{
      isEditorOpen:false
      }
      },
      
  methods:{
    openEditor(){
      this.isEditorOpen=true
      },

    closeEditor(){
      this.isEditorOpen=false
      }
      },

components:{editor, review},

computed:{
    ...mapState(
      {
        feedback: feedback => feedback.feedback
        }
        )
        },

}
</script>