<template>
  <div class="condition-statistics">
    <div class="statistics-item">
      <div class="statistics-title">安检员总数</div>
      <div class="statistics-value" v-number="233"></div>
    </div>
    <div class="statistics-item">
      <div class="statistics-title">违规总次数</div>
      <div class="statistics-value" v-number="233"></div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.condition-statistics {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  .statistics-title {
    font-size: 20px;
    font-weight: bolder;
  }
  .statistics-value {
    font-size: 45px;
    font-weight: bolder;
  }
}
</style>
