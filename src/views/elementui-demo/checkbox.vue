<template>
  <div class="checkboxContainer">
    <ul>
      <li v-for="(item, index) in datas" :key="index">
        <el-checkbox v-model="item.checked" @change="checkChange(item, index)">{{ item.name }}</el-checkbox>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: true,
      datas: []
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      // 生成模拟数据
      for (let i = 0; i < 10; i++) {
        this.datas.push({ name: '练习' + i, checked: false })
      }
    },
    checkChange(item, index) {
      for (let i = 0; i < this.datas.length; i++) {
        if (index !== i) {
          this.datas[i].checked = false
        }
        // 错误的思想代码
        // if (index === i) {
        //   console.log(this.datas[i].checked)
        //   this.datas[i].checked = !this.datas[i].checked
        //   console.log(this.datas[i].checked)
        // } else {
        //   this.datas[i].checked = false
        // }
      }
    }
  }
}
</script>
<style lang="scss">
.checkboxContainer {
  text-align: center;
  padding: 30px;
}
</style>
