<template>
  <div class="index-container">
    <img src="../assets/image/002159.png" alt="">
    <div class="content">
      <p>参与 <span>20</span> 次讨论</p>
      <p>收藏了 <span>16</span> 个仓库</p>
      <p>following <span>{{ data.following }}</span> 个</p>
      <p>follower <span>{{ data.followers }}</span> 个</p>
    </div>
  </div>
</template>

<script setup>
defineProps(['data'])
</script>

<style scoped>
.index-container{
  height: 100%;
  position: relative;
}
.index-container img{
  position: absolute;
  width: 270px;
  height: 296px;
  bottom: 0;
  right: 0;
  object-fit: contain;
}

</style>
