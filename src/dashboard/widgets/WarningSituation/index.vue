<template>
  <BasePanel title="预警情况">
    <div class="warning-situation">
      <SituationChart />
      <SituationRecord />
    </div>
  </BasePanel>
</template>
<script setup lang="ts">
import SituationChart from './SituationChart.vue'
import SituationRecord from './SituationRecord.vue'
</script>
<style lang="scss" scoped>
.warning-situation {
  width: 100%;
  height: 100%;
}
</style>
