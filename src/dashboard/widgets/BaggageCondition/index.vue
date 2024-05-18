<template>
  <BasePanel title="行李情况">
    <div class="passenger-condition">
      <div class="condition-statistics">
        <div class="statistics-title">今日过包总数</div>
        <div class="statistics-count">78900</div>
        <div class="statistics-analyse">
          <span class="statistics-analyse-title">较昨日同时间增加</span>
          <span class="statistics-analyse-status up">
            <span>30% </span>
            <span class="fa-solid fa-arrow-trend-up"></span>
          </span>
        </div>
      </div>
      <div class="condition-chart"></div>
      <BaseRecord :columns="columns" :data="data" />
      <!-- <div class="condition-record"></div> -->
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
]
</script>
<style lang="scss" scoped>
.passenger-condition {
  display: flex;
  flex-direction: column;
  gap: 10px;
  .condition-statistics {
    display: flex;
    flex-direction: column;
    gap: 4px;
    .statistics-title {
      font-size: 20px;
      font-weight: bolder;
    }
    .statistics-count {
      font-size: 50px;
      font-weight: bolder;
    }
    .statistics-analyse {
      color: #9292c1;
      .statistics-analyse-title {
        font-size: 14px;
      }
      .statistics-analyse-status {
        margin-left: 8px;
        &.up {
          color: #5eff5a;
        }
      }
    }
  }
  .condition-chart {
    height: 180px;
    background-color: #9292c137;
  }
}
</style>
