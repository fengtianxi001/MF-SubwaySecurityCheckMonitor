<template>
  <BasePanel title="系统健康">
    <div class="system-health">
      <HealthStatistics />
      <HealthChart />
    </div>
  </BasePanel>
</template>
<script setup lang="ts">
import HealthStatistics from './HealthStatistics.vue'
import HealthChart from './HealthChart.vue'
</script>
<style lang="scss" scoped>
.system-health {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
