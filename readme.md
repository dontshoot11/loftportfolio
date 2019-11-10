Сайт-портфолио. На главной - виджеты на Vue.js, админ-панель - SPA на Vue. Работает с сервером через API (серверная часть не моя).
Реализованы анимации на ванильном JS (эффект параллакса).

Хостится тут 
https://dontshoot11.github.io/loftportfolio/

Админ-панель тут
https://dontshoot11.github.io/loftportfolio/admin

Чтобы скачать себе исходники:
> Перед установкой зависимостей и запуском проекта убедитесь, что у вас установлена [последняя версия Node.js & NPM](https://nodejs.org/en/download/current/), а так же 
[последняя версия Yarn](https://yarnpkg.com/ru/docs/install)

##  Чтобы развернуть проект необходимо:
```sh
$ git clone git@github.com:loftschool/ls-advanced-portfolio.git
$ cd ls-advanced-portfolio
$ yarn
```

## Скрипты package.json:

| Скрипт | Назначение |
| ------ | ------ |
| dev | Запустит webpack-dev-server с _горячей_ заменой модулей |
| build | Соберет проект для **production** (проект готов к загрузке на сервер) |
| reg | Консольная утилита для регистрации. Использовать перед началом работы над **админ-панелью**. |

#### Чтобы запустить скрипт:
```sh
$ npm run имя_скрипта
```

##### Либо:
```sh
$ yarn имя_скрипта
```
