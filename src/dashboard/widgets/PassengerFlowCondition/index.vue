<template>
  <BasePanel title="客流情况">
    <div class="passenger-flow-condition" ref="container"></div>
  </BasePanel>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { range, sampleSize } from 'lodash'
import useEcharts from '@/dashboard/hooks/useEcharts'

const { container, echarts, setOption } = useEcharts()

const generateOptions = (sources: any[][]) => {
  return {
    tooltip: {
      trigger: 'axis',
      backgroundColor: '#2f2f48',
      borderColor: '#2f2f48',
      textStyle: {
        color: '#fff',
      },
    },
    grid: {
      left: '5%',
      right: '2%',
      bottom: '12%',
      top: '5%',
    },
    xAxis: {
      type: 'category',
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: '#9292c1',
        fontSize: 15,
        margin: 20,
      },
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: '#9292c1',
      },
      splitLine: {
        lineStyle: {
          color: '#9292c130',
          type: 'dashed',
        },
      },
    },
    series: [
      {
        name: '重点乘客',
        type: 'bar',
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#32fedb' },
            { offset: 1, color: '#319cfc' },
          ]),
        },
        barWidth: 20,
        data: sources[0],
      },
      {
        name: '常乘客',
        type: 'bar',
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#f7cd5e' },
            { offset: 0.8, color: '#ee8149' },
          ]),
        },
        barWidth: 20,
        data: sources[1],
      },
      {
        name: '管控人员',
        type: 'bar',
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#de38fb' },
            { offset: 1, color: '#6732f3' },
          ]),
        },
        barWidth: 20,
        data: sources[2],
      },
    ],
  }
}

onMounted(() => {
  const sources = [
    sampleSize(range(1000, 200), 7),
    sampleSize(range(1000, 200), 7),
    sampleSize(range(1000, 200), 7),
  ]

  const options = generateOptions(sources)
  setOption(options)
})
</script>
<style lang="scss" scoped>
.passenger-flow-condition {
  width: 100%;
  height: 100%;

  // background-color: #2f2f4a;
}
</style>
