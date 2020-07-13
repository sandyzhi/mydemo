<template>
  <div class="tablebox">
    <span>el-table 练习</span>
    <!-- :header-cell-style="{ background: '#eee' }" -->
    <el-form ref="addFormRef" :model="addRecordForm" :rules="addRecordForm.rules">
      <el-table :data="addRecordForm.tableData" style="width: 100%" :header-cell-style="rowCellClass" header-align="center">
        <el-table-column type="index" width="50" label="序号" align="center"> </el-table-column>
        <el-table-column prop="date" label="药品名称" width="200" align="center">
          <template slot-scope="scope">
            <el-form-item :prop="'tableData.' + scope.$index + '.medicaName'" :rules="addRecordForm.rules.medicaName">
              <el-input v-model="scope.row.medicaName" style="width: 100%" class="inputClass"></el-input>
            </el-form-item>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="剂量" width="180" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.dose" style="width: 100%" class="inputClass"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="单位" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.unit" style="width: 100%" class="inputClass"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="数量" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.count" style="width: 100%" class="inputClass"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="用药频次" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.frequency" style="width: 100%" class="inputClass"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="用药天数" align:center>
          <template slot-scope="scope">
            <el-input v-model="scope.row.days" style="width: 100%" class="inputClass"></el-input>
          </template>
        </el-table-column>
        <el-table-column width="80" align:center>
          <template slot-scope="scope">
            <!-- 需要增加判断 第一行只显示加号 最后一行 显示加号和减号 其余只有减号 -->
            <i v-show="addRecordForm.tableData.length !== 1" class="iconfont icon-decrease" @click="decrease(scope.$index)"></i>
            <i v-show="scope.$index === addRecordForm.tableData.length - 1" class="iconfont icon-add-2" @click="add(scope.$index)"></i>
          </template>
        </el-table-column>
      </el-table>
    </el-form>
    <div style="width:1000px ;text-align:center;margin-top:50px;">
      <div style="width:200px;height:50px;background:pink;padding:20px" @click="save">保存</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addRecordForm: {
        tableData: [],
        rules: { medicaName: [{ required: true, message: '药品名字不能为空', trigger: 'blur' }] }
      },

      tableRowData: { medicaName: '', dose: '', unit: '', count: '', frequency: '', days: '' }
    }
  },
  components: {},
  mounted() {
    this.initTable()
  },
  methods: {
    save() {
      console.log('保存')
      this.$refs.addFormRef.validate(valid => {
        console.log(valid)
        if (!valid) {
          console.log('无效')
          alert(123)
        } else {
          alert(321)
          console.log('有效')
        }
      })
    },
    initTable() {
      this.addRecordForm.tableData.push(this.tableRowData)
    },
    decrease(index) {
      console.log('减号')
      console.log(index)
      // 把当前对应的index 删除
      this.addRecordForm.tableData.splice(index, 1)
    },
    add(index) {
      console.log('加号')
      console.log(index)
      this.addRecordForm.tableData.push({ medicaName: '', dose: '', unit: '', count: '', frequency: '', days: '' })
      // 在对应的index 后 插入一条数据
    },
    rowCellClass({ column, columnIndex }) {
      console.log(column)
      // console.log(columnIndex)
      // console.log(column.label)
      if (column.label) {
        return 'background: #eee'
      } else {
        return 'display:none;border:none'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tablebox {
  width: 100%;
  height: 100vh;
  text-align: center;
  padding: 50px;
  .el-table {
    width: 80% !important;
    margin-top: 20px;
  }
}
.iconfont {
  font-family: 'iconfont' !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-right: 10px;
}

.icon-add-2 {
  color: green;
}
.icon-decrease {
  color: red;
}
.el-form-item {
  margin-bottom: 0px;
}
</style>
