<template>
  <section class="container-fluid p-0">
    <div class="wrapper">
      <h1 class="title">{{page.title}}</h1>
      <div class="menu">
        <div @click="showSubpage0" :class="subpages[0].visible">
          <span class="link">-</span>
          <span class="desc">{{subpages[0].name}}</span>
        </div>
        <div @click="showSubpage1" :class="subpages[1].visible">
          <span class="link">-</span>
          <span class="desc">{{subpages[1].name}}</span>
        </div>
        <div @click="showSubpage2" :class="subpages[2].visible">
          <span class="link">-</span>
          <span class="desc">{{subpages[2].name}}</span>
        </div>
        <div @click="showSubpage3" :class="subpages[3].visible">
          <span class="link">-</span>
          <span class="desc">{{subpages[3].name}}</span>
        </div>
      </div>
      <transition name="slides" mode="out-in">
        <flat v-show="subpages[0].visible"/>
      </transition>
      <transition name="slides" mode="out-in">
        <office v-show="subpages[1].visible"/>
      </transition>
      <transition name="slides" mode="out-in">
        <tk v-show="subpages[2].visible"/>
      </transition>
      <transition name="slides" mode="out-in">
        <commerce v-show="subpages[3].visible"/>
      </transition>
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
      flat, office, tk, commerce,
    },
    transition: 'slide',
    data: function () {
      return{
        page:{
          title: 'Отделка'
        },
        subpages: [
          {
            name: 'Квартиры',
            visible: 'active'
          },
          {
            name: 'Офисы',
            visible: ''
          },
          {
            name: 'Торговые комплексы',
            visible: ''
          },
          {
            name: 'Коммерческие помещения',
            visible: ''
          },

        ]
      }
    },
    methods: {
      showSubpage0: function () {
        this.subpages[0].visible = 'active';
        this.subpages[1].visible = '';
        this.subpages[2].visible = '';
        this.subpages[3].visible = '';
      },
      showSubpage1: function () {
        this.subpages[0].visible = '';
        this.subpages[1].visible = 'active';
        this.subpages[2].visible = '';
        this.subpages[3].visible = '';
      },
      showSubpage2: function () {
        this.subpages[0].visible = '';
        this.subpages[1].visible = '';
        this.subpages[2].visible = 'active';
        this.subpages[3].visible = '';
      },
      showSubpage3: function () {
        this.subpages[0].visible = '';
        this.subpages[1].visible = '';
        this.subpages[2].visible = '';
        this.subpages[3].visible = 'active';
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container-fluid {
    font-size: 100%;
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
      padding-top: 180px;
      .title{
        text-decoration: underline;
        font-size: 2.5em;
      }
      .menu{
        width: 50px;
        height: 500px;
        position: absolute;
        top: 60%;
        margin-top: -250px;
        left: 5%;
        z-index: 1;
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
          animation: submenu-animation .75s linear forwards;
          &:nth-child(2){
            animation: submenu-animation 1s linear forwards;
          }
          &:nth-child(3){
            animation: submenu-animation 1.25s linear forwards;
          }
          &:nth-child(4){
            animation: submenu-animation 1.5s linear forwards;
          }
          &:nth-child(5){
            animation: submenu-animation 1.75s linear forwards;
          }
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
          &.active{
            width: 45px;
            &:first-child .desc{
              opacity: 0;
              animation: desc 1.75s linear forwards;
            }
            & .desc{
              opacity: 1;
              font-size: .9em;
              line-height: 1.35em;
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

  /*mobiles*/
  @media (max-width: 567px){
    .container-fluid {
      font-size: 70%;
      .wrapper{
        padding-top: 100px;
        .menu{
          height: 30vh;
          top: 50%;
          margin-top: -15vh;
          left: 1%;
          div{
            margin: 25px auto;
            .desc{
              white-space: normal;
              margin: 5px 0 0;
            }
          }
        }
      }
    }
  }
  @media (min-width: 568px) and (max-width: 823px){
    .container-fluid {
      font-size: 70%;
      .wrapper{
        padding-top: 50px;
        .menu{
          height: 30vh;
          top: 50%;
          margin-top: -15vh;
          left: 1%;
          div{
            margin: 25px auto;
            .desc{
              white-space: normal;
              margin: 5px 0 0;
            }
          }
        }
      }
    }
  }

  /*tablets*/
  /*tablets*/
  @media (min-width: 568px) and (max-width: 1024px) and (min-height: 520px) and (max-height: 1365px){
    .container-fluid {
      font-size: 90%;
      .wrapper{
        padding-top: 15vh;
        .menu{
          height: 30vh;
          top: 50vh;
          margin-top: -15vh;
          left: 1%;
          div{
            margin: 22px auto;
            &.active{
              & .desc{
                opacity: 1;
                font-size: .8em;
                line-height: 1.2em;
              }
            }
            .desc{
              white-space: normal;
              margin: 5px 10px 0;
            }
          }
        }
      }
    }
  }
  @media (min-width: 568px) and (max-width: 1024px) and (min-height: 1355px){
    .container-fluid {
      font-size: 100%;
      .wrapper{
        padding-top: 15vh;
        .menu{
          width: 70px;
          height: 30vh;
          top: 50%;
          margin-top: -15vh;
          left: 2%;
          div{
            width: 45px;
            margin: 25px auto;
            &:hover{
              width: 70px;
              & .desc{
                display: none;
              }
              & .link{
                width: 70px;
              }
            }
            &.active{
              width: 70px;
              & .desc{
                display: none;
              }
              & .link{
                width: 70px;
              }
            }
            .link{
              width: 45px;
            }
            .desc{
              display: none;
            }
          }
        }
      }
    }
  }
  @media (min-width: 1025px) and (max-width: 1366px){
    .container-fluid {
      .wrapper{
        padding-top: 15vh;
        .menu{
          width: 50px;
          height: 30vh;
          top: 50vh;
          margin-top: -15vh;
          left: 3%;
          div{
            &.active{
              & .desc{
                opacity: 1;
                font-size: 1em;
                line-height: 1.5em;
              }
            }
            .desc{
              width: 160px;
              white-space: normal;
              margin: 10px 0 0;
              opacity: 0;
              transition: all .5s ease-in-out;
            }
          }
        }
      }
    }
  }

  /*ANIMATIONS*/
  .slide-enter-active {
    animation: slide-in .5s;
  }
  .slide-leave-active {
    animation: slide-out .5s;
  }
  @keyframes slide-in {
    0% { transform: translateX(100%) }
    100% { transform: translateX(0) }
  }
  @keyframes slide-out {
    0% { transform: translateX(0) }
    100% { transform: translateX(-100%) }
  }
  .slides-enter-active {
    animation: slides-in 1s;
  }
  .slides-leave-active {
    animation: fades-out .5s;
  }
  @keyframes slides-in {
    0% { transform: translateX(100%); height: 0; }
    50%{transform: translateX(100%); height: 0;}
    100% { transform: translateX(0); }
  }
  @keyframes fades-out {
    0% { opacity: 1; }
    100% { opacity: 0; }
  }
  @keyframes submenu-animation {
    0%{
      opacity: 0;
      transform: translateX(-200px);
    }
    50%{
      opacity: 0;
      transform: translateX(-200px);
    }
    75%{
      opacity: 1;
      transform: translateX(50px);
    }
    100%{
      transform: translateX(0);
    }
  }
  @keyframes desc {
    0%{
      opacity: 0;
    }
    50%{
      opacity: 0;
    }

    100%{
      opacity: 1;
    }
  }
</style>
