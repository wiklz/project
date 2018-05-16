<template>
  <div class="mainPage">
    <section class="menu">
      <nuxt-link to="/" class="mt-2 ml-5 logo"><img src="~/static/logo.svg"></nuxt-link>
      <ul>
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
          <nuxt-link to="#" class="menu-link">Галерея</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contacts" class="menu-link">Контакты</nuxt-link>
        </li>
      </ul>
    </section>
    <nuxt/>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Roboto+Slab:400,700|Roboto:300,400,400i,500,500i,700,700i,900,900i&subset=cyrillic,cyrillic-ext,latin-ext');
  html {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    color: #333;
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
      background: #000000;
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
        }
        ul{
          display: flex;
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
                color: red;
              }
            }
          }
        }
      }
    }
  }

</style>
