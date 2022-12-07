<template>
  <div class="index-container">
    <img src="../assets/image/saved-blank-dark.svg" alt="">
    <div class="content">
      <p>一共拥有 28 个仓库</p>
      <p>2022年创建 9 个仓库</p>
      <p>2022贡献最多的仓库是 hello-world</p>

    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.index-container{
  height: 100%;
  position: relative;
}
.index-container img{
  position: absolute;
  bottom: 0;
  width: 100%;
  object-fit: contain;
}
</style>
