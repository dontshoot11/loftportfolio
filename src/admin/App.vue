<template lang="pug">
.wrapper
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
  maincontent.maincontent
    .container.container--mainconten
      h1.section-name Блок &laquo Обо мне &raquo
        

</template>
<style lang = "postcss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
@import "normalize.css";
@import "./layout/*.pcss";
a{text-decoration: none; color: inherit;}
h1, h2, h3, h4, h5 {font-size: inherit; font-style: inherit; margin: 0; padding: 0}
ul{list-style:none;
margin: 0;
padding: 0}
button{padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
  }



.wrapper{font-family: 'Open Sans', Helvetica, sans-serif;
  font-size: 16px;
  line-height: 1.42;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text-color;
  background: #f8f9fd;}


.container {max-width: 95%; margin: 0 auto}
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

.section-name {font-style: bold; font-size: 36px; padding: 30px 0}




</style>