<template>
  <BasePanel title="安检负荷率">
    <div class="security-load">
      <div class="item">
        <div class="item-chart"></div>
        <div class="item-info">
          <div class="item-info-title">总综合负荷率</div>
          <div class="item-info-value">
            <span>99/103</span>
            <span>
              <span>30%</span>
              <span class="fa-solid fa-arrow-trend-up"></span>
            </span>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item-chart"></div>
        <div class="item-info">
          <div class="item-info-title">总综合负荷率</div>
          <div class="item-info-value">
            <span>99/103</span>
            <span>
              <span>30%</span>
              <span class="fa-solid fa-arrow-trend-up"></span>
            </span>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item-chart"></div>
        <div class="item-info">
          <div class="item-info-title">总综合负荷率</div>
          <div class="item-info-value">
            <span>99/103</span>
            <span>
              <span>30%</span>
              <span class="fa-solid fa-arrow-trend-up"></span>
            </span>
          </div>
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
.security-load {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  height: 100%;
  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    // background-color: red;
    .item-chart {
      width: 80px;
      height: 80px;
      margin-right: 20px;
      background-color: #2f3049;
      border-radius: 50%;
    }
    .item-info {
      .item-info-title {
        font-size: 18px;
      }
      .item-info-value {
        margin-top: 6px;
        & > span:first-child {
          margin-right: 10px;
          font-size: 30px;
          font-weight: bold;
        }
        & > span:last-child {
          gap: 10px;
          font-size: 14px;
          font-weight: bold;
          color: #5eff5a;
          span {
            margin-right: 6px;
          }
        }
      }
    }
  }
}
</style>
