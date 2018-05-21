<template>
  <div class="wrapper" v-show="visible" @click.self="close()">
    <div class="container image-holder">
      <slot></slot>
    </div>
  </div>
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
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .8);
  display: flex;
  justify-content: center;
  .image-holder{
    height: 60%;
    background-color: #fff;
    margin: auto;
    padding: 0;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    img{
      width: 100%;
      margin: auto;
    }
  }
}
</style>
