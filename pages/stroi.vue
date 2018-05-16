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
        <div @click="showSubpage4">
          <span class="link">-</span>
          <span class="desc">{{subpages[4].name}}</span>
        </div>
      </div>
      <brus v-show="subpages[0].visible"/>
      <gaz v-show="subpages[1].visible"/>
      <fund v-show="subpages[2].visible"/>
      <ograda v-show="subpages[3].visible"/>
      <loc v-show="subpages[4].visible"/>
    </div>
  </section>
</template>

<script>
import brus from '~/components/stroi/brus.vue';
import gaz from '~/components/stroi/gaz.vue';
import fund from '~/components/stroi/fund.vue';
import ograda from '~/components/stroi/ograda.vue';
import loc from '~/components/stroi/loc.vue';

  export default {
    name: 'stroi',
    components: {
      brus, gaz, fund, ograda, loc
    },
    data: function () {
      return{
        page:{
          title: 'Строительство'
        },
        subpages: [
          {
            name: 'Дома из клееного бруса',
            visible: true
          },
          {
            name: 'Дома из газобетона',
            visible: false
          },
          {
            name: 'Фундаменты',
            visible: false
          },
          {
            name: 'Ограждения',
            visible: false
          },
          {
            name: 'Локальные очистные сооружения',
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
      },
      showSubpage4: function () {
        this.subpages[0].visible = false;
        this.subpages[1].visible = false;
        this.subpages[2].visible = false;
        this.subpages[3].visible = false;
        this.subpages[4].visible = true;
      },
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
