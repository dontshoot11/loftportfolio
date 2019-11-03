<template lang="pug">
.wrapper
  .wrapper__filter
    header.header
      .container.container--header
        .userpic
          .userpic__userphoto
            img(src="../images/content/me.jpg" class='userjpg' alt="мое лицо")
          .userpic__username Никитин Артём
        .location Панель администрирования
        a(href="#").exit Выйти
    nav.navigation
      .container.container--navigation
        ul.navigation__list
          li.navigation__item.navigation__item--active
            a(href="#").navigation__link Обо мне
          li.navigation__item
            a(href="#").navigation__link  Работы
          li.navigation__item
            a(href="#").navigation__link Отзывы
    main.maincontent
      aboutme(@newGroup = "newGroup" :categories = "categories" @editCat = "editCat" @newSkill="newSkill" @deleteSkill = "deleteSkill" @editSkill  ="editSkill" @deleteCat="deleteCat")
      works
      feedback
      
       
       
  .popup
    .container.container--popup
      form.form-login(@submit.prevent="login")
        h2.form-login__headline Авторизация
        label.form-login__label.form-login__label--login {{loginError.user}}
          input(required v-model = "user.name").form-login__input
        label.form-login__label.form-login__label--password {{loginError.pass}}
          input(required v-model = "user.password" type = "password").form-login__input
        button(type= "submit").button.button-login-submit Отправить
        button(type = "button").button.button-login-exit 

       




        
          
      
        
    
        

</template>




<script> 
import { Validator } from 'simple-vue-validator';
import axios from 'axios';
import aboutme from './components/aboutme';
import works from './components/works';
import feedback from './components/feedback';
const baseUrl ='https://webdev-api.loftschool.com/';
let token = localStorage.getItem("token");
axios.defaults.baseURL = baseUrl;
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;



export default {
  data: function () {
      return {
        
        branchName: '',
        newSkillName:'',
        percent:'',
        user: {},
        loginError: {user: "Имя пользователя", pass: "Введите пароль"},
        categories: [],


      };
    },
  components: {aboutme, works, feedback},
 
  methods: {
  newGroup(){axios.post("/categories",{title: "Введите название тут"}).then(response=>{this.categories.unshift(response.data), console.log(response.data)})},
  newSkill(skill){axios.post('/skills', skill).then(response=>{})},

  deleteSkill(skillId){axios.delete(`/skills/${skillId}`).then(response=>{this.fetchGroups()})},
  
  deleteCat(catId){axios.delete(`categories/${catId}`).then(response=>{this.categories = this.categories.filter(category=>category.id !== catId)})},
  editSkill(editedSkill){axios.post(`/skills/${editedSkill.id}`, editedSkill).then(response=>{this.fetchGroups()})},
  editCat(editedCat){axios.post(`/categories/${editedCat.id}`, editedCat).then(response=>{this.fetchGroups()})},

  fetchGroups() {axios.get('/categories/190').then(response=>{this.categories = response.data})},
  login: function(e) {axios.post(baseUrl+'login',this.user).then(response => {let token=response.data.token; localStorage.setItem("token", token); console.log ("токен "+ token)}).catch(error=>{this.loginError.user = error.response.data.error, this.loginError.pass = error.response.data.error}), this.user = {}},
  

 
  
 
  
  
  
  
  
  
  
  



 },

created(){this.fetchGroups()},


  


}


</script>







<style lang = "postcss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/*.pcss";





.wrapper{font-family: 'Open Sans', Helvetica, sans-serif;
  font-size: 16px;
  line-height: 1.42;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text-color;
  background: url('../images/content/admin/admin-wp.png') no-repeat center;
  background-size: cover;}

  .wrapper__filter {background: rgba(255,255,255, 0.7);}

  .container {@include phones{width:100%}}



.header {background: #44436c; color: #fff; padding: 10px 0px }
.container--header {display: grid; align-items: center;
grid-template-columns: 1.25fr 1.25fr 3fr 1fr;
grid-template-rows: 1fr;
grid-template-areas: 'userpic location . exit'}
.userpic {grid-area: userpic; font-weight: bold; display: flex; align-items: center}
.userpic__userphoto{height: 50px; width: 50px; border-radius: 50%; overflow: hidden; margin-right: 10px; flex-shrink: 0}
.userjpg{max-width: 100%}
.location {grid-area: location; color: rgba(255, 255, 255, 0.5)}
.exit {grid-area: exit; color: rgba(255, 255, 255, 0.5); text-align: right; font-size: 12px}


.navigation {background: #fff;}
.navigation__list {display: flex; list-style: none;  color:#60697c; padding: 0}
.navigation__item {border-bottom: 2px solid transparent; padding: 15px;
}
.navigation__item--active {border-bottom: 2px solid #383ace; color: #383ace}
.section-name {display: flex;}
@include phones {
  .section-name{flex-direction: column;
    margin-bottom: 20px;
    align-items: flex-start;}}

.section-name__text {font-style: bold; font-size: 36px; padding: 30px 0; margin-right: 30px;
@include phones {padding: 15px 0; margin-right: 0;}}

.button--plus {
position: relative; 

margin-left: 25px;
margin-bottom: -11px;
&:before{position: absolute;
content: " ";
left: -25px;
height: 20px; width: 20px;
background: url('../images/content/admin/button_plus.png') no-repeat center;
background-size: contain}
}

.button--big {
  height: 35px; width: 35px;
background: url('../images/content/admin/button_plus.png') no-repeat center;
background-size: contain;
margin-left: 15px;
}

.button--green {
  height: 20px; width: 20px; margin-right: 10px; background: svg-load('tick.svg', fill = #02d70c, width = 100%, height = 100% ) no-repeat center;}

.button--cross {height: 20px; width: 20px; background: svg-load('cross.svg', fill = #bf2929, width = 100%, height = 100% ) no-repeat center;}

.button--edit {height: 20px; width: 20px; background: svg-load('pencil.svg', fill = #b4b8c1, width = 100%, height = 100% ) no-repeat center;}
.button--delete {height: 20px; width: 20px; background: svg-load('trash.svg', fill = #b4b8c1, width = 100%, height = 100% ) no-repeat center; margin-left: 10px;}

.section--skills {display: grid; grid-template-rows: 1fr;
grid-template-columns: 1fr 1fr;
@include phones {grid-template-columns: 1fr} }



.button--submit {background: linear-gradient( 0deg, rgb(0,106,237) 0%, rgb(32,80,220) 48%, rgb(63,53,203) 100%); color:#fff; padding: 20px; border-radius: 35px;  text-transform: uppercase; margin: 0 auto; cursor: pointer;}

.section-block {background: #fff;
padding: 25px; 
margin: 10px;
box-shadow:0 5px 10px rgba(0, 0, 0, 0.5);

@include phones {margin: 10px 0px; padding: 10px}}

.skills-card {


display: grid;
grid-template-columns: 1fr;
grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
grid-template-areas: "name"
"old1"
"old2"
"old3"
"new"
}
.skills-form {padding: 15px 0; border-bottom: 1px solid #dedee0; display: flex; justify-content: space-between; align-items: center}

.skill-form--name {grid-area: name; align-items: center; color: #4e586d; font-size: 18px; font-weight: 700}
.skills-form--newskill   {grid-area: new; justify-content: flex-end}





.skill-name {width: 60%; border-bottom: 1px solid transparent; margin-left: 10px;}
.skill-name--editing {width: 60%; border-bottom: 1px solid #000; margin-left: 10px;}

.form-radio {display: flex;}

.form-radiobutton {margin: 10px}

.new-skill{width: 40%; border-bottom: 1px solid #000; margin-left: 10px;}

.skill-value {width: 20%; border-bottom: 1px solid #000; margin-left: 10px;}

.old-skill {margin-left: 15px; font-size:18px; width: 50%;
}
@include tablets {.old-skill {width:30%}}

.skill-value--edited {border-bottom: 1px solid transparent; font-size: 18px; text-align: center}

.edit-card {display: grid; grid-template-columns: 1fr 1fr;
grid-template-rows: 0.5fr 3fr 3fr; grid-template-areas: "name name"
"download content"
". content";  grid-column-gap: 20px;
@include tablets {grid-template-columns: 1fr; grid-template-areas: "name"
"download"
"content"}}


.edit-card__name {border-bottom: 1px solid #dedee0; padding-bottom: 20px; margin-bottom: 20px; grid-area: name}

.edit-card__download-area {align-self: center; background: #dee4ed; left: 0; border: #a1a1a1 1px dashed; padding: 100px 50px; text-align: center; grid-area: download; width: 70%; justify-self: center;}


.inputfile {visibility: hidden; position: absolute;
	z-index: -1;}
.inputfile__text {margin-bottom: 20px; color: #b9c0cd}

.edit-card__content {grid-area: content; display: flex; flex-direction: column; font-weight: 600}

.edit-card__label {display: flex; flex-direction: column; margin-bottom: 20px;}
.edit-card__input {padding: 10px; border-bottom: 1px solid #414c63; &:focus{border-bottom: 1px solid #414c63}}
.edit-card__textarea {padding: 20px;    margin: 20px 5px;}

.edit-card__taglist {display: flex}
.edit-card__tag {margin-right: 10px; background: #f4f4f4; padding: 5px 15px; border-radius: 30px; display: flex; align-items: center}
.edit-card__cross {height: 10px; width: 10px; background: svg-load('cross.svg', fill = #414c63, width = 100%, height = 100% ) no-repeat center; margin-left: 10px;}

.edit-card__buttons {margin-top: 30px; display: flex; justify-content: flex-end;
@include tablets {justify-content:center}}
.button--edit-submit {margin: 0 0; margin-left: 20px;}
.edit-card__reset {color: #383bcf}

.edited-blocks {display: grid; grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr;
@include tablets {grid-template-columns:1fr 1fr}
@include phones {grid-template-columns: 1fr} }
.button--add-card {    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; margin: 10px; padding: 30px; background: linear-gradient( 0deg, rgb(0,106,237) 0%, rgb(32,80,220) 48%, rgb(63,53,203) 100%); color:#fff; 
    @include phones {margin: 0} }
.button__pic {border-radius: 50%; font-size: 60px; border: 2px solid #fff; width: 60px; margin: 0 auto; height: 60px;     display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    }

.edited-card { padding: 0 0}

.edited-card__picture{max-width: 100%}

.edited-card__description{padding: 25px 15px;}

.edited-card__buttons {width: 100%; display: flex; justify-content: space-between; color: #a0a5b1; margin-top: 20px;}

.button--edit-edited{position:relative; 
&:after{content: ""; 
position: absolute;
margin-left: 5px;
bottom: 3px;

height: 15px;
width: 15px; 
background: svg-load('pencil.svg', fill = #383bcf, width = 100%, height = 100% ) no-repeat center}}

.button--delete-edited{position:relative; margin-right: 20px;
&:after{content: ""; 
position: absolute;
margin-left: 5px;
bottom: 3px;

height: 15px;
width: 15px; 
background: svg-load('cross.svg', fill = #c92e2e, width = 100%, height = 100% ) no-repeat center}}

.edited-card__text {color: #7a8191; margin-top: 20px;}

.edited-card__name {font-weight: 700;}

.edited-card__link {color: #4548d2; margin-top: 20px;}

.edited-card--feedback {padding: 15px;
}

.edited-card__description--feedback {padding: 0}


.edited-card__speaker-info {display: flex; padding-bottom: 15px; border-bottom: 1px solid #b9bdc5; align-items: center; justify-content: center;}

.edited-card__speaker-picture-box {border-radius: 50%; overflow: hidden; height: 100px; width: 100px; display: flex; justify-content: center; align-items: center;}
.edited-card__speaker-picture {max-width: 200%}

.edited-card__speaker-textinfo {margin-left: 20px;}


.edited-card__speaker-name {font-weight: 600}

.edit-card--feedback {
grid-template-columns: 1fr 2fr 0.25fr;
@include tablets {grid-template-columns: 1fr 2fr; grid-template-areas: "name name"
"download content"
". content"};
@include phones {grid-template-columns: 1fr; grid-template-areas: "name"
"download"
"content"}}

.edit-card__download-area--feedback {border: none; background: inherit; padding: 10px; display: flex; justify-content: center; align-items: center;}
.userpic-bg {cursor: pointer; background: #dee4ed; height: 200px; width: 200px; border-radius: 50%; margin: 0 auto; display: flex; justify-content: center; align-items: center}

.userpic-svg {height: 100px; width: 100px; background: svg-load('user.svg', fill = #fff, width = 100%, height = 100% ) no-repeat center;}

.button--link {color: #383bcf; margin-top: 30px; font-weight: 600; cursor: pointer; width: 100%; text-align: center}

.edit-card__row {display: flex; width: 100%; justify-content: space-between;
@include tablets {flex-direction: column}}

.edit-card__label--feedback {width: 48%; @include tablets {width: 100%}}

.edit-card__input--feedback {padding-left: 0}

.edit-card__textarea--feedback {margin-left: 0; margin-right: 0;}


.popup {height: 100vh; width: 100%; background: url('../images/content/admin/admin-wp.png') no-repeat center;
background-size: cover;}



.container--popup {display: flex; justify-content: center; align-items: center; height: 100%;}

.form-login {background: #fff; position: relative; padding: 50px; text-align: center;
@include phones {width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: center; }}

.form-login__label {position: relative; display: flex; flex-direction: column; margin-bottom: 40px; color: #d3d4d9; padding: 5px;padding-left: 40px;  text-align: left; @include phones {margin-bottom: 50px;} 



border-bottom: 1px solid #414d63; 

}

.form-login__input {margin-top: 20px; color:#414d63; font-weight: 700}

.form-login__label--login:before{content:''; position: absolute; height: 30px; width: 30px; 
 background: svg-load('avatar.svg', fill = #d3d4d9, width = 100%, height = 100% ) no-repeat center; bottom: 5px; left: 0}

.form-login__label--password:before{content:''; position: absolute; height: 30px; width: 30px; background: svg-load('key.svg', fill = #d3d4d9, width = 100%, height = 100% ) no-repeat center; bottom: 5px; left: 0}




.button-login-exit {position: absolute; top: 15px; right: 15px; height: 15px; width: 15px; background: svg-load('cross.svg', fill = #454c5f, width = 100%, height = 100% ) no-repeat center;}

.form-login__headline {width: 100%; text-align: center; font-size: 30px; font-weight: 600; margin-bottom: 40px; @include phones {margin-bottom: 50px; } }

.button-login-submit  {
    border-radius: 40px 5px;
    background: linear-gradient( 90deg, rgb(147,0,232) 0%, rgb(111,0,235) 48%, rgb(74,0,237) 100%);
    padding: 25px 20px;
    
    color: #fff;
    
    font-weight:700;
    text-transform: uppercase;
    transition: 0.3s;

    &:hover {background: linear-gradient( 90deg, rgb(147,0,232) 60%, rgb(111,0,235) 100%); transition: 0.3s;}
   
  }










</style>






