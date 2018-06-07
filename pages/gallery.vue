<template>
  <section class="container-fluid p-0">
    <div class="wrapper">
      <h1 class="title">{{page.title}}</h1>
      <transition name="fadein">
        <div class="content">
            <div class="place" v-for="place in $store.state.places" :class="place.id" :id="place.id" :key="place.id"
                 v-bind:style="'background:#000 url(\'images/' + place.min + '\') no-repeat center;background-size: 100% auto;'">
              <h4>{{place.name}}</h4>
            </div>
        </div>
      </transition>
    </div>

      <galleryCarousel></galleryCarousel>

  </section>
</template>

<script>

  //все данные для картинок хранятся во vuex в store/index.js

  import galleryCarousel from '~/components/modals/gallery-carousel.vue';
  import eventBus from "~/plugins/eventBus";

    export default {
      name: "gallery",
      components: {galleryCarousel},
      transition: 'slide',
      data: function () {
        return{
          page: {
            title: 'Галерея'
          }
        }
      },
      mounted:function () {
        for (let i = 0; i < this.$nuxt.$store.state.places.length; i++) {
          i = i.toString();
          document.getElementById(i).onclick = function () {
            eventBus.$emit('openCarouselitem' + i);
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
    .wrapper {
      color: #ccc;
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      /*justify-content: space-between;*/
      text-align: center;
      padding-top: 180px;
      .title {
        text-decoration: underline;
        font-size: 2.5em;
      }
      .content{
        margin-top: 50px;
        padding: 90px 0 0;
        height: 70vh;
        opacity: 0;/*для анимации*/
        animation: fadein 1s ease-in-out .25s forwards;
        .place{
          margin: 10px;
          width: 15%;
          height: 35%;
          display: inline-block;
          vertical-align: top;
          border-radius: 5px;
          overflow: hidden;
          box-shadow:  rgba(0, 0, 0, .7) 0 0 0 500px inset;
          cursor: pointer;
          transition: all .5s ease-in-out;
          h4{
            font-size: 1.3em;
            height: 100%;
            width: 100%;
            vertical-align: middle;
            display: flex;
            flex-direction: column;
            justify-content: center;
            transition: opacity .5s ease-in-out;
          }
          &:hover{
            box-shadow:  rgba(0, 0, 0, 0) 0 0 0 500px inset;
            background-size: 115% auto !important;
            h4{
              opacity: 0;
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
      .wrapper {
        padding-top: 100px;
        .content{
          margin-top: 0;
          padding: 0;
          .place{
            margin: 5px 10px;
            width: 40%;
            height: 23%;
            h4{
              font-size: 1.2em;
              padding: 0 5px;
            }
            &:hover{
              box-shadow:  none;
              background-size: 100% auto!important;
              h4{
                opacity: 0;
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 321px) and (max-width: 567px){
    .container-fluid {
      font-size: 80%;
      .wrapper {
        padding-top: 100px;
        .content{
          margin-top: 0;
          padding: 50px 0 0;
          .place{
            margin: 5px 10px;
            width: 40%;
            height: 20%;
            h4{
              font-size: 1.2em;
            }
            &:hover{
              box-shadow:  none;
              background-size: 100% auto!important;
              h4{
                opacity: 0;
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
      .wrapper {
        padding-top: 50px;
        .content{
          margin-top: 20px;
          padding: 0 0;
          .place{
            margin: 5px;
            width: 23%;
            height: 35%;
            h4{
              font-size: 1.2em;
            }
            &:hover{
              box-shadow:  none;
              background-size: 100% auto!important;
              h4{
                opacity: 0;
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
      .wrapper {
        padding-top: 15vh;
        .content{
          margin-top: 40px;
          padding: 0 0;
          .place{
            margin: 5px;
            width: 23%;
            height: 35%;

            background-size: auto 100% !important;
            h4{
              font-size: 1.5em;
            }
            &:hover{
              box-shadow:  none;
              background-size: auto 100%!important;
              h4{
                opacity: 0;
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
      .wrapper {
        padding-top: 15vh;
        .content{
          margin: auto;
          padding: 0 0;
          .place{
            margin: 5px;
            width: 23%;
            height: 35%;

            background-size: auto 100% !important;
            h4{
              font-size: 2em;
            }
            &:hover{
              box-shadow:  none;
              background-size: auto 100%!important;
              h4{
                opacity: 0;
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 1025px) and (max-width: 1366px){
    .container-fluid {
      font-size: 100%;
      .wrapper {
        padding-top: 15vh;
        .content{
          margin: auto;
          padding: 0 0;
          .place{
            margin: 20px;
            width: 20%;
            height: 27%;

            background-size: 100% auto !important;
            h4{
              font-size: 1.5em;
            }
            &:hover{
              box-shadow:  none;
              background-size: 100% auto!important;
              h4{
                opacity: 0;
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
  @keyframes fadein {
    0% { opacity: 0 }
    100% { opacity: 1 }
  }
</style>
