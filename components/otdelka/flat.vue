<template>
  <div id="flat">
    <h4 class="subtitle my-1 my-xl-3">{{subpage.name}}</h4>
    <div class="content">
      <div class="description col-xl-6">
        <p>Прежде чем браться за отделку, необходимо определиться, какой ремонт будет выполняться: косметический или
          капитальный. Косметический ремонт подразумевает внутреннее обновление облика квартиры. Это покраска или
          оклейка обоями стен, вариации с потолком, выбор полового покрытия.</p>
      </div>
      <div class="image col-xl-6" @click="openModal">

      </div>
    </div>
    <modalImage>
      <img class="img" src="~/static/images/6.jpg" alt="">
    </modalImage>
  </div>
</template>

<script>
  import modalImage from '~/components/modals/modal-image.vue';
  import eventBus from "~/plugins/eventBus";
  export default {
    name: "flat",
    components: {modalImage},
    data: function () {
      return{
        subpage: {
          name: 'Квартиры'
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
      background: url("/static/images/6.jpg") no-repeat top;
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
        p{
          font-size: 14px;
          line-height: 28px;
        }
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
        p{
          font-size: 13px;
          line-height: 26px;
        }
      }
      .image{
        width: 50%;
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
</style>
