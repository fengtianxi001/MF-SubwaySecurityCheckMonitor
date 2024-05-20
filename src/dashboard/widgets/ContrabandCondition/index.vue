<template>
  <BasePanel title="违禁品情况">
    <div class="contraband-condition">
      <ConditionStatistics />
      <ConditionRecord />
    </div>
  </BasePanel>
</template>
<script setup lang="ts">
import ConditionStatistics from './ConditionStatistics.vue'
import ConditionRecord from './ConditionRecord.vue'
</script>
<style lang="scss" scoped>
.contraband-condition {
  width: 100%;
  height: 100%;
}
</style>
