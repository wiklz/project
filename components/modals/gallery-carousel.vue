<template>
  <div class="wrapper" v-show="visible" @click.self="close()">
    <div class="gallerycarousel">
      <b-carousel id="carousel1"
                  controls
                  indicators
                  background="#000"
                  :interval="0"
                  v-model="slide"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
      >

        <b-carousel-slide v-if="slider[0]" :img-src="'images/' + image" v-for="image in $store.state.places[0].images" :key="image"></b-carousel-slide>
        <b-carousel-slide v-if="slider[1]" :img-src="'images/' + image" v-for="image in $store.state.places[1].images" :key="image"></b-carousel-slide>
        <b-carousel-slide v-if="slider[2]" :img-src="'images/' + image" v-for="image in $store.state.places[2].images" :key="image"></b-carousel-slide>
        <b-carousel-slide v-if="slider[3]" :img-src="'images/' + image" v-for="image in $store.state.places[3].images" :key="image"></b-carousel-slide>
        <b-carousel-slide v-if="slider[4]" :img-src="'images/' + image" v-for="image in $store.state.places[4].images" :key="image"></b-carousel-slide>
        <b-carousel-slide v-if="slider[5]" :img-src="'images/' + image" v-for="image in $store.state.places[5].images" :key="image"></b-carousel-slide>
        <b-carousel-slide v-if="slider[6]" :img-src="'images/' + image" v-for="image in $store.state.places[6].images" :key="image"></b-carousel-slide>
        <b-carousel-slide v-if="slider[7]" :img-src="'images/' + image" v-for="image in $store.state.places[7].images" :key="image"></b-carousel-slide>

      </b-carousel>

    </div>
  </div>
</template>

<script>
  import eventBus from "~/plugins/eventBus";
    export default {
        name: "galleryCarousel",
      data () {
        return {
          visible: false,
          slider: [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false
          ],
          slide: 0,
          sliding: null
        }
      },
      methods: {
        onSlideStart (slide) {
          this.sliding = true
        },
        onSlideEnd (slide) {
          this.sliding = false
        },
        close: function () {
          this.visible = false;
        }
      },
      created() {
        eventBus.$on('openCarouselitem0', () =>{
          for(let i = 0; i < this.slider.length; i++){
            this.slider[i] = false;
          }
          this.slider[0] = true;
          this.visible = true;
        });
        eventBus.$on('openCarouselitem1', () =>{
          for(let i = 0; i < this.slider.length; i++){
            this.slider[i] = false;
          }
          this.slider[1] = true;
          this.visible = true;
        });
        eventBus.$on('openCarouselitem2', () =>{
          for(let i = 0; i < this.slider.length; i++){
            this.slider[i] = false;
          }
          this.slider[2] = true;
          this.visible = true;
        });
        eventBus.$on('openCarouselitem3', () =>{
          for(let i = 0; i < this.slider.length; i++){
            this.slider[i] = false;
          }
          this.slider[3] = true;
          this.visible = true;
        });
        eventBus.$on('openCarouselitem4', () =>{
          for(let i = 0; i < this.slider.length; i++){
            this.slider[i] = false;
          }
          this.slider[4] = true;

        });
        eventBus.$on('openCarouselitem5', () =>{
          for(let i = 0; i < this.slider.length; i++){
            this.slider[i] = false;
          }
          this.slider[5] = true;
          this.visible = true;
        });
        eventBus.$on('openCarouselitem6', () =>{
          for(let i = 0; i < this.slider.length; i++){
            this.slider[i] = false;
          }
          this.slider[6] = true;
          this.visible = true;
        });
        eventBus.$on('openCarouselitem7', () =>{
          for(let i = 0; i < this.slider.length; i++){
            this.slider[i] = false;
          }
          this.slider[7] = true;
          this.visible = true;
        });
      }
    }
</script>

<style lang="scss" scoped>
.wrapper{
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 6%;
  .gallerycarousel{
    height:auto;
    max-height: 90vh;
    max-width: 65%;
    margin: auto;
    transition: all .3s ease-in-out;

    .carousel.slide{
      width: 100%;
      max-height: 90vh;
      border-radius: 10px;
      overflow: hidden;

      .carousel-inner{
        width: 100%;
        max-height: 90vh;
        .carousel-item{
          width: 100%;
          max-height: 90vh;
          img{
            width: 100%;
            max-height: 90vh;
          }
        }
      }
    }
  }
}
</style>
