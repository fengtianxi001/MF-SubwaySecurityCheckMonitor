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
    site: '橘园洲',
    value: '50K',
    date: '12:00',
  },
  {
    site: '洪湾',
    value: '50K',
    date: '12:00',
  },
  {
    site: '金山',
    value: '50K',
    date: '12:00',
  },
  {
    site: '金祥',
    value: '50K',
    date: '12:00',
  },
  {
    site: '祥坂',
    value: '50K',
    date: '12:00',
  },
  {
    site: '宁化',
    value: '50K',
    date: '12:00',
  },
  {
    site: '西洋',
    value: '50K',
    date: '12:00',
  },
  {
    site: '南门兜',
    value: '50K',
    date: '12:00',
  },
  {
    site: '水部',
    value: '50K',
    date: '12:00',
  },
  {
    site: '紫阳',
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
