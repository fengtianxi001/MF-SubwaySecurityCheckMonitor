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
    project: '注册乘客数',
    value: '30人',
    date: '12:00:00',
  },
  {
    project: '公安重点人员数',
    value: '30人',
    date: '12:00:00',
  },
  {
    project: '地铁管控人员数',
    value: '30人',
    date: '12:00:00',
  },
  {
    project: '常乘客数',
    value: '30人',
    date: '12:00:00',
  },
  {
    project: '安检人员数',
    value: '20人',
    date: '12:00:00',
  },
  {
    project: '维修人员数',
    value: '10人',
    date: '12:00:00',
  },
  {
    project: '紧急联系人数',
    value: '5人',
    date: '12:00:00',
  },
  {
    project: '特殊人员数',
    value: '3人',
    date: '12:00:00',
  },
  {
    project: '临时人员数',
    value: '2人',
    date: '12:00:00',
  },
  {
    project: '其他人员数',
    value: '1人',
    date: '12:00:00',
  },
]
</script>
<!-- <style lang="scss" scoped></style> -->
