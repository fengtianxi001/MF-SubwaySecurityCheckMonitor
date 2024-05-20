<template>
  <BasePanel title="下次客流预警">
    <div class="passenger-flow-warning">
      <div class="item-date">2024-01-22 12:00:00</div>
      <div class="item-value">螺洲古镇</div>
      <div class="item-tip">预计客流量: 10000人/分钟</div>
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
    font-size: 20px;
  }
  .item-value {
    margin-top: 6px;
    font-size: 35px;
  }
  .item-tip {
    margin-top: 8px;
    color: #9292c1;

    // color: #9a38f5;
  }
}
</style>
