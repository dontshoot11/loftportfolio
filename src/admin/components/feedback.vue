<template lang="pug">
     section.section--feedback





          form.section-block.edit-card.edit-card--feedback(@submit.prevent = "feedbackEdit")
            h2.edit-card__name Добавить отзыв
            .edit-card__download-area.edit-card__download-area--feedback
              input.inputfile(type="file" required name="file" id="userpic") 
              label.inputfile__label(for="userpic")
                .userpic-bg
                  .userpic-svg
              
                .button.button--link Добавить фото
            .edit-card__content
              .edit-card__row
                label.edit-card__label.edit-card__label--feedback Имя автора
                  input( required placeholder = "Мастер Сплинтер").edit-card__input.edit-card__input--feedback
                label.edit-card__label.edit-card__label--feedback Титул
                  input(required placeholder = "Учитель боевых искусств").edit-card__input.edit-card__input--feedback
              label.edit-card__label Отзыв
                textarea( rows="5" required placeholder="Мы не жалкие букашки, панцирь носим, как рубашки").edit-card__textarea.edit-card__textarea--feedback
            
              .edit-card__buttons
                button(type = "reset").edit-card__reset Отмена
                button(type = "submit").button.button--submit.button--edit-submit сохранить

          .edited-blocks
            button.button.button--add-card
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