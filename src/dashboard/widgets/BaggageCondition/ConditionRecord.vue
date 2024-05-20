<template>
  <BaseRecord :columns="columns" :data="data" />
</template>
<script setup lang="ts">
const columns = [
  {
    name: '项目',
    key: 'project',
  },
  {
    name: '数值',
    key: 'value',
  },
  {
    name: '时间',
    key: 'date',
  },
]

const data = [
  {
    project: '漏盘数',
    value: '51个',
    date: '12:00:00',
  },
  {
    project: '开包数',
    value: '32人',
    date: '12:00:00',
  },
  {
    project: '人包匹配率',
    value: '90%',
    date: '12:00:00',
  },
  // {
  //   project: '常乘客数',
  //   value: '30人',
  //   date: '12:00:00',
  // },
]
</script>
<!-- <style lang="scss" scoped></style> -->
