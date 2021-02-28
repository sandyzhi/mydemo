<template>
  <div class="transfer-container">
    <div class="table-transfer">
      <el-row :gutter="24">
        <el-col :span="10" class="left">
          <div class="header">专家列表</div>
          <div class="panel">
            <el-input placeholder="请输入内容" v-model="input" clearable> </el-input>

            <el-table ref="multipleTable" :data="currentTableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
              <el-table-column type="selection" width="40" :selectable="setSelectable"> </el-table-column>
              <el-table-column v-for="(item, index) in labelKey" :label="item.label" :prop="item.key" :width="item.width" :key="index" align="center"> </el-table-column>
            </el-table>
          </div>
        </el-col>
        <el-col :span="4" class="buttons">
          <el-button @click="selectChange" ref="selectbtn" :disabled="disabled">选择</el-button>
        </el-col>
        <el-col :span="10" class="right">
          <div class="header">已选专家</div>
          <div class="panel">
            <ul>
              <li class="item" v-for="(item, index) in currentSelection" :key="index">
                <span>{{ item.name }}</span>
                <span>{{ item.no }}</span>
                <i class="el-icon-close" @click="deleteHandle(item)"></i>
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import specialList from './mock/specialist.json'

export default {
  props: {
    tableData: {
      type: Array
      // default: []
    },
    selectedData: {
      type: Array,
      default: function() {
        return []
      }
    },
    labelKey: {
      type: Array
    },
    maxSelect: {
      type: Number
    }
  },
  model: {
    prop: 'selectedData',
    event: 'selectChange'
  },
  data() {
    return {
      input: '',
      currentSelection: [],
      currentTableData: [],
      leftSelected: []
      // disabled: false
    }
  },
  computed: {
    disabled: function() {
      return this.leftSelected.length > 0 ? false : true
    }
  },
  // watch: {
  //   leftSelected(val) {
  //     console.log('sss', this.leftSelected.length)
  //     this.disabled = !this.leftSelected.length > 0
  //   }
  // },
  methods: {
    createMockData() {
      // 随机成成数据
      let data = []
      let zm = ['aa', 'bb', '测试', 'cc', 'n', 'nib', 'speci01', 'p2', 'ccccc', '2021a', '2021b', '2021c', '2021jj', '2021333', 'ccc2021', '231546sss', '3654kkk', 'sssuy']
      for (let i = 0; i < 18; i++) {
        let special = {}
        special.name = zm[i]
        special.no = i + 'i'
        special.finished = Math.round(Math.random() * 100)
        special.unfinished = Math.round(Math.random() * 100)
        data.push(special)
      }
      // console.log(JSON.stringify(data))
    },
    selectChange() {
      //选择
      // 左侧去除当前选中的专家
      this.currentSelection = this.currentSelection.concat(this.leftSelected)
      this.currentTableData = this.tableData.filter(item => !this.currentSelection.some(citem => citem.no === item.no))
      this.$emit('selectChange', this.currentSelection)
    },
    handleSelectionChange(selection) {
      this.leftSelected = selection
      // 控制选择按钮是否处于可点击状态
      // this.$refs.selectbtn.disabled = !selection.length > 0
    },
    setSelectable(row, index) {
      if (this.leftSelected.length == this.maxSelect) {
        return this.leftSelected.findIndex(item => row.no == item.no) !== -1
      } else if (this.currentSelection.length == this.maxSelect) {
        return this.currentSelection.findIndex(item => row.no == item.no) !== -1
      } else {
        return true
      }
    },
    deleteHandle(special) {
      console.log('special', special)
      this.currentSelection.splice(
        this.currentSelection.findIndex(item => item.no === special.no),
        1
      )
      this.currentTableData.unshift(special)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.currentTableData = this.tableData
      console.log('current', this.currentTableData)
    })
  }
}
</script>
<style lang="less" scope>
div {
  box-sizing: border-box;
}
.transfer-container {
  width: 100%;
  padding: 30px;
  text-align: center;

  .table-transfer {
    width: 90%;
    min-width: 800px;
    margin: 0 auto;
    .header {
      height: 28px;
      line-height: 28px;
      background-color: cornflowerblue;
      padding-left: 30px;
      color: darkblue;
      text-align: left;
    }
    .panel {
      width: 100%;
      height: 400px;
      border: 1px solid cornflowerblue;
      padding: 10px;
    }
    .buttons {
      line-height: 300px;
    }
    .left {
      .header {
        border-radius: 0px 20px 0 0px;
      }
      .el-input {
        width: 80%;
        margin: 20px 0;
      }
      .el-input__inner {
        height: 30px;
      }
      .el-table__body-wrapper {
        min-height: 200px;
        max-height: 270px;
        overflow: auto;
      }
      .cell {
        padding: 0px;
      }
      td {
        border: none;
      }
      th.is-leaf {
        border: none;
      }
      th {
        .el-checkbox {
          display: none;
        }
      }
      .el-table td {
        padding: 5px 0px;
      }
    }
    .right {
      .header {
        border-radius: 20px 0px 0px 0px;
      }
      ul {
        width: 100%;
        padding-top: 30px;
        li {
          display: flex;
          justify-content: space-between;
          height: 30px;
          line-height: 30px;
        }
        span {
          display: inline-block;
        }
      }
    }
  }
}
</style>
