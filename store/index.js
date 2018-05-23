import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = () => new Vuex.Store({
//данные для галереи , картинки min для превью на странице должны быть все одного размера (288х207px),
// картинки для слайдеров => images
  state: {
    places: [
  {
    id: 0,
    name: 'Балтийская жемчужина',
    type: 'Внутренняя отделка квартиры',
    images: ['Balt/0.jpg', 'Balt/1.jpg', 'Balt/2.jpg', 'Balt/3.jpg', 'Balt/4.jpg'],
    min: 'Balt/0-01.JPG'
  },
  {
    id: 1,
    name: 'Парголово',
    type: 'Дом',
    images: ['Parg/0.jpg', 'Parg/1.jpg', 'Parg/2.jpg', 'Parg/3.jpg', 'Parg/4.jpg'],
    min: 'Parg/0-01.JPG'
  },
  {
    id: 2,
    name: 'Невский и Итальянская',
    type: 'Внутренняя отделка квартиры',
    images: ['Nev/0.jpg', 'Nev/1.jpg', 'Nev/2.jpg', 'Nev/3.jpg', 'Nev/4.jpg'],
    min: 'Nev/0-01.JPG'
  },
  {
    id: 3,
    name: 'Каменный остров',
    type: 'Отделка фасада здания',
    images: ['Kam/0.jpg', 'Kam/1.jpg', 'Kam/2.jpg', 'Kam/3.jpg', 'Kam/4.jpg'],
    min: 'Kam/0-01.JPG'
  },
  {
    id: 4,
    name: 'Выборгская, д.33 (офис)',
    type: 'Внутренняя отделка офиса',
    images: ['Vofis/0.jpg', 'Vofis/1.jpg', 'Vofis/2.jpg', 'Vofis/3.jpg', 'Vofis/4.jpg'],
    min: 'Vofis/0-01.JPG'
  },
  {
    id: 5,
    name: 'Выборгская, д.33 (ресторан)',
    type: 'Внутренняя отделка ресторана',
    images: ['Vrest/0.jpg', 'Vrest/1.jpg', 'Vrest/2.jpg', 'Vrest/3.jpg', 'Vrest/4.jpg'],
    min: 'Vrest/0-01.JPG'
  },
  {
    id: 6,
    name: 'Квартира на Новгородской',
    type: 'Внутренняя отделка квартиры',
    images: ['Novg/0.jpg', 'Novg/1.jpg', 'Novg/2.jpg', 'Novg/3.jpg'],
    min: 'Novg/0-01.JPG'
  },
  {
    id: 7,
    name: 'Массажный салон',
    type: 'Внутренняя отделка',
    images: ['Mass/0.jpg', 'Mass/1.jpg', 'Mass/2.jpg', 'Mass/3.jpg'],
    min: 'Mass/0-01.JPG'
  },
]

  },
  mutations: {
    increment (state) {
      state.counter++
    }
  }
});

export default store


