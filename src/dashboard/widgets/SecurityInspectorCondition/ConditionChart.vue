<template>
  <div class="condition-charts">
    <div class="chart-item" v-for="item in sources">
      <ChartItem />
      <div class="item-info">
        <div class="item-info-title">{{ item.title }}</div>
        <span class="item-info-value">{{ item.value }}</span>
        <BaseChangeIndicator
          label="较昨天同时间"
          :value="item.trendValue"
          :status="item.trendStatus"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ChartItem from './ChartItem.vue'

const sources = [
  {
    title: '总综合负荷率',
    value: '99/103',
    percent: 80,
    trendValue: '+30%',
    trendStatus: 'up',
  },
  {
    title: '总综合负荷率',
    value: '99/103',
    percent: 80,
    trendValue: '+30%',
    trendStatus: 'up',
  },
]
</script>
<style lang="scss" scoped>
.condition-charts {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 25px;
  .chart-item {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
    .item-chart {
      width: 60px;
      height: 60px;
      margin-right: 20px;
      background-color: #2f3049;
      border-radius: 50%;
    }
    .item-info {
      display: flex;
      flex-direction: column;
      grid-gap: 6px;
      align-items: start;
      .item-info-title {
        font-size: 17px;
      }
      .item-info-value {
        margin-right: 10px;
        font-size: 30px;
        font-weight: bold;
      }
    }
  }
}
</style>
