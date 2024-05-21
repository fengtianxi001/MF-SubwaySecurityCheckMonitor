<template>
  <BasePanel title="趋势">
    <div class="warning-trend" ref="container"></div>
  </BasePanel>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { map, max, min } from 'lodash'
import useEcharts from '@/dashboard/hooks/useEcharts'

const { container, echarts, setOption } = useEcharts()

const generateOptions = (sources: any[][]) => {
  const minValue = map(sources, (source) => min(source))
  const maxValue = map(sources, (source) => max(source))

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
      right: '5%',
      bottom: '3%',
      top: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: '#9292c1',
        margin: 20,
      },
      data: ['11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
    },
    yAxis: {
      type: 'value',
      show: false,
      min: minValue,
      max: maxValue,
    },
    series: [
      {
        name: '今天',
        type: 'line',
        symbol: 'none',
        smooth: true,
        itemStyle: {
          color: '#de38fb',
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                { offset: 0, color: '#de38fb' },
                { offset: 1, color: '#6732f3' },
              ],
              false
            ),
          },
        },
        data: sources[0],
      },
      {
        name: '昨天',
        type: 'line',
        symbol: 'none',
        smooth: true,
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                { offset: 0, color: '#32fedb' },
                { offset: 1, color: '#319cfc' },
              ],
              false
            ),
          },
        },
        itemStyle: {
          color: '#32fedb',
        },
        data: sources[1],
      },
    ],
  }
}

onMounted(() => {
  const sources = [
    [1645, 1549, 1933, 1063, 1436, 1847, 1263],
    [1464, 1485, 1405, 1852, 1091, 1659, 1923],
  ]
  console.log('sources', sources)
  const options = generateOptions(sources)
  setOption(options)
})
</script>
<style lang="scss" scoped>
.warning-trend {
  width: 100%;
  height: 100%;
}
</style>
