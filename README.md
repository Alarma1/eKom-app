[Демо](https://alarma1.github.io/eKom-app-demo/#/)  
[Ссылка на проект](https://github.com/Alarma1/eKom-app)
# Тестовое задание

Создайте приложение с использованием Vue-CLI. В приложении необходимо использовать библиотеки vue-router и vuex. С помощью vue-router создайте две страницы:

## Страница “Авторизация”

На странице “Авторизация” должны быть:
- Заголовок с текстом “LeadHit”.
- Форма с одним полем и кнопкой. Поле предназначено для ввода “ID сайта”. Текст на кнопке должен быть “Войти”.
При нажатии на кнопку производите следующие действия:
- Проверьте, что длина значения, введенного в поле, равна 24 символам. Если значение не соответствует этому условию, отобразите ошибку с текстом: “ID сайта должен содержать 24 символа”. Ошибка должна скрываться при вводе значения в поле.
- Если значение соответствует условию, выполните HTTP запрос. Запрос можно осуществить стандартными методами или подключив необходимую библиотеку на ваш выбор. Для запроса используйте следующие данные:
  - URL: [https://track-api.leadhit.io/client/test_auth](https://track-api.leadhit.io/client/test_auth)
  - Метод: GET
  - Заголовки:
    - Api-Key: 5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo
    - Leadhit-Site-Id: 5f8475902b0be670555f1bb3 (Значение заголовка Leadhit-Site-Id берется из поля формы.)
- Если получен ответ "message": "ok", сохраните в localStorage ключ ‘leadhit-site-id’ со значением ‘5f8475902b0be670555f1bb3’ и перенаправьте пользователя на страницу “Аналитика”.

## Страница “Аналитика”

На странице “Аналитика” необходимо отобразить:
- Заголовок страницы: “Аналитика”.
- Заголовок графика: “Аналитика по визитам”.
- График визитов.

График должен содержать две оси:
- На оси X должно отображаться время (данные берутся из ключа “date” объектов массива, приведенного ниже).
- На оси Y должны отображаться визиты (данные берутся из ключа “visits” объектов массива, приведенного ниже).  
Пример отображения графика:

![image](https://github.com/Alarma1/eKom-app/assets/102227463/0030fb4c-eb47-4971-99c2-574e23f9416c)

При наведении на точки пересечения осей желательно отображать дату и количество визитов для этой точки. Для отображения графика используйте библиотеку [AmCharts](https://www.amcharts.com/).

При переходе на страницу “Аналитика” по ссылке, отслеживать наличие в localStorage ключа - ‘leadhit-site-id’, и в случае его отсутствия перенаправлять пользователя на страницу “Авторизация”. 

Данные для отображения на графике:
```json
[
  {"date":"2020-07-01","visits":213},
  {"date":"2020-07-02","visits":249},
  {"date":"2020-07-03","visits":179},
  {"date":"2020-07-04","visits":170},
  {"date":"2020-07-05","visits":184},
  {"date":"2020-07-06","visits":202},
  {"date":"2020-07-07","visits":198},
  {"date":"2020-07-08","visits":168},
  {"date":"2020-07-09","visits":176},
  {"date":"2020-07-10","visits":171},
  {"date":"2020-07-11","visits":190},
  {"date":"2020-07-12","visits":154},
  {"date":"2020-07-13","visits":246},
  {"date":"2020-07-14","visits":250},
  {"date":"2020-07-15","visits":227},
  {"date":"2020-07-16","visits":140},
  {"date":"2020-07-17","visits":170},
  {"date":"2020-07-18","visits":125},
  {"date":"2020-07-19","visits":106},
  {"date":"2020-07-20","visits":207},
  {"date":"2020-07-21","visits":222},
  {"date":"2020-07-22","visits":198},
  {"date":"2020-07-23","visits":204},
  {"date":"2020-07-24","visits":213},
  {"date":"2020-07-25","visits":145},
  {"date":"2020-07-26","visits":166},
  {"date":"2020-07-27","visits":163},
  {"date":"2020-07-28","visits":135},
  {"date":"2020-07-29","visits":45}
]
