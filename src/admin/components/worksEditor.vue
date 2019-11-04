<template lang="pug">
    form.section-block.edit-card.edit-card--works(@submit.prevent = 'newWork') 
            h2.edit-card__name Редактирование работы
            .edit-card__download-area
              input.inputfile(type="file"  name="file" id="file" @change="processFile") 
              label.inputfile__label(for="file")
                .inputfile__text Перетащите или нажмите для загрузки изображения
                .button.button--submit загрузить
            .edit-card__content
              label.edit-card__label Название
                input(required placeholder = "Сайт для авто салона Porsche" v-model = "work.title").edit-card__input
              label.edit-card__label Ссылка
                input(required placeholder = "www.leningrad.spb.ru" v-model="work.link").edit-card__input
              label.edit-card__label Описание
                textarea( rows="5" required placeholder="Оооо вот этот сайт Порше всем сайтам Порше сайт Порше" v-model="work.description").edit-card__textarea
              label.edit-card__label Добавление тега
                input(required placeholder = "HTML," v-model = "work.techs").edit-card__input
              ul.edit-card__taglist
                li.edit-card__tag
                  p.edit-card__description HTML
                  button(type="button").button.edit-card__cross 
                li.edit-card__tag
                  p.edit-card__description CSS
                  button(type="button").button.edit-card__cross 
                li.edit-card__tag
                  p.edit-card__description Javascript
                  button(type="button").button.edit-card__cross 
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
    data(){
        return{
        work:{title: "",
        link:"",
        techs: "",
        description:"",
        photo:""}


    }},
    methods:{closeEditor(){this.$emit('closeEditor')},
    newWork(){const formData = new FormData(); 
    formData.append('title', this.work.title);
    formData.append('link', this.work.link);
    formData.append('techs', this.work.techs);
    formData.append('description', this.work.description);
    formData.append('photo', this.work.photo);


    
    
    
    axios.post('/works', formData).then(response => {this.addWork(this.work), this.closeEditor()})},
      ...mapMutations(['addWork']),
    processFile(e){const file = e.target.files[0]; this.work.photo = file}}
}
</script>