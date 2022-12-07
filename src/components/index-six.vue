<template>
  <div class="index-container">
    <img src="../assets/image/inbox-zero-dark.svg" alt="" srcset="">
    <div class="content">
      <p>2022年</p>
      <p>一共活跃 <span>134</span> 天</p>
      <p>向 <span>3</span> 个仓库提交了代码</p>
      <p>共有 <span>4567</span> 行代码修改</p>
      <p>增加了 <span>1234</span> 行代码</p>
      <p>删除了 <span>3333</span> 行代码</p>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.index-container{
  position: relative;
  height: 100%;
}
.index-container img{
  position: absolute;
  bottom: 0;
  width: 100%;
  object-fit: contain;
}
</style>
