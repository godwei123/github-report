<template>
  <div class="index-container">
    <img class="image" :src="data.avatar_url" alt="img">
    <div class="nickname">{{ data.login }}</div>
    <div class="info animate__animated animate__backInUp">
      <p>2022年度</p>
      <p>GitHub个人总结</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data:{
    type:Object
  }
})
console.log(props)

</script>

<style scoped>
.index-container{
  height: 100%;
  background-size: cover;
  background-image: url("../assets/image/bg.svg");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.image{
  width: 110px;
  height: 110px;
  border-radius: 50%;
}
.nickname{
  font-size: 3rem;
  line-height: 52px;
  color: #FFFFFF;
  margin: 52px 37px;
}
.info{
  font-size: 2rem;
  line-height: 48px;
  color: #FFFFFF;
  text-align: center;
}
</style>
