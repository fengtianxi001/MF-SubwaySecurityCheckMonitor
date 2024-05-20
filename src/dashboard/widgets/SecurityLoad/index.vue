<template>
  <BasePanel title="安检负荷率">
    <div class="security-load">
      <div class="item" v-for="item in sources">
        <LoadChart />
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
  </BasePanel>
</template>
<script setup lang="ts">
import LoadChart from './LoadChart.vue'
const sources = [
  {
    title: '总综合负荷率',
    value: '99/103',
    percent: 80,
    trendValue: '+30%',
    trendStatus: 'up',
  },
  {
    title: '最大负荷率',
    value: '南门兜',
    percent: 80,
    trendValue: '+30%',
    trendStatus: 'up',
  },
  {
    title: '最小负荷率',
    value: '浦上大道站',
    percent: 80,
    trendValue: '+30%',
    trendStatus: 'up',
  },
]
</script>
<style lang="scss" scoped>
.security-load {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  height: 100%;
  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
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
