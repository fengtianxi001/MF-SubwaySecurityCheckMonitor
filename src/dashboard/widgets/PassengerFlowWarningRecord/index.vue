<template>
  <BasePanel title="客流预警记录">
    <div class="contraband-record">
      <BaseRecord :columns="columns" :data="data" />
    </div>
  </BasePanel>
</template>
<script setup lang="ts">
import BasePanel from '../../components/BasePanel.vue'
import BaseRecord from '../../components/BaseRecord.vue'

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
    site: '天河智慧城站',
    value: '50K',
    date: '12:00',
  },
  {
    site: '天河智慧城站',
    value: '50K',
    date: '12:00',
  },
  {
    site: '天河智慧城站',
    value: '50K',
    date: '12:00',
  },
  {
    site: '天河智慧城站',
    value: '50K',
    date: '12:00',
  },
  {
    site: '天河智慧城站',
    value: '50K',
    date: '12:00',
  },
  {
    site: '天河智慧城站',
    value: '50K',
    date: '12:00',
  },
  {
    site: '天河智慧城站',
    value: '50K',
    date: '12:00',
  },
  {
    site: '天河智慧城站',
    value: '50K',
    date: '12:00',
  },
]
</script>
<style lang="scss" scoped>
.contraband-record {
  width: 100%;
}
</style>
