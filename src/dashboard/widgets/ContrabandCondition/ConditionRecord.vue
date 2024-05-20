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
    project: '管制刀具',
    value: '10次',
    date: '12:00:00',
  },
  {
    project: '管制药品',
    value: '5次',
    date: '12:00:00',
  },
  {
    project: '爆炸品',
    value: '2次',
    date: '12:00:00',
  },
  {
    project: '枪支弹药',
    value: '1次',
    date: '12:00:00',
  },
  {
    project: '腐蚀性物品',
    value: '3次',
    date: '12:00:00',
  },
  {
    project: '易燃品',
    value: '4次',
    date: '12:00:00',
  },
  {
    project: '辐射性物品',
    value: '1次',
    date: '12:00:00',
  },
  {
    project: '生化危险品',
    value: '2次',
    date: '12:00:00',
  },
  {
    project: '其他违禁品',
    value: '7次',
    date: '12:00:00',
  },
]
</script>
<!-- <style lang="scss" scoped></style> -->
