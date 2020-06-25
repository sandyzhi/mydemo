<template>
  <div class="container">
    <el-button type="primary" @click="showDialog">打开弹窗</el-button>
    <el-dialog title="收货地址" :visible.sync="dialogTableVisible" :close-on-click-modal="false" width="80%">
      <!-- <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="name" label="姓名" width="200"></el-table-column>
        <el-table-column property="dose" label="剂量"></el-table-column> :width="item.width" :width="item.width"  style="width:100%"-->
      <el-table :data="tabledata" border cell-class-name="cellStyle" header-cell-class-name="headerCellStyle" class="table" tooltip-effect="dark">
        <el-table-column v-for="(item, index) in labelKeys" :label="item.label" :prop="item.key" :key="index" :min-width="item.width" show-overflow-tooltip></el-table-column>
        <!-- <el-table-column label="操作" >
          <template slot-scope="scope">
            <div @click="xufang(scope.row)">续方</div>
          </template>
        </el-table-column> -->
      </el-table>
    </el-dialog>
  </div>
</template>
<script>
// import tabledata from './tabledata.json'
import data from './tabledata.json'
export default {
  data() {
    return {
      labelKeys: [
        { label: '日期', key: 'date', width: '100' },
        { label: '药品名称剂量', key: 'name', width: '180' },
        { label: '剂量', key: 'dose', width: '100' },
        { label: '单位', key: 'unit', width: '100' },
        { label: '数量', key: 'count', width: '100' },
        { label: '用药频次', key: 'times', width: '100' },
        { label: '用药天数', key: 'days', width: '100' }
        // { label: '', key: '', width: '' }
      ],
      dialogTableVisible: false,
      tabledata: data.tableData
    }
  },
  methods: {
    showDialog() {
      this.dialogTableVisible = true
      console.log(data)
    },
    xufang(rowData) {
      console.log(rowData)
    }
  }
}
</script>
<style lang="scss">
.container {
  padding: 20px;
  .table {
    border: 1px solid rgb(68, 67, 67);
    border-right: none;
  }
  .headerCellStyle {
    border-bottom: 1px solid rgb(68, 67, 67) !important;
    border-right: 1px solid rgb(68, 67, 67);
  }
  .cellStyle {
    // border: 1px solid red;
    border-bottom: 1px solid rgb(68, 67, 67);
    border-right: 1px solid rgb(68, 67, 67);
  }
}
</style>
