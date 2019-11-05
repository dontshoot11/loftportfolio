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
import {mapState} from 'vuex';
import {mapMutations} from 'vuex';
import axios from 'axios';
const baseUrl ='https://webdev-api.loftschool.com/';
let token = localStorage.getItem("token");
axios.defaults.baseURL = baseUrl;
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
export default {
  data(){return{
    review: {photo: "",
    author: "",
    occ: "",
    text: "",
    }




  }},
    methods:{
    closeEditor(){this.$emit('closeEditor')},
    processFile(e){const file = e.target.files[0]; this.review.photo = file},
    confirm(){
    const formData = new FormData(); 
    formData.append('photo', this.review.photo);
    formData.append('author', this.review.author);
    formData.append('occ', this.review.occ);
    formData.append('text', this.review.text);
    axios.post('/reviews', formData).then(response=>{this.addReview(response.data);this.closeEditor()})},
    ...mapMutations(['addReview']),
    
    
    
    
    
    
    }
}
</script>