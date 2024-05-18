<template>
  <BasePanel title="判图情况">
    <div class="map-judgment">
      <div class="item">
        <div class="item-icon"></div>
        <div class="item-info">
          <div class="item-title">工作中判图员</div>
          <div class="item-value">99</div>
        </div>
      </div>
      <div class="item">
        <div class="item-icon"></div>
        <div class="item-info">
          <div class="item-title">平均判图时长</div>
          <div class="item-value">23</div>
        </div>
      </div>
      <div class="item">
        <div class="item-icon"></div>
        <div class="item-info">
          <div class="item-title">工作时间占比</div>
          <div class="item-value">99%</div>
        </div>
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
.map-judgment {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  height: 100%;
  .item {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 8px 10px;

    // background-color: red;
    .item-icon {
      width: 70px;
      height: 70px;
      background-color: #2f3049;
    }
    .item-info {
      margin-left: 15px;
      .item-title {
        font-size: 16px;
      }
      .item-value {
        font-size: 38px;
        font-weight: bold;
      }
    }
  }
}
</style>
