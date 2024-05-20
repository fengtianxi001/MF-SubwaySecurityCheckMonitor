<template>
  <div class="situation-chart">
    <div class="chart" ref="container"></div>
    <div class="statistics">
      <span>预警总数</span>
      <span>90%</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useEcharts } from '@/dashboard/hooks/useEcharts'
import { onMounted } from 'vue'

const { container, setOption } = useEcharts()
onMounted(() => {
  const options = {
    series: [
      {
        name: 'Access From',
        type: 'pie',
        avoidLabelOverlap: false,
        padAngle: 5,
        radius: ['65%', '80%'],
        hoverAnimation: false,
        itemStyle: {
          borderRadius: 10,
        },
        label: {
          show: false,
          position: 'center',
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 90, name: 'Search', itemStyle: { color: '#0d7cfb' } },
          { value: 10, name: 'Direct', itemStyle: { color: '#ffcb44' } },
          { value: 10, name: 'Direct', itemStyle: { color: '#ff382e' } },
          { value: 10, name: 'Direct', itemStyle: { color: '#8589b8' } },
        ],
      },
    ],
  }
  setOption(options)
})
</script>
<style lang="scss" scoped>
.situation-chart {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  .chart {
    width: 100%;
    height: 100%;
  }
  .statistics {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 24px;
    span:first-child {
      font-size: 16px;
    }
    span:last-child {
      font-size: 30px;
    }
  }
}
</style>
