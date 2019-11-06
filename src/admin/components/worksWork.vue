<template lang="pug">
.workCard
    .section-block.edited-card(v-if="!isEditMode")
            .edited-card__picture-box
                img(:src='picture').edited-card__picture
                tag(v-for="tag in tags" :tag="tag").edited-card__tags
            
            
                
            .edited-card__description
                .edited-card__name {{work.title}}
               
                .edited-card__text {{work.description}}
               
               
                a(:href="work.link" ).edited-card__link {{work.link}}
                
                .edited-card__buttons
                    button(type="button" @click = "editWork" ).button.button--edit-edited Править
                    button(type="button" @click="deleteWork" ).button.button--delete
         

    form.section-block.edit-card.edit-card--works(@submit.prevent = 'confirmChanges' v-if="isEditMode") 
            h2.edit-card__name Редактирование работы
            .edit-card__download-area
              input.inputfile(type="file"  name="file" id="file" @change="processFile") 
              label.inputfile__label(for="file")
                .inputfile__text Перетащите или нажмите для загрузки изображения
                
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
import tag from "./worksTag"
const baseUrl ='https://webdev-api.loftschool.com/';
let token = localStorage.getItem("token");
axios.defaults.baseURL = baseUrl;
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
export default {
  data(){return{isEditMode:false}},
    props: {work:{}},
    components:{tag},

    computed:{
 
    picture: function(){return `https://webdev-api.loftschool.com/${this.work.photo}` },
    tags: function(){let re = /\s*,\s*/;
return this.work.techs.split(re)}},

    methods:{
    deleteWork(){axios.delete(`works/${this.work.id}`).then(this.removeWork(this.work))},
     ...mapMutations(['removeWork']),
     editWork(){this.isEditMode=true},
     closeEditor(){this.isEditMode=false},
     processFile(e){const file = e.target.files[0]},
     confirmChanges(){
       const formData = new FormData(); 
    formData.append('title', this.work.title);
    formData.append('link', this.work.link);
    formData.append('techs', this.work.techs);
    formData.append('description', this.work.description);
    formData.append('photo', this.work.photo);
       
       
       
    axios.post(`/works/${this.work.id}`,formData); this.isEditMode=false}},
   

    

}
</script>












<style lang="postcss" scoped>
.edited-card__picture-box{position: relative}
.edited-card__tags{position: absolute; bottom:0; left: 0; background:grey; border-radius: 20px; padding: 5px; color:#000}
.edit-card__download-area{padding:5px; cursor:pointer; width: 100%}
.inputfile__text{cursor: pointer;}

//.edit-card--works{position:absolute; top:0; left:0; width:100%; height: 100%}
</style>