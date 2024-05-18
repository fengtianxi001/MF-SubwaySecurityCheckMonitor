<template>
  <BasePanel title="预警待处理">
    <div class="warning-pending">
      <div class="item">
        <div class="item-title">待处理可疑人员</div>
        <div class="item-value">900</div>
      </div>
      <div class="item">
        <div class="item-title">待处理违禁品</div>
        <div class="item-value">301</div>
      </div>
    </div>
  </BasePanel>
</template>
<script setup lang="ts">
import BasePanel from '../../components/BasePanel.vue'
// interface PropsType {}
// const props = defineProps<PropsType>()
</script>
<style lang="scss" scoped>
.warning-pending {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  height: 100%;
  .item {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 10px;

    // background-color: #db22fe;
    .item-title {
      width: 100%;
      font-size: 18px;
    }
    .item-value {
      width: 100%;
      font-size: 60px;
    }
  }
}
</style>
