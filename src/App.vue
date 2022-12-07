<template>
  <swiper
      :modules="modules"
      :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
      :direction="'vertical'"
      class="swiper-box"
      :space-between="0"
  >
    <swiper-slide>
      <div class="swiper-item">
        <index-one/>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-item">
       <index-two/>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-item">
        <index-three/>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-item">
        <index-four/>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-item">
        <index-five/>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-item">
        <index-six/>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-item">
        <index-seven/>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-item">
        <index-eight/>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Autoplay} from "swiper";

import IndexOne from "./components/index-one.vue";
import IndexTwo from "./components/index-two.vue";
import IndexThree from "./components/index-three.vue";
import IndexFour from "./components/index-four.vue";
import IndexFive from "./components/index-five.vue";
import IndexSix from "./components/index-six.vue";
import IndexSeven from "./components/index-seven.vue";
import IndexEight from "./components/index-eight.vue";
import {ref} from "vue";

// const modules=ref([Autoplay])

</script>

<style scoped>
.swiper-box{

}
.swiper-item{
  width: 100%;
  height: 100%;
}
</style>
