<template>
  <div class="health-chart">
    <div class="chart-dot"></div>
    <div class="chart-point">
      <div class="chart-point-dot"></div>
      <div class="chart-point-line"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { map, max, min } from 'lodash'
import useEcharts from '@/dashboard/hooks/useEcharts'

// const { container, echarts, setOption } = useEcharts()

// const generateOptions = (sources: any[][]) => {
//   const minValue = map(sources, (source) => min(source))
//   const maxValue = map(sources, (source) => max(source))

//   return {
//     grid: {
//       top: '0%',
//       bottom: '0%',
//       left: '0%',
//       right: '0%',
//     },
//     radar: {
//       shape: 'circle',
//       // backgroundColor: '#000000', // 设置半透明白色背景
//       axisLine: {
//         lineStyle: {
//           color: '#9292c1', // 设置坐标轴线颜色
//         },
//       },
//       splitArea: {
//         show: true,
//         areaStyle: {
//           color: ['rgba(250,250,250,0)', 'rgba(200,200,200,0.1)'],
//         },
//       },
//       splitLine: {
//         lineStyle: {
//           color: '#9292c1', // 设置分割线颜色
//         },
//       },
//       indicator: [
//         { name: '', max: 6500 },
//         { name: '', max: 16000 },
//         { name: ' ', max: 30000 },
//         { name: ' ', max: 38000 },
//         { name: '', max: 52000 },
//         { name: '', max: 25000 },
//       ],
//     },
//     series: [
//       {
//         name: 'Budget vs spending',
//         type: 'radar',
//         symbol: 'none',
//         data: [
//           {
//             value: [4200, 3000, 20000, 35000, 50000, 18000],
//             name: 'Allocated Budget',
//             itemStyle: {
//               width: 8,
//               color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
//                 { offset: 0, color: '#de38fb' },
//                 { offset: 1, color: '#6732f3' },
//               ]),
//             },
//           },
//           {
//             value: [5000, 14000, 28000, 26000, 42000, 21000],
//             name: 'Actual Spending',
//             itemStyle: {
//               color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
//                 { offset: 0, color: '#32fedb' },
//                 { offset: 1, color: '#319cfc' },
//               ]),
//             },
//           },
//         ],
//       },
//     ],
//   }
// }

// onMounted(() => {
//   const sources = [
//     [1645, 1549, 1933, 1063, 1436, 1847, 1263],
//     [1464, 1485, 1405, 1852, 1091, 1659, 1923],
//   ]
//   console.log('sources', sources)
//   const options = generateOptions(sources)
//   setOption(options)
// })

const score = 80
</script>
<style lang="scss" scoped>
.health-chart {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background-image: url(./assets/chart_bg.svg);
  background-repeat: no-repeat;
  background-size: 100px;
  .chart-dot {
    width: 30px;
    height: 30px;
    background-color: #9292c1;
    border-radius: 50%;
  }
  .chart-point {
    position: absolute;
    display: flex;
    align-self: center;
    justify-content: center;
    transform: rotate(240deg);
    .chart-point-dot {
      width: 12px;
      height: 12px;
      background-color: #8cfcd1;
      border-radius: 50%;
    }
    .chart-point-line {
      position: absolute;
      top: 0;
      width: 4px;
      height: 35px;
      background-color: #8cfcd1;
      border-radius: 5px;
    }
  }
}
</style>
