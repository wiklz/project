<template>
  <section class="container-fluid p-0">
    <div class="wrapper">
      <h1 class="title">{{page.title}}</h1>
      <transition name="fadein">
        <div class="content">
            <div class="place" v-for="place in $store.state.places" :class="place.id" :id="place.id" :key="place.id"
                 v-bind:style="'background: url(\'images/' + place.min + '\') no-repeat center;background-size: 100% auto;'">
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
          background-size: auto 50%;
          box-shadow:  rgba(0, 0, 0, .7) 0 0 0 500px inset;
          cursor: pointer;
          transition: all .5s ease-in-out;
          h4{
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
