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
  {
    project: '检修设备',
    value: '15次',
    date: '12:00:00',
  },
  {
    project: '备用设备',
    value: '12次',
    date: '12:00:00',
  },
  {
    project: '新上线设备',
    value: '8次',
    date: '12:00:00',
  },
  {
    project: '返修设备',
    value: '10次',
    date: '12:00:00',
  },
  {
    project: '待处理设备',
    value: '18次',
    date: '12:00:00',
  },
  {
    project: '已处理设备',
    value: '25次',
    date: '12:00:00',
  },
]
</script>
<!-- <style lang="scss" scoped></style> -->
