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
            adress: 'Санкт-Петербург Северный проспект, д.5, к.3, офис 300',
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
    font-size: 100%;
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
          font-size: 1.1em;
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
              font-size: 1.1em;
            }
            button{
              cursor: pointer;
              margin: 15px auto;
              width: 100%;
              border-radius: 5px;
              border: none;
              background-color: #000;
              color: #ffffff;
              font-family: 'Roboto Slab', serif;
              font-weight: 700;
              font-size: 1.5em;
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
  /*mobiles*/
  @media (max-width: 320px){
    .container-fluid {
      font-size: 70%;
      .wrapper{
        padding-top: 100px;
        .content{
          margin: auto;
          width: 100%;
          height: 70vh;
          display: flex;
          flex-direction: column-reverse;
          .info{
            justify-content: center;
            font-size: 1.4em;
          }
          .form{
            form{
              width: 50%;
              input{
                margin: 5px auto;
                font-size: 1em;
              }
              button{
                margin: 10px auto;
                font-size: 1.6em;
                &:hover{
                  background: #000;
                  color: #fff;
                }
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 321px) and (max-width: 567px){
    .container-fluid {
      font-size: 70%;
      .wrapper{
        padding-top: 100px;
        .content{
          margin: 40px auto 0;
          width: 100%;
          height: 80vh;
          display: flex;
          flex-direction: column-reverse;
          .info{
            justify-content: center;
            font-size: 1.5em;
            height: 45%;
          }
          .form{
            form{
              width: 50%;
              input{
                margin: 8px auto;
                font-size: 1.2em;
              }
              button{
                margin: 15px auto;
                font-size: 2em;
                &:hover{
                  background: #000;
                  color: #fff;
                }
              }
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
        .content{
          margin: auto;
          height: 70vh;
          .info{
            height: 100%;
            margin: auto;
            display: flex;
            flex-direction: column;
            /*justify-content: space-around;*/
            font-size: 1.3em;
          }
          .form{
            display: flex;
            flex-direction: column;
            justify-content: center;
            form{
              display: flex;
              flex-direction: column;
              width: 70%;
              margin: auto;
              input{
                margin: 5px auto;
              }
              button{
                margin: 15px auto;
                font-size: 1.7em;
                &:hover{
                  background: #000;
                  color: #fff;
                }
              }
            }
          }
        }
      }
    }
  }

  /*tablets*/
  @media (min-width: 568px) and (max-width: 1024px) and (min-height: 520px) and (max-height: 1364px){
    .container-fluid {
      font-size: 90%;
      .wrapper{
        padding-top: 15vh;
        .content{
          margin: 5vh auto;
          height: 60vh;
          .info{
            height: 50%;
            margin: auto;
            display: flex;
            flex-direction: column;
            /*justify-content: space-around;*/
            font-size: 1.25em;
          }
          .form{
            display: flex;
            flex-direction: column;
            justify-content: center;
            form{
              display: flex;
              flex-direction: column;
              width: 70%;
              margin: auto;
              input{
                margin: 10px auto;
              }
              button{
                margin: 20px auto;
                font-size: 2em;
                &:hover{
                  background: #000;
                  color: #fff;
                }
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 568px) and (max-width: 1024px) and (min-height: 1365px){
    .container-fluid {
      font-size: 100%;
      .wrapper{
        padding-top: 15vh;
        .content{
          margin: 5vh auto;
          height: 60vh;
          .info{
            height: 50%;
            margin: auto;
            display: flex;
            flex-direction: column;
            /*justify-content: space-around;*/
            p{
              font-size: 1.6em;
              line-height: 2em;
            }
          }
          .form{
            display: flex;
            flex-direction: column;
            justify-content: center;
            form{
              display: flex;
              flex-direction: column;
              width: 80%;
              margin: auto;
              input{
                margin: 15px auto;
                font-size: 1.6em;
              }
              button{
                margin: 25px auto;
                font-size: 2.5em;
                &:hover{
                  background: #000;
                  color: #fff;
                }
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
