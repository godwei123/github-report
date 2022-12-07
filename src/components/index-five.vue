<template>
  <div class="index-container">
    <img src="../assets/image/saved-blank-dark.svg" alt="">
    <div class="content">
      <p>一共拥有 <span>28</span> 个仓库</p>
      <p>2022年创建 <span>9</span> 个仓库</p>
      <p>2022贡献最多的仓库是 </p>
      <p>
        <span>hello-world</span>
      </p>

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
