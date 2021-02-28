<template>
  <div>
    <div class="title">el-transfer</div>
    <el-transfer v-model="value" :data="data"></el-transfer>
    <customTransfer v-model="selectedData" :tableData="tableData" :selectedData="selectedData" :labelKey="labelKey" :maxSelect="maxSelect"></customTransfer>
  </div>
</template>
<script>
import customTransfer from './customTransfer'
import specialList from './mock/specialist.json'
export default {
  components: {
    customTransfer
  },
  data() {
    const generateData = _ => {
      const data = []
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${i}`,
          disabled: i % 4 === 0
        })
      }
      return data
    }
    return {
      data: generateData(),
      value: [1, 4],
      tableData: [],
      selectedData: [],
      labelKey: [
        { label: '名称', key: 'name', width: 60 },
        { label: '编码', key: 'no', width: 60 },
        { label: '已完成数量', key: 'finished', width: 80 },
        { label: '未完成数量', key: 'unfinished', width: 80 }
      ],
      maxSelect: 3
    }
  },
  mounted() {
    this.tableData = specialList
    console.log('this.tabledata', this.tableData)
  }
}
</script>
<style lang="less">
.title {
  width: 300px;
  margin: 20px 0;
  margin: 0 auto;
  text-align: center;
}
.el-transfer {
  text-align: left;
  width: 600px;
  margin: 0 auto;
}
</style>
