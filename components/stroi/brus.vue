<template>
  <div class="brus">
    <h4 class="subtitle my-1 my-xl-3">{{subpage.name}}</h4>
    <div class="content">
      <div class="description col-xl-6">
        <p>Большинство людей, мечтает об экологической чистоте жилья и лучших условиях для жизни. Традиции, идущие из
          глубины веков, вкупе с новейшими технологическими процессами, позволяют сооружать деревянные дома отличного
          качества. </p>
      </div>
      <div class="image col-xl-6" @click="openModal">

      </div>
    </div>
    <modalImage>
      <img class="img" src="~/static/images/1.jpg" alt="">
    </modalImage>
  </div>
</template>

<script>
  import modalImage from '~/components/modals/modal-image.vue';
  import eventBus from "~/plugins/eventBus";

    export default {
      name: "brus",
      components: {modalImage},
      data: function () {
        return{
          subpage: {
            name: 'Дома из клееного бруса'
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
  .brus{
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
        background: url("/static/images/1.jpg") no-repeat center;
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
  }
  .img{
    width: 110%;
    height: auto;
    margin: auto;
  }
  @media (max-width: 567px){
    .content{
      margin-top: 0;
      margin-left: 19%;
      height: 65vh;
      padding-bottom: 0;
      flex-direction: column;
      justify-content: space-around;
      width: 80%;
      .description{
        padding: 0 0 0 20px;
      }
      .image{
        margin: 0 0 0 20px;
        height: 40%;
        width: auto;
        &:hover{
          box-shadow:  rgba(0, 0, 0, .1) 0 0 0 500px inset;
          background-size: 115% 105%;
          &::before{
            opacity: 0;
          }
        }
      }
    }
    .img{
      width: 100%;
      height: auto;
      margin: auto;
    }
  }
  @media (min-width: 568px) and (max-width: 823px){
    .content{
      margin-top: 0;
      margin-left: 14%;
      height: 50vh;
      padding-bottom: 0;
      flex-direction: row;
      justify-content: space-between;
      width: 85%;
      .description{
        display: block;
        padding: 0;
        margin: auto;
      }
      .image{
        width: 70%;
        margin: auto 1%;
        min-height: 180px;
        &:hover{
          box-shadow:  rgba(0, 0, 0, .1) 0 0 0 500px inset;
          background-size: 115% 105%;
          &::before{
            opacity: 0;
          }
        }
      }
    }
    .img{
      width: 100%;
      height: auto;
      margin: auto;
    }
  }
  @media (min-width: 568px) and (max-width: 823px) and (min-height: 415px) and (max-height: 729px){
    .content{
      margin-top: 5%;
      margin-left: 14%;
      height: 50vh;
      padding-bottom: 0;
      flex-direction: row;
      justify-content: space-between;
      width: 85%;
      .description{
        display: block;
        padding: 0;
        margin: auto;
      }
      .image{
        width: 70%;
        margin: auto 1%;
        min-height: 180px;
        &:hover{
          box-shadow:  rgba(0, 0, 0, .1) 0 0 0 500px inset;
          background-size: 115% 105%;
          &::before{
            opacity: 0;
          }
        }
      }
    }
    .img{
      width: 100%;
      height: auto;
      margin: auto;
    }
  }
  @media (min-width: 568px) and (max-width: 823px) and (min-height: 730px){
    .content{
      margin-top: 100px;
      margin-left: 14%;
      height: 50vh;
      padding-bottom: 0;
      flex-direction: column;
      justify-content: space-around;
      width: 85%;
      .description{
        display: block;
        padding: 0;
        margin: auto;
      }
      .image{
        width: 100%;
        margin: auto;
        min-height: 350px;
        &:hover{
          box-shadow:  rgba(0, 0, 0, .1) 0 0 0 500px inset;
          background-size: 115% 105%;
          &::before{
            opacity: 0;
          }
        }
      }
    }
    .img{
      width: 100%;
      height: auto;
      margin: auto;
    }
  }
  @media (min-width: 824px) and (max-width: 1366px){
    .content{
      margin-top: 0;
      margin-left: 19%;
      width: 79%;
      padding: 0;
      .description{
        margin: auto 10px;
        padding: 0;
      }
      .image{
        height: 60%;
        margin: auto;
        background-size: 100% auto;
        box-shadow:  rgba(0, 0, 0, .1) 0 0 0 1000px inset;
      }
    }
  }
</style>
