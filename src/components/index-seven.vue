<template>
  <div class="index-container">
    <img src="../assets/image/done-blank-dark.svg" alt="">
    <div class="content">
      <div class="box box1">
        <div class="pointer pointer1"></div>
       <div>
         <p>2022年10月23日</p>
         <p>这天你应该很忙，你这天一共提交了 300 次代码</p>
       </div>
      </div>
      <div class="box box2">
        <div class="pointer pointer2"></div>
        <div>
          <p>2022年10月23日</p>
          <p>这天你 03：21 还在工作</p>
        </div>
      </div>
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

.pointer {
  width: 1rem;
  height: 1rem;
  background: #4e7bea;
  border-radius: 50%;
  flex: none;
}

.pointer2 {
  width: 1rem;
  height: 1rem;
  background: #A2CC63;
  border-radius: 50%;
}

.box {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  margin: 3rem 0;
}

</style>
