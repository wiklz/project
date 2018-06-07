<template>
  <div class="ograda">
    <h4 class="subtitle my-1 my-xl-3">{{subpage.name}}</h4>
    <div class="content">
      <div class="description col-xl-6">
        <p>Различные виды заборов и ограждений для дома позволяют защитить участок от незаконного вторжения и создать
          уютную атмосферу. Существуют различные варианты, позволяющие не только сберечь имущество, но и дополнить
          ландшафтный дизайн.</p>
      </div>
      <div class="image col-xl-6" @click="openModal">

      </div>
    </div>
    <modalImage>
      <img class="img" src="~/static/images/4.jpg" alt="">
    </modalImage>
  </div>
</template>

<script>
  import modalImage from '~/components/modals/modal-image.vue';
  import eventBus from "~/plugins/eventBus";

  export default {
    name: "ograda",
    components: {modalImage},
    data: function () {
      return{
        subpage: {
          name: 'Ограждения'
        }
      }
    },
    methods: {
      openModal: function () {
        eventBus.$emit('openModal');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ograda{
    font-size: 100%;
    .subtitle{
      font-size: 1.6em;
    }
    .content{
      margin-top: 100px;
      margin-left: 19%;
      width: 75%;
      height: 40vh;
      display: flex;
      flex-direction: row;
      justify-content: center;
      .description{
        margin: auto 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;
        padding: 0 10px;
        height: 100%;
        p{
          font-size: 1.2em;
          line-height: 1.8em;
        }
      }
      .image{
        display: flex;
        height: 100%;
        margin: auto 0;
        overflow: hidden;
        background: url("/static/images/4.jpg") no-repeat center;
        background-size: 115% 105%;
        border-radius: 5px;
        cursor: pointer;
        box-shadow:  rgba(0, 0, 0, .1) 0 0 0 500px inset;
        transition: box-shadow .5s ease-in-out, background-size .7s ease-in-out;
        &:hover{
          background-size: 120% 110%;
          box-shadow:  rgba(0, 0, 0, .4) 0 0 0 500px inset;
          &::before{
            opacity: .7;
          }
        }
        &::before{
          height: 150px;
          width: 150px;
          content: '.';
          color: transparent;
          line-height: 0;
          font-size: 0;
          position: relative;
          z-index: 100;
          top: 50%;
          margin: -75px auto 0;
          background: url("/static/more.svg") no-repeat center;
          background-size: 100%;
          opacity: 0;
          transition: all .5s ease-in-out;
        }
      }
    }
    .img{
      width: 110%;
      height: auto;
      margin: auto;
    }
  }
  /*mobiles*/
  @media (max-width: 320px){
    .ograda{
      .content{
        margin-top: 0;
        height: 60vh;
        flex-direction: column;
        margin-left: 23.4%;
        width: 75%;
        .description{
          padding: 0;
          p{
            font-size: 1.1em;
            line-height: 1.5em;
          }
        }
        .image{
          &:hover{
            background-size: 115% 105%;
            box-shadow:  none;
            &::before{
              opacity: 0;
            }
          }
          &::before{
            display: none;
          }
        }
      }
    }
  }
  @media (min-width: 321px) and (max-width: 567px){
    .ograda{
      font-size: 90%;
      .content{
        margin-top: 50px;
        height: 50vh;
        flex-direction: column;
        .description{
          p{
            font-size: 1.2em;
            line-height: 1.6em;
          }
        }
        .image{
          &:hover{
            background-size: 115% 105%;
            box-shadow:  none;
            &::before{
              opacity: 0;
            }
          }
          &::before{
            display: none;
          }
        }
      }
    }
  }
  @media (min-width: 568px) and (max-width: 823px){
    .ograda{
      font-size: 90%;
      .subtitle{
        font-size: 1.8em;
      }
      .content{
        margin-top: 20px;
        margin-left: 15%;
        width: 80%;
        height: 50vh;
        .description{
          margin: auto 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: left;
          padding: 0;
          height: 100%;
          p{
            font-size: 1.2em;
            line-height: 1.8em;
          }
        }
        .image{
          &:hover{
            background-size: 115% 105%;
            box-shadow:  none;
            &::before{
              opacity: 0;
            }
          }
          &::before{
            display: none;
          }
        }
      }
    }
  }

  /*tablets*/
  @media (min-width: 568px) and (max-width: 1024px) and (min-height: 520px){
    .ograda{
      font-size: 100%;
      .subtitle{
        font-size: 1.8em;
      }
      .content{
        margin-top: 5vh;
        margin-left: 12%;
        width: 85%;
        height: 60vh;
        .description{
          padding: 0 10px 0 0;
          p{
            font-size: 1.3em;
            line-height: 1.85em;
          }
        }
        .image{
          display: flex;
          height: 100%;
          max-height: 300px;
          transition: none;
        }
      }
      .img{
        width: 100%;
        height: auto;
        margin: auto;
      }
    }
  }
  @media (min-width: 568px) and (max-width: 1024px) and (min-height: 1365px){
    .ograda{
      font-size: 110%;
      .subtitle{
        font-size: 1.8em;
      }
      .content{
        margin-top: 5vh;
        margin-left: 15%;
        width: 80%;
        height: 65vh;
        flex-direction: column;
        .description{
          padding: 0 10px 0 0;
          p{
            font-size: 1.5em;
            line-height: 2.25em;
          }
        }
        .image{
          display: flex;
          height: 100%;
          max-height: 550px;
          transition: none;
        }
      }
      .img{
        width: 100%;
        height: auto;
        margin: auto;
      }
    }
  }
</style>
