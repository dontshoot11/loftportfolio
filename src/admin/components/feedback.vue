<template lang="pug">
  section.section--feedback
    editor(v-if = "isEditorOpen" @closeEditor = "closeEditor")
    .edited-blocks
            button.button.button--add-card(@click = "openEditor")
              .button__pic +
              p.button__name Добавить отзыв
            .section-block.edited-card.edited-card--feedback
              .edited-card__speaker-info
                .edited-card__speaker-picture-box
                  img(src='https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3332-6334-4365-b062-636534303038__2771278eaax.jpg').edited-card__speaker-picture
                .edited-card__speaker-textinfo
                  p.edited-card__speaker-name Тони Старк Мл.
                  p.edited-card__speaker-position Железный Человек
              
             
              .edited-card__description.edited-card__description--feedback
              
                .edited-card__text Быть или не быть — вот в чём вопрос. Достойно ли терпеть безропотно позор судьбы, иль нужно оказать сопротивленье?


            
                .edited-card__buttons
                  button(type="button").button.button--edit-edited Править
                  button(type="button").button.button--delete-edited Удалить
</template>

<script>
import editor from "./feedbackEditor";
export default {
  data(){return{isEditorOpen:false}},
  methods:{openEditor(){this.isEditorOpen=true},
  closeEditor(){this.isEditorOpen=false}},
  components:{editor}

}
</script>