<template>
  <section class="container-fluid p-0">
    <div class="wrapper">
      <h1 class="title">{{page.title}}</h1>
    </div>
  </section>
</template>

<script>
    export default {
        name: "contacts",
      data: function () {
        return{
          page: {
            title: 'Контакты'
          }
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
    }
  }
</style>
