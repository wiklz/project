<template>
  <div>
    <section class="menu w-50 mx-auto">
      <ul class="w-100">
        <li>
          <nuxt-link to="/">Главная</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/page2">Галерея</nuxt-link>
        </li>
      </ul>
    </section>
    <nuxt/>
  </div>
</template>

<style lang="scss">
html {
  margin: 0;
  padding: 0;
}
.menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  ul{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 50px;
    border: 1px solid red;
    li{
      margin: auto;
      list-style: none;
    }
  }
}
</style>
