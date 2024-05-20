<template>
  <BasePanel title="行李情况" icon="fa-user">
    <div class="baggage-condition">
      <ConditionStatistics />
      <ConditionChart />
      <ConditionRecord />
    </div>
  </BasePanel>
</template>
<script setup lang="ts">
import '@/dashboard/components'
import ConditionStatistics from './ConditionStatistics.vue'
import ConditionChart from './ConditionChart.vue'
import ConditionRecord from './ConditionRecord.vue'
</script>
<style lang="scss" scoped>
.baggage-condition {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
