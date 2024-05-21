<template>
  <div class="condition-charts">
    <div class="chart-item" v-for="item in sources">
      <ChartItem />
      <div class="item-info">
        <div class="item-info-title">{{ item.title }}</div>
        <div style="display: flex; align-items: baseline">
          <span class="item-info-value">{{ item.value }}</span>
          <BaseChangeIndicator
            :value="item.trendValue"
            :status="item.trendStatus"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ChartItem from './ChartItem.vue'

const sources = [
  {
    title: '安检员总数',
    value: '99',
    percent: 80,
    trendValue: '+30%',
    trendStatus: 'up',
  },
  {
    title: '违规总次数',
    value: '103',
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
  margin-top: 15px;
  .chart-item {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 15px;
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
      grid-gap: 4px;
      align-items: start;
      .item-info-title {
        font-size: 17px;
      }
      .item-info-value {
        margin-right: 10px;
        font-size: 36px;
        font-weight: bold;
      }
    }
  }
}
</style>
