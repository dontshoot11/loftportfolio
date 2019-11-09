<template lang="pug">
     form.section-block.edit-card.edit-card--feedback(@submit.prevent = "confirm")
            h2.edit-card__name Добавить отзыв
            .edit-card__download-area.edit-card__download-area--feedback
              input.inputfile(type="file" required name="file" id="userpic" @change="processFile") 
              label.inputfile__label(for="userpic")
                .userpic-bg
                  .userpic-svg
              
                .button.button--link Добавить фото
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
import {mapState, mapActions} from 'vuex';

import $axios from "../requests";

export default {
  data(){return{
    review: {
      photo: "",
      author: "",
      occ: "",
      text: "",
    }




  }},

  methods:{
    closeEditor(){
      this.$emit(
        'closeEditor'
        )
        },

    processFile(e){
      const file = e.target.files[0];
      this.review.photo = file},

    confirm(){
      this.addReview(this.review);
      this.closeEditor()},
           

    ...mapActions(['addReview']),
    
    
    
    
    
    
    }
}
</script>