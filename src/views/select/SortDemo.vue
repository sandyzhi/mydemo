<template>
  <div class="containerbox">
    <el-select
      v-model="selectedDiseases"
      @change="changeDisease"
      value-key="diseaseNo"
      multiple
      collapse-tags
      style="margin-left: 20px;"
      placeholder="请选择申请病重"
      :multiple-limit="8"
      popper-class="sort_select"
    >
      <el-option v-for="item in allDisease" :key="item.diseaseNo" :label="item.diseaseName" :value="item"> </el-option>
    </el-select>

    <el-table :data="tableData" style="width: 100%" border center>
      <el-table-column label="选择申请病种" :min-width="180" align="center">
        <template slot-scope="scope">
          <!--  -->
          <span class="diseaseItem" v-for="item in scope.row.itemInfo" :key="item.diseaseNo"
            >{{ item.diseaseName }}
            <el-button type="text" class="el-icon-remove-outline" @click="removeDisease(item)"></el-button>
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="fixhospitalName" label="选择医院" :min-width="180" align="center"> </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="primary" @click="chooseHospital(scope.row)">请选择医院</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import diseaseData from './disease.json'
export default {
  data() {
    return {
      tableData: [],
      allDisease: [],
      selectedDiseases: [],
      diseasesDto: []
    }
  },
  methods: {
    changeDisease(arr) {
      // 执行分组显示的问题
      // console.log(arr)
      // 根据当前选中的和之前选中的数据整合新的table 中应该展示的数据
      const tempTableData = this.tableData
      this.diseasesDto = []
      const oldDatas = []
      const newAdds = []
      this.tableData.forEach(row => {
        row.itemInfo.forEach(item => {
          oldDatas.push(item)
        })
      })
      // 先在新的选项中找到原来讯在的保留
      oldDatas.forEach(item => {
        const index = arr.findIndex(newItem => {
          return item.diseaseNo == newItem.diseaseNo
        })
        if (index != -1) {
          this.diseasesDto.push(item)
        }
      })
      // 把原来没加进去新增的加进入
      arr.forEach(item => {
        const index = this.diseasesDto.findIndex(inItem => {
          return inItem.diseaseNo == item.diseaseNo
        })
        if (index == -1) {
          this.diseasesDto.push(JSON.parse(JSON.stringify(item)))
        }
      })
      //从当前选中的病中深拷贝 1、如果已经是已经选择了医院的 保留医院 如果
      this.tableData = []
      this.diseasesDto.forEach(deepObj => {
        // 创建深拷贝的对象
        // const deepObj = JSON.parse(JSON.stringify(item))
        // 先判断tableData 中是否有这类数据 如果没有创建新的对象加入table data ，如果有的话在对应的itemInfo 中加入对应的item
        if (this.tableData.length == 0) {
          //还没加入过数据
          this.tableData.push({ fixhospitalName: deepObj.fixhospitalName, itemInfo: [deepObj] })
        } else {
          // 已经有数据 遍历里面的数据判断是否有这样的一类
          let inTable = false
          this.tableData.some(row => {
            //
            if (row.itemInfo[0].categoryNo == deepObj.categoryNo) {
              row.itemInfo.push(deepObj)
              inTable = true
            }
          })
          if (!inTable) {
            //如果没有在table 中 创建一个对象计入
            console.log('======')
            this.tableData.push({ fixhospitalName: deepObj.fixhospitalName, itemInfo: [deepObj] })
          }
        }
      })
      // console.log(this.tableData)
    },
    removeDisease(disease) {
      //删除选中集合中对应的数据
      const index = this.selectedDiseases.findIndex(item => {
        return item.diseaseNo == disease.diseaseNo
      })
      console.log(index)
      this.selectedDiseases.splice(index, 1)
      this.changeDisease(this.selectedDiseases)
      // this.tableData.some((item, rowIndex) => {
      //   const findedIndex = item.itemInfo.findIndex((ii, index) => {
      //     //判断如果有的话直接删除 删除后如果
      //     if (ii.diseaseNo == disease.diseaseNo) {
      //       item.itemInfo.splice(index, 1)
      //     }
      //     return ii.diseaseNo == disease.diseaseNo
      //   })
      //   if (findedIndex != -1) {
      //     // 判断删除后的row 是否还有信息
      //     if (item.itemInfo.length == 0) {
      //       this.tableData.splice(rowIndex, 1)
      //     }
      //     return true
      //   }
      // })
      // 删除table 中对应的数据
    }
  },
  mounted() {
    this.allDisease = diseaseData
    //生成模拟数据
    // const categoryNos = ['01', '02', '03', '04']
    // const categoryNames = ['精神类', '皮肤类', '结核类', '其他']
    // for (let i = 0; i < 20; i++) {
    //   const random = Math.floor(Math.random() * 4)
    //   const disease = {}
    //   disease.diseaseNo = '0' + i
    //   disease.diseaseName = '疾病' + i
    //   disease.categoryNo = categoryNos[random]
    //   disease.categoryName = categoryNames[random]
    //   this.allDisease.push(disease)
    // }
  }
}
</script>
<style lang="scss">
.containerbox {
  padding: 30px;
  text-align: center;
  .el-select {
    margin-top: 50px;
  }
  .el-table {
    margin-top: 200px;
  }
  .diseaseItem {
    margin-right: 20px;
    .el-button {
      color: red;
      // i {
      //   color: red;
      // }
    }
  }
}
</style>
