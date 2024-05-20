<template>
  <BasePanel title="安检员情况">
    <div class="security-inspector-condition">
      <ConditionStatistics />
      <ConditionChart />
    </div>
  </BasePanel>
</template>
<script setup lang="ts">
import ConditionChart from './ConditionChart.vue'
import ConditionStatistics from './ConditionStatistics.vue'
</script>
<style lang="scss" scoped>
.security-inspector-condition {
  width: 100%;
  height: 100%;
}
</style>
