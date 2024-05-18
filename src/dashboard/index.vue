<template>
  <div class="dashboard">
    <div class="dashboard-header">
      <BaseHeader />
    </div>
    <div class="dashboard-body">
      <PassengerCondition title="乘客情况" :row="12" :column="4" />
      <BaggageCondition title="行李情况" :row="12" :column="4" />
      <PassengerFlowCondition title="客流情况" :row="9" :column="12" />
      <SecurityLoad title="安检负荷率" :row="5" :column="12" />
      <ContrabandCondition title="违禁品情况" :row="10" :column="4" />
      <ContrabandRecord title="违禁品检出记录" :row="5" :column="4" />
      <WarningPending title="预警待处理" :row="5" :column="4" />
      <WarningSituation title="预警情况" :row="10" :column="4" />
      <PassengerFlowWarning title="下次客流预警" :row="4" :column="4" />
      <PassengerFlowWarningRecord title="客流预警记录" :row="5" :column="4" />
      <MapJudgment title="判图情况" :row="5" :column="8" />
      <EquipmentCondition title="设备情况" :row="10" :column="4" />
      <SecurityInspectorCondition title="安检员情" :row="9" :column="4" />
      <SystemHealth title="系统健康" :row="5" :column="4" />
      <WarningTrend title="趋势" :row="5" :column="4" />
    </div>
  </div>
</template>
<script setup lang="ts">
import BaseHeader from '../dashboard/components/BaseHeader.vue'
import PassengerCondition from './widgets/PassengerCondition/index.vue'
import BaggageCondition from './widgets/BaggageCondition/index.vue'
import PassengerFlowCondition from './widgets/PassengerFlowCondition/index.vue'
import SecurityLoad from './widgets/SecurityLoad/index.vue'
import ContrabandCondition from './widgets/ContrabandCondition/index.vue'
import ContrabandRecord from './widgets/ContrabandRecord/index.vue'
import WarningPending from './widgets/WarningPending/index.vue'
import WarningSituation from './widgets/WarningSituation/index.vue'
import PassengerFlowWarning from './widgets/PassengerFlowWarning/index.vue'
import PassengerFlowWarningRecord from './widgets/PassengerFlowWarningRecord/index.vue'
import MapJudgment from './widgets/MapJudgment/index.vue'
import EquipmentCondition from './widgets/EquipmentCondition/index.vue'
import WarningTrend from './widgets/WarningTrend/index.vue'
import SecurityInspectorCondition from './widgets/SecurityInspectorCondition/index.vue'
import SystemHealth from './widgets/SystemHealth/index.vue'
</script>
<style lang="scss" scoped>
.dashboard {
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: #555;
  .dashboard-header {
    height: 70px;
    background-color: #141429;
  }
  .dashboard-body {
    box-sizing: border-box;
    display: grid;
    grid-template-rows: repeat(24, 1fr);
    grid-template-columns: repeat(24, 1fr);
    grid-auto-flow: column dense;
    grid-gap: 15px;
    height: calc(100% - 70px);
    padding: 15px;
    background-color: #05050e;
    .item {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding: 10px 15px;
      background-color: #141429;
      border-radius: 10px;
      .item-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 30px;
        .item-header-left {
          display: flex;
          gap: 10px;
          align-items: center;
          .item-header-icon {
            font-size: 14px;
            color: #5b5989;
          }
          .item-header-name {
            font-size: 15px;
          }
        }
        .item-header-right {
          display: flex;
          gap: 10px;
          align-items: center;
          .item-header-icon {
            font-size: 16px;
            color: #5b5989;
          }
        }

        // .item-header-left {
        // }
      }
    }
  }
}
</style>
