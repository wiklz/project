<template>
  <section class="container-fluid p-0">
    <div class="wrapper">
      <h1 class="title">{{page.title}}</h1>
      <div class="content mt-5">
        <div class="info col-6">
          <p>{{contacts.adress}}</p>
          <p>Тел.: {{contacts.phone}}</p>
          <p>Email: {{contacts.email}}</p>
        </div>
        <div class="form col-6">
          <form>
            <input name="name" type="text" placeholder="Ваше имя*" required>
            <input name="tel" type="tel" placeholder="Телефон для связи*" required>
            <input name="email" placeholder="Ваш email" type="email">
            <input name="text" placeholder="Ваше вопрос" type="text">
            <button>Отправить</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "contacts",
      transition: 'slide',
      data: function () {
        return{
          page: {
            title: 'Контакты'
          },
          contacts: {
            adress: 'Санкт-Петербург Северный проспект д.5 к.3 офис 300',
            phone: '+7 (812) 347-76-08',
            email: 'info@brigadir.ru',
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
      padding-top: 180px;
      .title{
        text-decoration: underline;
      }
      .content{
        width: 100%;
        height: 60vh;
        display: flex;
        flex-direction: row;
        .info{
          height: 50%;
          margin: auto;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }
        .form{
          display: flex;
          flex-direction: column;
          justify-content: center;
          form{
            display: flex;
            flex-direction: column;
            width: 40%;
            margin: auto;
            input{
              margin: 15px auto;
              width: 100%;
              border-radius: 5px;
              border: none;
              padding: 5px 10%;
              background: #ddd;
              color: #333333;
              text-align: center;
              opacity: .8;
            }
            button{
              margin: 15px auto;
              width: 100%;
              border-radius: 5px;
              border: none;
              background-color: #000;
              color: #ffffff;
              padding: 5px 0;
              font-family: 'Roboto Slab', serif;
              font-weight: 700;
              font-size: 20px;
              transition: all .5s ease-in-out;
              &:hover{
                background: #fff;
                color: #333;
              }
            }
          }
        }
      }
    }
  }
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
</style>
