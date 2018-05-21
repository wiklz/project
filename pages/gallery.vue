<template>
  <section class="container-fluid p-0">
    <div class="wrapper">
      <h1 class="title">{{page.title}}</h1>
      <div class="content">
        <div class="place" v-for="place in $store.state.places" :key="place.id"
        v-bind:style="'background: url(\'images/' + place.images[0] + '\') no-repeat center;background-size: 100% auto;'">
          <h4>{{place.name}}</h4>
          <!--<img :src="'images/' + place.images[0]" :alt="place.images[0]">-->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "gallery",
      transition: 'slide',
      data: function () {
        return{
          page: {
            title: 'Галерея'
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
        /*border: 1px solid red;*/
        height: 70vh;
        .place{
          margin: 10px;
          width: 15%;
          height: 35%;
          display: inline-block;
          vertical-align: top;
          /*border: 1px solid yellow;*/
          border-radius: 5px;
          overflow: hidden;
          background-size: auto 50%;
          box-shadow:  rgba(0, 0, 0, .7) 0 0 0 500px inset;
          cursor: pointer;
          transition: all .7s ease-in-out;
          h4{
            height: 100%;
            width: 100%;
            vertical-align: middle;
            display: flex;
            flex-direction: column;
            justify-content: center;
            transition: opacity .7s ease-in-out;
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
</style>
