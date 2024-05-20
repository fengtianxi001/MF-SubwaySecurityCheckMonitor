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
  {
    project: '遗失行李数',
    value: '12件',
    date: '12:00:00',
  },
  {
    project: '超重行李数',
    value: '8件',
    date: '12:00:00',
  },
  {
    project: '违禁品数',
    value: '5件',
    date: '12:00:00',
  },
  {
    project: '受损行李数',
    value: '3件',
    date: '12:00:00',
  },
  {
    project: '液体行李数',
    value: '20件',
    date: '12:00:00',
  },
  {
    project: '托运行李数',
    value: '500件',
    date: '12:00:00',
  },
  {
    project: '手提行李数',
    value: '800件',
    date: '12:00:00',
  },
]
</script>
<!-- <style lang="scss" scoped></style> -->
