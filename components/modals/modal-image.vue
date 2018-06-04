<template>
  <transition name="modal-fade">
  <div class="wrapper" v-show="visible" @click="close()">
    <div class="image-holder">
      <slot></slot>
    </div>
  </div>
  </transition>
</template>

<script>
  import eventBus from "~/plugins/eventBus";

  export default {
    name: "modalImage",
      data(){
        return{
          visible: false
        }
      },
    methods:{
          close: function () {
            eventBus.$emit('closeModal');
          }
    },
      created(){
        eventBus.$on('openModal', () =>{
          this.visible = true;
        });
        eventBus.$on('closeModal', () =>{
          this.visible = false;
        });
      }
    }
</script>

<style lang="scss" scoped>
.wrapper{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .9);
  display: flex;
  justify-content: center;
  .image-holder{
    width: 65%;
    max-height: 80%;
    background-color: transparent;
    margin: auto;
    padding: 0;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    img{
      width: 100%;
      height: auto;
      margin: auto;
    }
  }
}
@media (max-width: 567px){
  .wrapper{
    .image-holder{
      width: 85%;
      max-height: 27%;
    }
  }
}
@media (min-width: 568px) and (max-width: 823px){
  .wrapper{
    .image-holder{
      width: 70%;
      max-height: 70%;
    }
  }
}
@media (min-width: 824px) and (max-width: 1919px){
  .wrapper{
    .image-holder{
      width: 90%;
      height: auto;
      background-color: transparent;
      margin: auto;
      padding: 0;
      border-radius: 5px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      img{
        width: 100%;
        height: auto;
        margin: auto;
      }
    }
  }
}
/*ANIMATIONS*/
.modal-fade-enter-active {
  animation: modal-fadein .5s linear forwards;
}
.modal-fade-leave-active {
  animation: modal-fadeout .5s linear forwards;
}
@keyframes modal-fadein {
  0% { opacity: 0 }
  100% { opacity: 1 }
}
@keyframes modal-fadeout {
  0% { opacity: 1 }
  100% { opacity: 0 }
}
</style>
