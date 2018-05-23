<template>
  <div>
    <h4 class="subtitle my-3">{{subpage.name}}</h4>
    <div class="content">
      <div class="description col-6">
        <p>Сферы применения столь удобного и выгодного строительного материала довольно обширны. Одно из основных его
          применений – возведение различных построек. Это и жилые дома, и административные здания, а также, школы,
          больницы и много других.</p>
      </div>
      <div class="image col-6" @click="openModal">

      </div>
    </div>
    <modalImage>
      <img src="~/static/images/2.jpg" alt="">
    </modalImage>
  </div>
</template>

<script>
  import modalImage from '~/components/modals/modal-image.vue';
  import eventBus from "~/plugins/eventBus";

  export default {
    name: "gaz",
    components: {modalImage},
    data: function () {
      return{
        subpage: {
          name: 'Дома из газобетона'
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
  .content{
    margin-top: 100px;
    margin-left: 19%;
    width: 75%;
    height: 60vh;
    padding-bottom: 5%;
    display: flex;
    flex-direction: row;
    .description{
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: left;
      padding: 20px;
      p{
        line-height: 40px;
      }
    }
    .image{
      margin: 10px;
      overflow: hidden;
      background: url("/static/images/2.jpg") no-repeat top;
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
        content: '.';
        color: transparent;
        line-height: 0;
        font-size: 0;
        position: relative;
        z-index: 100;
        top: 50%;
        background: url("/static/more.svg") no-repeat center;
        background-size: 100%;
        padding: 40px;
        opacity: 0;
        transition: all .5s ease-in-out;
      }
    }
  }
</style>
