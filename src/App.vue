<template>
  <swiper
      :direction="'vertical'"
      class="swiper-box"
      css-mode
      :space-between="0"
  >
    <swiper-slide>
      <div class="swiper-item">
        <index-one :data="userData"/>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-item">
       <index-two :data="userData"/>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-item">
        <index-three :data="userData"/>
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
import IndexOne from "./components/index-one.vue";
import IndexTwo from "./components/index-two.vue";
import IndexThree from "./components/index-three.vue";
import IndexFour from "./components/index-four.vue";
import IndexFive from "./components/index-five.vue";
import IndexSix from "./components/index-six.vue";
import IndexSeven from "./components/index-seven.vue";
import IndexEight from "./components/index-eight.vue";
import axios from "axios";
import {ref} from "vue";


const userData = ref({})
axios.get('https://api.github.com/users/godwei123',{
  headers:{
    'Accept': 'application/vnd.github.v3+json',
    'Authorization': 'token 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',
  }
}).then(result=>{
  const {avatar_url,followers,followers_url,login,
    following, public_repos, repos_url, total_private_repos}=result.data
  userData.value = {...userData.value,login,avatar_url,followers,followers_url,
    following, public_repos, repos_url, total_private_repos}

})


</script>

<style scoped>
.swiper-box{

}
.swiper-item{
  width: 100%;
  height: 100%;
}
</style>
