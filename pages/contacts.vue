<template>
  <section class="container-fluid p-0">
    <div class="wrapper">
      <h1 class="title">{{page.title}}</h1>
      <div class="content mt-xl-5">
        <div class="info col-xl-6">
          <p>{{contacts.adress}}</p>
          <p>Тел.: {{contacts.phone}}</p>
          <p>Email: {{contacts.email}}</p>
        </div>
        <div class="form col-xl-6">
          <form action="https://formspree.io/wiklz@ya.ru" method="post">
            <input name="Name" type="text" placeholder="Ваше имя*" required>
            <input name="Tel" type="tel" placeholder="Телефон для связи*" required>
            <input name="Email" placeholder="Ваш email" type="email">
            <input name="Question" placeholder="Ваше вопрос" type="text">
            <input type="text" name="_gotcha" style="display:none" />
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
              cursor: pointer;
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
  @media (max-width: 567px){
    .container-fluid {
      .wrapper{
        padding-top: 30%;
        .content{
          width: 100%;
          height: 65vh;
          display: flex;
          flex-direction: column-reverse;
          .info{
            height: 40%;
            p{
              font-size: 13px;
              margin: 0 auto;
            }
          }
          .form{
            form{
              width: 60%;
              input{
                margin: 5px auto;
              }
              button{
                margin: 5px auto 0;
                height: 40px;
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 568px) and (max-width: 823px){
    .container-fluid {
      .wrapper{
        padding-top: 50px;
        .content{
          height: 65vh;
          .info{
            height: 80%;
          }
          .form{
            form{
              width: 70%;
              input{
                margin: 5px auto;
                padding: 5px;
                height: 40px;
              }
              button{
                margin: 5px auto -5px;
                height: 40px;
              }
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
</style>
