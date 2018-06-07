<template>
  <div class="mainPage">
    <section class="menu">
      <nuxt-link to="/" class="logo"><img src="~/static/logo.svg"></nuxt-link>
      <ul class="big-menu">
        <li>
          <nuxt-link to="/" class="menu-link">Главная</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/stroi" class="menu-link">Строительство</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/otdelka" class="menu-link">Отделка</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/gallery" class="menu-link">Галерея</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contacts" class="menu-link">Контакты</nuxt-link>
        </li>
      </ul>
      <transition name="fade">
        <ul class="small-menu" v-show="mobileStatus">
          <li @click="changeMobilStatus">
            <nuxt-link to="/" class="menu-link">Главная</nuxt-link>
          </li>
          <li @click="changeMobilStatus">
            <nuxt-link to="/stroi" class="menu-link">Строительство</nuxt-link>
          </li>
          <li @click="changeMobilStatus">
            <nuxt-link to="/otdelka" class="menu-link">Отделка</nuxt-link>
          </li>
          <li @click="changeMobilStatus">
            <nuxt-link to="/gallery" class="menu-link">Галерея</nuxt-link>
          </li>
          <li @click="changeMobilStatus">
            <nuxt-link to="/contacts" class="menu-link">Контакты</nuxt-link>
          </li>
        </ul>
      </transition>
      <svg
        class="menubtn"
        :class="menuState"
        @click="changeMobilStatus"
        id="menu-svg"
        data-name="menu-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 40">
        <defs>
          <style>
            .cls-1{fill:#fff;}
            .cls-2{fill:none;stroke:#fff;stroke-miterlimit:10;stroke-width:2px;}
          </style>
        </defs>
        <title>Menu Button</title>
        <path
          class="cls-1"
          d="M45.53,6.79a2.69,2.69,0,0,1,2.68,2.68V40.53a2.69,2.69,0,0,1-2.68,2.68H4.47a2.69,2.69,0,0,1-2.68-2.68V9.47A2.69,2.69,0,0,1,4.47,6.79H45.53m0-1.79H4.47A4.49,4.49,0,0,0,0,9.47V40.53A4.49,4.49,0,0,0,4.47,45H45.53A4.49,4.49,0,0,0,50,40.53V9.47A4.49,4.49,0,0,0,45.53,5Z"
          transform="translate(0 -5)"/>
        <line class="cls-2" x1="10" y1="20" x2="40" y2="20"/>
        <line class="cls-2" x1="10" y1="30" x2="40" y2="30"/>
        <line class="cls-2" x1="10" y1="10" x2="40" y2="10"/>
      </svg>
    </section>
    <nuxt/>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        mobileStatus: false,
        menuState: 'close'
      }
    },
    methods: {
      changeMobilStatus: function () {
        if(this.mobileStatus === false){
          this.mobileStatus = true;
          this.menuState = 'open';
        }else {
          this.mobileStatus = false;
          this.menuState = 'close';
        }
      }
    }
  }
</script>
<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Roboto+Slab:400,700|Roboto:300,400,400i,500,500i,700,700i,900,900i&subset=cyrillic,cyrillic-ext,latin-ext');
  html {
    margin: 0;
    padding: 0;
    height: 100vh;
    color: #333;
    font-size: 100%;
    h1, h2, h3, h4, h5, h6{
      font-family: 'Roboto Slab', serif;
      font-weight: 700;
    }
    p, span, i{
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      line-height: 30px;
    }
    body{
      padding: 0;
      margin: 0;
      background: #000 url("/static/images/doors.jpeg") repeat-x center;
      background-size: auto 100%;
      box-shadow:  rgba(0, 0, 0, .7) 0 0 0 1000px inset;
      width: 100%;
      height: 100%;
      overflow: hidden;
      .menu {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        text-align: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 60px;
        .logo{
          display: block;
          width: 180px;
          margin: 10px 15px;
        }
        .menubtn{
          display: none;
        }
        .small-menu{
          display: none;
        }
        .big-menu{
          display: flex;
        }
        ul{
          flex-direction: row;
          justify-content: space-between;
          height: 50px;
          width: 50%;
          margin: auto;
          li{
            margin: auto;
            list-style: none;
            .nuxt-link-exact-active{
              border-bottom: 1px solid #fff !important;
            }
            .menu-link{
              font-family: 'Roboto Slab', serif;
              font-size: 1.3em;
              font-weight: 400;
              opacity: .7;
              color: #fff;
              border-bottom: 1px solid transparent;
              text-decoration: none;
              transition: all .5s ease-in-out;

              &:hover{
                opacity: 1;
                border-bottom: 1px solid #fff;
              }
              &-active{
                opacity: 1;
              }
            }
          }
        }
      }
    }
  }
  /*mobiles*/
  @media (max-width: 567px){
  html {
    height:100vh;
    overflow: hidden;
    body{
      height: 100%;
      .menu {
        z-index: 100;
        .logo{
          margin: auto;
        }
        .menubtn{
          position: absolute;
          display: block;
          top: 15px;
          right: 15px;
          z-index: 100;
          width: 40px;
          opacity: .5;
          line, path{
            transition: opacity .5s ease-in-out, transform .7s ease-in-out;
          }
          &.open {
            path{
              opacity: 0;
            }
            line:nth-child(6){
              transform: rotate(35deg) translate3d(8px, -8px, 0);
            }
            line:nth-child(4){
              opacity: 0;
            }
            line:nth-child(5){
              transform: rotate(-35deg) translate3d(-16px, 2px, 0);
            }
          }
        }
        .big-menu{
          display: none;
        }
        .small-menu{
          display: flex;
          position: absolute;
          z-index: 100;
          width: 100%;
          height: 55vh;
          background: rgba(0,0,0,.9);
          flex-direction: column;
          justify-content: space-between;
          padding: 60px 0 0;
          li{
            margin: auto;
            list-style: none;
            .nuxt-link-exact-active{

            }
            .menu-link{

            }
          }
        }
      }
    }
  }
}
  @media (min-width: 568px) and (max-width: 1023px){
    html {
      height:100vh;
      overflow: hidden;
      body{
        height: 100%;
        .menu {
          z-index: 100;
          .logo{
            margin: auto;
          }
          .menubtn{
            position: absolute;
            display: block;
            top: 15px;
            right: 15px;
            z-index: 100;
            width: 40px;
            opacity: .5;
            line, path{
              transition: opacity .5s ease-in-out, transform .7s ease-in-out;
            }
            &.open {
              path{
                opacity: 0;
              }
              line:nth-child(6){
                transform: rotate(35deg) translate3d(8px, -8px, 0);
              }
              line:nth-child(4){
                opacity: 0;
              }
              line:nth-child(5){
                transform: rotate(-35deg) translate3d(-16px, 2px, 0);
              }
            }
          }
          .big-menu{
            display: none;
          }
          .small-menu{
            display: flex;
            position: absolute;
            z-index: 100;
            width: 100%;
            height: 55vh;
            background: rgba(0,0,0,.9);
            flex-direction: column;
            justify-content: space-between;
            padding: 60px 0 0;
            li{
              margin: auto;
              list-style: none;
              .nuxt-link-exact-active{

              }
              .menu-link{

              }
            }
          }
        }
      }
    }
  }
  /*tablets*/
  @media (min-width: 1024px) and (max-width: 1366px){
    html {
      body{
        .menu {
          .big-menu{
            width: 60%;
          }
        }
      }
    }
  }


  /*Menu media*/
  @media (min-height: 700px){
    html {
      body{
        .menu {
          .small-menu{
            height: 350px;
            }
          }
        }
      }
  }
  .fade-enter-active, .fade-leave-active {
    transition: all .7s ease-in-out;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: translateY(-100%);
  }

</style>
