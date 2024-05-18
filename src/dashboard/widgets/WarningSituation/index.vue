<template>
  <BasePanel title="预警情况">
    <div class="warning-situation">
      <div class="situation-chart"></div>
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
    value: 30,
    date: '12:00',
  },
  {
    project: '公安重点人员数',
    value: 30,
    date: '12:00',
  },
  {
    project: '地铁管控人员数',
    value: 30,
    date: '12:00',
  },
  {
    project: '常乘客数',
    value: 30,
    date: '12:00',
  },
  {
    project: '地铁管控人员数',
    value: 30,
    date: '12:00',
  },
  {
    project: '常乘客数',
    value: 30,
    date: '12:00',
  },
]
</script>
<style lang="scss" scoped>
.warning-situation {
  width: 100%;
  height: 100%;
  .situation-chart {
    height: 200px;
    margin-bottom: 15px;
    background-color: #2f2f49;
  }
}
</style>
