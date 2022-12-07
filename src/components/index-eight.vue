<template>
  <div class="index-container">
    <img class="image-top" src="../assets/image/image_10.png" alt="">

    <img class="image-bottom" src="../assets/image/image_5.png" alt="">
  </div>
</template>

<script setup>

</script>

<style scoped>
.index-container{
  position: relative;
  height: 100%;
  background: #FFFFFF;
}

.index-container img{
  object-fit: contain;
}
.index-container .image-top{
  position: absolute;
  top: 0;
}
.index-container .image-bottom{
  position: absolute;
  bottom: 0;
}
</style>
