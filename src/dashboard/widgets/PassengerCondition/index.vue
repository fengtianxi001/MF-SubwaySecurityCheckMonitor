<template>
  <BasePanel title="乘客情况" icon="fa-user">
    <div class="passenger-condition">
      <ConditionStatistics />
      <ConditionChart />
      <ConditionRecord />
    </div>
  </BasePanel>
</template>
<script setup lang="ts">
import ConditionStatistics from './ConditionStatistics.vue'
import ConditionChart from './ConditionChart.vue'
import ConditionRecord from './ConditionRecord.vue'
</script>
<style lang="scss" scoped>
.passenger-condition {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
