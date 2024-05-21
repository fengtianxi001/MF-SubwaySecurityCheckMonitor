<template>
  <div class="base-header">
    <div class="header-left">
      <div class="action-item" @click="actions.onWindowRefresh">
        <i class="fa-solid fa-arrows-rotate"></i>
      </div>
    </div>
    <div class="header-middle">智慧安检数据大屏</div>
    <div class="header-right">{{ date }}</div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import dayjs from 'dayjs'

const date = ref('')

setInterval(() => {
  date.value = dayjs().format('YYYY-MM-DD HH:mm:ss')
}, 1000)

const actions = {
  onWindowRefresh: () => {
    location.reload()
  },
}
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
    font-size: 33px;
    font-weight: bold;
  }
  .header-left {
    position: absolute;
    left: 20px;
    display: flex;
    gap: 10px;
    .action-item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      font-size: 24px;
      cursor: pointer;
      background-color: #2f3047;
      border-radius: 5px;
    }
  }
  .header-right {
    position: absolute;
    right: 20px;
    font-size: 28px;
  }
}
</style>
