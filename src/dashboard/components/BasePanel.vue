<template>
  <div class="base-panel" :style="layoutStyle">
    <div class="panel-header">
      <div class="panel-header-left">
        <i class="panel-header-icon fa-solid" :class="icon"></i>
        <span class="panel-header-title">{{ title }}</span>
      </div>
      <div class="panel-header-right">
        <i class="panel-header-icon fa-solid fa-gear"></i>
      </div>
    </div>
    <div class="panel-body">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
interface PropsType {
  title: string
  icon?: string
  row?: number
  column?: number
}

const props = withDefaults(defineProps<PropsType>(), {
  title: '',
  icon: 'fa-grid-2',
  row: 1,
  column: 1,
})

const layoutStyle = computed(() => {
  return {
    gridRow: `span ${props.row}`,
    gridColumn: `span ${props.column}`,
  }
})
</script>
<style lang="scss" scoped>
.base-panel {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 10px 15px;
  background-color: #141429;
  border-radius: 10px;
  .panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 35px;
    .panel-header-left {
      display: flex;
      gap: 10px;
      align-items: center;
      .panel-header-icon {
        font-size: 14px;
        color: #5b5989;
      }
      .panel-header-name {
        font-size: 15px;
      }
    }
    .panel-header-right {
      display: flex;
      gap: 10px;
      align-items: center;
      .panel-header-icon {
        font-size: 16px;
        color: #5b5989;
      }
    }

    // .item-header-left {
    // }
  }
  .panel-body {
    height: calc(100% - 50px);
    margin-top: 10px;
    overflow: hidden;
  }
}
</style>
