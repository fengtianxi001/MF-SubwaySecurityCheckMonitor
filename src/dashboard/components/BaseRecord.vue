<template>
  <table class="base-record">
    <tr class="base-record-row" v-for="(row, rowIndex) in configs">
      <td
        class="base-record-column"
        v-for="column in row"
        v-bind="{ ...column.props }"
      >
        {{ column.value }}
      </td>
    </tr>
  </table>
</template>
<script setup lang="tsx">
import { computed } from 'vue'

interface PropsType {
  data: any[]
  columns: any[]
}
const props = defineProps<PropsType>()

const configs = computed<any[]>(() => {
  return props.data.map((row, rowIndex) => {
    return props.columns.map((column, columnIndex) => {
      const isFirst = columnIndex === 0
      const isLast = columnIndex === props.columns.length - 1
      const align = isFirst ? 'left' : isLast ? 'right' : 'center'
      return {
        value: row[column.key] ?? '--',
        props: { align },
      }
    })
  })
})
</script>
<style lang="scss" scoped>
.base-record {
  width: 100%;
  .base-record-row {
    height: 30px;
  }
}
</style>
