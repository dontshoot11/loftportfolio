<template lang="pug">
.reviewCard
    .section-block.edited-card.edited-card--feedback(v-if ="!isEditMode")
              .edited-card__speaker-info
                .edited-card__speaker-picture-box
                  img(:src='picture').edited-card__speaker-picture
                .edited-card__speaker-textinfo
                  p.edited-card__speaker-name {{review.author}}
                  p.edited-card__speaker-position {{review.occ}}
              
             
              .edited-card__description.edited-card__description--feedback
              
                .edited-card__text {{review.text}}


            
                .edited-card__buttons
                  button(type="button" @click="editModeOn").button.button--edit-edited Править
                  button(type="button" @click="deleteReview").button.button--delete-edited Удалить

    form.section-block.edit-card.edit-card--feedback(v-if ="isEditMode" @submit.prevent = "confirm")
            h2.edit-card__name Изменить отзыв
            .edit-card__download-area.edit-card__download-area--feedback
                input.inputfile(type="file" name="file" id="userpic" @change="processFile") 
                label.inputfile__label(for="userpic")
                    .userpic-bg
                        .userpic-svg
              
                    .button.button--link Изменить фото
            .edit-card__content
              .edit-card__row
                label.edit-card__label.edit-card__label--feedback Имя автора
                    input( required placeholder = "Мастер Сплинтер" v-model="review.author").edit-card__input.edit-card__input--feedback
                label.edit-card__label.edit-card__label--feedback Титул
                    input(required placeholder = "Учитель боевых искусств" v-model="review.occ").edit-card__input.edit-card__input--feedback
              label.edit-card__label Отзыв
                textarea( rows="5" v-model="review.text" required placeholder="Мы не жалкие букашки, панцирь носим, как рубашки").edit-card__textarea.edit-card__textarea--feedback
            
            .edit-card__buttons
                button(type = "reset" @click = "closeEditor").edit-card__reset Отмена
                button(type = "submit").button.button--submit.button--edit-submit сохранить
</template>
<script>
import {mapState} from 'vuex';
import {mapMutations} from 'vuex';
import $axios from "../requests";
export default {
  data(){return{
    isEditMode: false
    }
    },



  computed:{
 
    picture: function(){
      return `https://webdev-api.loftschool.com/${this.review.photo}` 
      }
      },

  props:{
    review:{},
    },

  methods:{
    deleteReview(){
      $axios.delete(
        `reviews/${this.review.id}`
        ).then(
          this.removeReview(
            this.review
            )
            )
            },

    editModeOn(){
      this.isEditMode=true
      },

    closeEditor(){
      this.isEditMode=false
      },

    processFile(e){
      const file = e.target.files[0]; this.review.photo = file},

    confirm(){
      const formData = new FormData(); 
      formData.append('photo', this.review.photo);
      formData.append('author', this.review.author);
      formData.append('occ', this.review.occ);
      formData.append('text', this.review.text);
      $axios.post(
        `/reviews/${this.review.id}`,formData
        );
      this.isEditMode=false},
      
    ...mapMutations(['removeReview'])}
}
</script>

<style lang="postcss" scoped>
.edit-card--feedback {
    grid-template-columns: 1fr;
    grid-template-areas:
        "name"
        "download"
        "content";
}
</style>