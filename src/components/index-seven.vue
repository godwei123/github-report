<template>
  <div class="index-container">
    <img src="../assets/image/done-blank-dark.svg" alt="">
    <div class="git-line">
      <div class="pointer pointer-one"></div>
      <div class="pointer pointer-two"></div>
    </div>
    <div class="content">
      <p>2022年10月23日</p>
      <p>提交了 300 次代码</p>
      <p>2022年10月23日</p>
      <p>03：21 还在工作</p>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.index-container {
  height: 100%;
  position: relative;
}

.index-container img {
  position: absolute;
  bottom: 0;
  width: 100%;
  object-fit: contain;
}
.git-line{
  position: absolute;
  height: 70vh;
  width: 4px;
  left: 0;
  top: -10vh;
  background: #A2CC63;
  border-radius: 6px;

}
.git-line .pointer{
  width: 14px;
  height: 14px;
  background: #4e7bea;
  border-radius: 50%;
  position: absolute;
  left: -5px;
}
.git-line .pointer.pointer-one{
  top: 20%;
}
.git-line .pointer.pointer-two{
  top: 60%;
}

.content{
  padding: 20px;
}
</style>
