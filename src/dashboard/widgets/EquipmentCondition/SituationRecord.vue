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
    project: '在线设备',
    value: '30次',
    date: '12:00:00',
  },
  {
    project: '离线设备',
    value: '30次',
    date: '12:00:00',
  },
  {
    project: '故障设备',
    value: '30次',
    date: '12:00:00',
  },
  {
    project: '维保设备',
    value: '30次',
    date: '12:00:00',
  },
]
</script>
<!-- <style lang="scss" scoped></style> -->
