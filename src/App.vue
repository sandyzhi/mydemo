<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<style>
/* 解决element-ui的table表格控件表头与内容列不对齐问题 */

.el-table th.gutter {
  display: table-cell !important;
}
</style>
