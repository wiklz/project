<template>
  <div>
    <h4 class="subtitle my-3">{{subpage.name}}</h4>
    <div class="content">
      <div class="description col-6">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque autem exercitationem fugiat fugit
          harum, iste nemo officiis optio quod recusandae similique voluptatum! Cum doloribus magnam nostrum obcaecati
          quidem quo sit ut. Aliquam aspernatur corporis doloremque, officia perspiciatis qui quis quod rem totam
          veritatis. Ducimus eligendi error officiis, quis repudiandae saepe tempore? Ab atque dolorem dolores, eos
          excepturi exercitationem explicabo facilis harum laboriosam nobis obcaecati quas quidem quod temporibus
          veritatis. Accusantium aperiam cupiditate deserunt laudantium perspiciatis ratione similique sint sunt?</p>
      </div>
      <div class="image col-6">

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "loc",
    data: function () {
      return{
        subpage: {
          name: 'Локальные очистные сооружения'
        }
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
      background: url("/static/images/ofis.png") no-repeat top;
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
