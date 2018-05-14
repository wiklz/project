<template>
  <div>
    <section class="menu">
      <ul>
        <li>
          <nuxt-link to="/" class="menu-link">Главная</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/page2" class="menu-link">Галерея</nuxt-link>
        </li>
      </ul>
    </section>
    <div class="header">
      <h1>Brigadir</h1>
      <h3>Lorem ipsum dolor sit amet.</h3>
      <h6>holy shit</h6>
    </div>
    <nuxt/>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Roboto+Slab:400,700|Roboto:300,400,400i,500,500i,700,700i,900,900i&subset=cyrillic,cyrillic-ext,latin-ext');
html {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  color: #333333;
  h1, h2, h3, h4, h5, h6{
    font-family: 'Roboto Slab', serif;
    font-weight: 700;
  }
  p, span, i{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
}
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
  background-color: rgba(255, 0, 0, .3);
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
      .menu-link{
        font-family: 'Roboto Slab', serif;
        font-weight: 400;
        opacity: .7;
        color: #333333;
        transition: opacity .5s ease-in-out;

        &:hover{
          opacity: 1;
        }
        &-active{
          opacity: 1;
          color: red;
        }
      }
    }
  }
}
.header{
  width: 100%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-bottom: 150px;
  background: rgba(0, 0, 0, .3);
}
</style>
