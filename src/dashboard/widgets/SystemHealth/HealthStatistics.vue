<template>
  <div class="health-statistics">
    <div class="statistics-value">80</div>
    <div class="statistics-tip">较昨日同时间</div>
    <BaseChangeIndicator value="-10%" status="down" />
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.health-statistics {
  .statistics-value {
    font-size: 80px;
    font-weight: bolder;
  }
  .statistics-tip {
    font-size: 13px;
    color: #9292c1;
  }
}
</style>
