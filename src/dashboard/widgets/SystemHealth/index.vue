<template>
  <BasePanel title="系统健康">
    <div class="system-health">
      <div class="health-statistics">
        <div class="statistics-count">80</div>
        <div class="statistics-analyse">
          <span class="statistics-analyse-title">较昨日同时间增加</span>
          <span class="statistics-analyse-status up">
            <span>30% </span>
            <span class="fa-solid fa-arrow-trend-up"></span>
          </span>
        </div>
      </div>
      <div class="health-chart"></div>
    </div>
  </BasePanel>
</template>
<script setup lang="ts">
import BasePanel from '../../components/BasePanel.vue'
// interface PropsType {}
// const props = defineProps<PropsType>()
</script>
<style lang="scss" scoped>
.system-health {
  display: flex;
  justify-content: space-between;
  .health-statistics {
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
      display: flex;
      flex-direction: column;
      color: #9292c1;
      .statistics-analyse-title {
        font-size: 14px;
      }
      .statistics-analyse-status {
        margin-top: 8px;
        &.up {
          color: #5eff5a;
        }
      }
    }
  }
  .health-chart {
    width: 150px;
    height: 150px;
    background-color: #2f2f49;
  }
}
</style>
