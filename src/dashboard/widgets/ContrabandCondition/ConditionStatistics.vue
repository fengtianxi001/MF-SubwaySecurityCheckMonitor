<template>
  <div class="condition-statistics">
    <div class="statistics-title">检出违禁品总数</div>
    <div class="statistics-value" v-number="233"></div>
    <BaseChangeIndicator label="较昨日同时间" value="+30%" status="up" />
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.condition-statistics {
  display: flex;
  flex-direction: column;
  gap: 4px;
  .statistics-title {
    font-size: 20px;
    font-weight: bolder;
  }
  .statistics-value {
    font-size: 50px;
    font-weight: bolder;
  }
}
</style>
