<template>
  <div class="carousel">
    <carousel :perPage="1" :navigationEnabled="true" :navigationNextLabel=null
              :navigationPrevLabel=null >
      <slide v-for="path in this.paths">
        <img v-bind:src="path"/>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
name: "Slider.vue",
  components: {  Carousel,
    Slide },
  data() {
    let paths = ['src/assets/rooms/image.png','src/assets/rooms/image.png','src/assets/rooms/image.png','src/assets/rooms/image.png']
    return {
      paths
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss">
@import "../style";
.carousel {
  width: 270px;
  height: 151.38px;
}
/* rules for lib  */
.VueCarousel {
  position: relative;
}
.VueCarousel-pagination {
  position: absolute;
  bottom: 0;
  text-align: right !important;
}
.VueCarousel-dot-container {
  margin: 0 14px 16px 0 !important;
}
.VueCarousel-dot {
  width: 6px !important;
  height: 6px !important;
  padding: 0 !important;
  margin: 0 1.5px;
  background-color: transparent !important;
  border: 1px solid #ffff !important;
}
.VueCarousel-dot--active {
  background-color: #ffff !important;
}

.VueCarousel-navigation-prev,  .VueCarousel-navigation-next {
  width: 10px!important;
  height: 10px !important;

  background-image: url("/src/assets/expand_more.svg") !important;
  background-repeat: no-repeat;
}
.VueCarousel-navigation-prev {
  left: 12px !important;
  transform: rotate(180deg) !important;
  top: 42% !important;
}
.VueCarousel-navigation-next {
  right: 10px !important;
  transform: rotate(0deg) !important;
  top: 43% !important;
}
</style>
