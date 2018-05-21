import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    places: [
  {
    id: 1,
    name: 'Балтийская жемчужина',
    type: 'Внутренняя отделка квартиры',
    images: ['21.jpg', 2, 3]
  },
  {
    id: 2,
    name: 'Парголово',
    type: 'Дом',
    images: ['22.jpg', 2, 3]
  },
  {
    id: 3,
    name: 'Невский и Итальянская',
    type: 'Внутренняя отделка квартиры',
    images: ['23.jpg', 2, 3]
  },
  {
    id: 4,
    name: 'Каменный остров',
    type: 'Отделка фасада здания',
    images: ['24.jpg', 2, 3]
  },
  {
    id: 5,
    name: 'Выборгская, д.33 (офис)',
    type: 'Внутренняя отделка офиса',
    images: ['27.jpg', 2, 3]
  },
  {
    id: 6,
    name: 'Выборгская, д.33 (ресторан)',
    type: 'Внутренняя отделка ресторана',
    images: ['28.jpg', 2, 3]
  },
  {
    id: 7,
    name: 'Квартира на Новгородской',
    type: 'Внутренняя отделка квартиры',
    images: ['29.jpg', 2, 3]
  },
  {
    id: 8,
    name: 'Массажный салон',
    type: 'Внутренняя отделка',
    images: ['30.jpg', 2, 3]
  },
]

  },
  mutations: {
    increment (state) {
      state.counter++
    }
  }
})

export default store


