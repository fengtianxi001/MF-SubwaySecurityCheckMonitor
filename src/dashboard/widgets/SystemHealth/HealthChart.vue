<template>
  <div class="health-chart">
    <div class="chart-item" v-for="item in 100"></div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { map, max, min } from 'lodash'
</script>
<style lang="scss" scoped>
.health-chart {
  box-sizing: border-box;
  display: grid;
  grid-template-rows: repeat(10, 1fr);
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 3px;
  width: 150px;
  height: 120px;
  .chart-item {
    box-sizing: border-box;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    background-color: #8689b450;
    border: 1px solid rgba(255, 255, 255, 20.6%);
  }
}
</style>
