<template>
  <BasePanel title="下次客流预警">
    <div class="passenger-flow-warning">
      <div class="item-date">2024-01-22 12:00:00</div>
      <div class="item-value">老君智慧城站</div>
    </div>
  </BasePanel>
</template>
<script setup lang="ts">
import BasePanel from '../../components/BasePanel.vue'
// interface PropsType {}
// const props = defineProps<PropsType>()
</script>
<style lang="scss" scoped>
.passenger-flow-warning {
  width: 100%;
  height: 100%;
  .item-date {
    font-size: 18px;
  }
  .item-value {
    margin-top: 6px;
    font-size: 40px;
  }
}
</style>
