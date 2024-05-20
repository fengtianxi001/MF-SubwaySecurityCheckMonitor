<template>
  <BaseRecord style="margin-top: 10px" :columns="columns" :data="data" />
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
    project: '不明液体',
    value: '30次',
    date: '12:00:00',
  },
  {
    project: '不明液体',
    value: '30次',
    date: '12:00:00',
  },
  {
    project: '不明液体',
    value: '30次',
    date: '12:00:00',
  },
  {
    project: '不明液体',
    value: '30次',
    date: '12:00:00',
  },
  {
    project: '不明液体',
    value: '30次',
    date: '12:00:00',
  },
  {
    project: '不明液体',
    value: '30次',
    date: '12:00:00',
  },
  {
    project: '不明液体',
    value: '30次',
    date: '12:00:00',
  },
  {
    project: '不明液体',
    value: '30次',
    date: '12:00:00',
  },
  {
    project: '不明液体',
    value: '30次',
    date: '12:00:00',
  },
  {
    project: '不明液体',
    value: '30次',
    date: '12:00:00',
  },
]
</script>
<!-- <style lang="scss" scoped></style> -->
