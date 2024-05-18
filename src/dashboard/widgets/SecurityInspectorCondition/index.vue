<template>
  <BasePanel title="安检员情况">
    <div class="security-inspector-condition">
      <div class="condition-statistics">
        <div class="statistics-item">
          <div class="item-title">安检员总数</div>
          <div class="item-value">99</div>
        </div>
        <div class="statistics-item">
          <div class="item-title">违规总次数</div>
          <div class="item-value">99</div>
        </div>
      </div>
      <div class="condition-charts">
        <div class="chart-item">
          <div class="item-chart"></div>
          <div class="item-info">
            <div class="item-info-title">在岗安检员</div>
            <div class="item-info-value">
              <span>99</span>
              <span>
                <span>30%</span>
                <span class="fa-solid fa-arrow-trend-up"></span>
              </span>
            </div>
          </div>
        </div>
        <div class="chart-item">
          <div class="item-chart"></div>
          <div class="item-info">
            <div class="item-info-title">缺岗安检员</div>
            <div class="item-info-value">
              <span>99</span>
              <span>
                <span>30%</span>
                <span class="fa-solid fa-arrow-trend-up"></span>
              </span>
            </div>
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
.security-inspector-condition {
  width: 100%;
  height: 100%;
  .condition-statistics {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .statistics-item {
      .item-title {
        font-size: 18px;
      }
      .item-value {
        font-size: 60px;
      }
    }
  }
  .condition-charts {
    margin-top: 15px;
    .chart-item {
      display: flex;
      align-items: center;

      // justify-content: center;
      width: 100%;
      margin-bottom: 20px;

      // background-color: red;
      .item-chart {
        width: 60px;
        height: 60px;
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
}
</style>
