<template>
  <div class="base-header">
    <div class="header-left"></div>
    <div class="header-middle">
      <!-- <img class="header-logo" src="/images/logo.svg" alt="logo" /> -->
      <span class="header-title">智慧安检数据大屏</span>
    </div>
    <div class="header-right">
      <div class="header-clock">2023-03-04 11:23:00</div>
    </div>
  </div>
</template>
<script setup lang="ts">
// interface PropsType {}
// const props = defineProps<PropsType>()
</script>
<style lang="scss" scoped>
.base-header {
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  .header-middle {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    .header-logo {
      width: 30px;
      height: 30px;
    }
    .header-title {
      font-size: 33px;
      font-weight: bold;
    }
  }
  .header-left {
    left: 20px;
  }
  .header-right {
    position: absolute;
    right: 20px;
    .header-clock {
      font-size: 28px;
    }
  }

  //   background-color: red;
}
</style>
