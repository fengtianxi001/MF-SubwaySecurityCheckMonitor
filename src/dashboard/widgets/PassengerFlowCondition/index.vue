<template>
  <BasePanel title="客流情况">
    <div class="passenger-flow-condition" ref="container"></div>
  </BasePanel>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { map, max, min, range, sampleSize } from 'lodash'
import useEcharts from '@/dashboard/hooks/useEcharts'

const { container, setOption } = useEcharts()

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
      right: '2%',
      bottom: '12%',
      top: '5%',
      // containLabel: true,
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
          color: '#5a7bf7',
        },
        barGap: 0,
        barWidth: 20,
        data: sources[0],
      },
      {
        name: '常乘客',
        type: 'bar',
        itemStyle: {
          color: '#78d8e9',
        },
        barGap: 0,
        barWidth: 20,
        data: sources[1],
      },
      {
        name: '管控人员',
        type: 'bar',
        itemStyle: {
          color: '#992bf2',
        },
        barGap: 0,
        barWidth: 20,
        data: sources[2],
      },
      // {
      //   name: '失信人员',
      //   type: 'bar',
      //   itemStyle: {
      //     color: '#9494bf',
      //   },
      //   barGap: 0,
      //   barWidth: 20,
      //   data: sources[2],
      // },
      // {
      //   name: '失信人员',
      //   type: 'bar',
      //   itemStyle: {
      //     color: '#eb4b3c',
      //   },
      //   barGap: 0,
      //   barWidth: 20,
      //   data: sources[1],
      // },
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
