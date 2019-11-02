<template lang="pug">
     section.section--works
          form.section-block.edit-card.edit-card--works(@submit.prevent = 'newWork') 
            h2.edit-card__name Редактирование работы
            .edit-card__download-area
              input.inputfile(type="file" required name="file" id="file") 
              label.inputfile__label(for="file")
                .inputfile__text Перетащите или нажмите для загрузки изображения
                .button.button--submit загрузить
            .edit-card__content
              label.edit-card__label Название
                input( required placeholder = "Сайт для авто салона Porsche").edit-card__input
              label.edit-card__label Ссылка
                input(required placeholder = "www.leningrad.spb.ru").edit-card__input
              label.edit-card__label Описание
                textarea( rows="5" required placeholder="Оооо вот этот сайт Порше всем сайтам Порше сайт Порше").edit-card__textarea
              label.edit-card__label Добавление тега
                input(required placeholder = "HTML,").edit-card__input
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
                button(type = "reset").edit-card__reset Отмена
                button(type = "submit").button.button--submit.button--edit-submit сохранить
          .edited-blocks
            button.button.button--add-card
              .button__pic +
              p.button__name Добавить работу
            .section-block.edited-card
              .edited-card__picture-box
                img(src='https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3332-6334-4365-b062-636534303038__2771278eaax.jpg').edited-card__picture
              .edited-card__description
                .edited-card__name Сайт школы образования
                .edited-card__text Вот это сайт ай да сайт, такой технологичный и красивый. Нет, это не соринка в глаз попала, это я прослезился, когда писал описание этого сайта.
                a(href="#").edited-card__link http://leningrad.spb.ru
                .edited-card__buttons
                  button(type="button").button.button--edit-edited Править
                  button(type="button").button.button--delete-edited Удалить
            .section-block.edited-card
              .edited-card__picture-box
                img(src='https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3332-6334-4365-b062-636534303038__2771278eaax.jpg').edited-card__picture
              .edited-card__description
                .edited-card__name Сайт школы образования
                .edited-card__text Вот это сайт ай да сайт, такой технологичный и красивый. Нет, это не соринка в глаз попала, это я прослезился, когда писал описание этого сайта.
                a(href="#").edited-card__link http://leningrad.spb.ru
                .edited-card__buttons
                  button(type="button").button.button--edit-edited Править
                  button(type="button").button.button--delete-edited Удалить
            .section-block.edited-card
              .edited-card__picture-box
                img(src='https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3332-6334-4365-b062-636534303038__2771278eaax.jpg').edited-card__picture
              .edited-card__description
                .edited-card__name Сайт школы образования
                .edited-card__text Вот это сайт ай да сайт, такой технологичный и красивый. Нет, это не соринка в глаз попала, это я прослезился, когда писал описание этого сайта.
                a(href="#").edited-card__link http://leningrad.spb.ru
                .edited-card__buttons
                  button(type="button").button.button--edit-edited Править
                  button(type="button").button.button--delete-edited Удалить
</template>