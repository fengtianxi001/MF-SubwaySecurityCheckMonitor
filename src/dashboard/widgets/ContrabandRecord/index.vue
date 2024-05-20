<template>
  <BasePanel title="违禁品检出记录">
    <div class="contraband-record">
      <BaseRecord :columns="columns" :data="data" />
    </div>
  </BasePanel>
</template>
<script setup lang="ts">
const columns = [
  {
    name: '项目',
    key: 'site',
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
    site: '三江口',
    value: '辐射性物品',
    date: '12:00:00',
  },
  {
    site: '下洋',
    value: '易燃品',
    date: '12:00:00',
  },
  {
    site: '梁厝',
    value: '枪支弹药',
    date: '12:00:00',
  },
  {
    site: '安平',
    value: '管制药品',
    date: '12:00:00',
  },
  {
    site: '福州火车南站',
    value: '管制药品',
    date: '12:00:00',
  },
  {
    site: '胪雷',
    value: '管制药品',
    date: '12:00:00',
  },
  {
    site: '白湖亭',
    value: '管制刀具',
    date: '12:00:00',
  },
  {
    site: '三叉口',
    value: '管制刀具',
    date: '12:00:00',
  },
  {
    site: '上藤',
    value: '管制刀具',
    date: '12:00:00',
  },
  {
    site: '达道',
    value: '管制刀具',
    date: '12:00:00',
  },
  {
    site: '茶亭',
    value: '管制刀具',
    date: '12:00:00',
  },
  {
    site: '南门兜',
    value: '管制刀具',
    date: '12:00:00',
  },
]
</script>
<style lang="scss" scoped>
.contraband-record {
  width: 100%;
}
</style>
