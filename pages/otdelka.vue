<template>
  <section class="container-fluid p-0">
    <div class="wrapper">
      <h1 class="title">{{page.title}}</h1>
      <div class="menu">
        <div @click="showSubpage0">
          <span class="link">-</span>
          <span class="desc">{{subpages[0].name}}</span>
        </div>
        <div @click="showSubpage1">
          <span class="link">-</span>
          <span class="desc">{{subpages[1].name}}</span>
        </div>
        <div @click="showSubpage2">
          <span class="link">-</span>
          <span class="desc">{{subpages[2].name}}</span>
        </div>
        <div @click="showSubpage3">
          <span class="link">-</span>
          <span class="desc">{{subpages[3].name}}</span>
        </div>
      </div>
      <flat v-show="subpages[0].visible"/>
      <office v-show="subpages[1].visible"/>
      <tk v-show="subpages[2].visible"/>
      <commerce v-show="subpages[3].visible"/>
    </div>
  </section>
</template>

<script>
  import flat from '~/components/otdelka/flat.vue';
  import office from '~/components/otdelka/office.vue';
  import tk from '~/components/otdelka/tk.vue';
  import commerce from '~/components/otdelka/commerce.vue';

  export default {
    name: 'otdelka',
    components: {
      flat, office, tk, commerce
    },
    data: function () {
      return{
        page:{
          title: 'Отделка'
        },
        subpages: [
          {
            name: 'Квартиры',
            visible: true
          },
          {
            name: 'Офисы',
            visible: false
          },
          {
            name: 'Торговые комплексы',
            visible: false
          },
          {
            name: 'Коммерческие помещения',
            visible: false
          },

        ]
      }
    },
    methods: {
      showSubpage0: function () {
        this.subpages[0].visible = true;
        this.subpages[1].visible = false;
        this.subpages[2].visible = false;
        this.subpages[3].visible = false;
        this.subpages[4].visible = false;
      },
      showSubpage1: function () {
        this.subpages[0].visible = false;
        this.subpages[1].visible = true;
        this.subpages[2].visible = false;
        this.subpages[3].visible = false;
        this.subpages[4].visible = false;
      },
      showSubpage2: function () {
        this.subpages[0].visible = false;
        this.subpages[1].visible = false;
        this.subpages[2].visible = true;
        this.subpages[3].visible = false;
        this.subpages[4].visible = false;
      },
      showSubpage3: function () {
        this.subpages[0].visible = false;
        this.subpages[1].visible = false;
        this.subpages[2].visible = false;
        this.subpages[3].visible = true;
        this.subpages[4].visible = false;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container-fluid {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    .wrapper{
      color: #ccc;
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      /*justify-content: space-between;*/
      text-align: center;
      background: #000 url("/static/images/doors.jpeg") repeat-x center;
      background-size: auto 100%;
      box-shadow:  rgba(0, 0, 0, .7) 0 0 0 500px inset;
      padding-top: 180px;
      .title{
        text-decoration: underline;
      }
      .menu{
        width: 50px;
        height: 50%;
        position: absolute;
        top: 38%;
        left: 5%;
        z-index: 100;
        display: flex;
        flex-direction: column;
        justify-content: center;
        div{
          cursor: pointer;
          width: 30px;
          height: 11px;
          margin: 20px auto;
          /*text-align: left;*/
          display: flex;
          flex-direction: row;
          transition: all .5s ease-in-out;
          &:hover{
            width: 45px;
            & .desc{
              opacity: 1;
            }
            & .link{
              width: 45px;
              opacity: 1;
            }
          }
          .link{
            font-weight: 300;
            font-size: 0;
            width: 30px;
            height: 1px;
            border-bottom: 1px solid #fff;
            vertical-align: middle;
            margin: 4px 0 0;
            opacity: .7;
            transition: all .5s ease-in-out;
          }
          .desc{
            font-size: 12px;
            vertical-align: middle;
            position: absolute;
            white-space: nowrap;
            margin: -10px 70px 0;
            opacity: 0;
            transition: all .5s ease-in-out;
          }
        }
      }
    }
  }


</style>
