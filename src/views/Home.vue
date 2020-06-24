<template>
  <div class="container">
    <div>{{ selectedData }}</div>
    <el-button @click="toTwoPage">to Two Page</el-button>
    <el-button  @click="$router.push({path:'/selectDemo'})"> el-select</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 'Hello Vue',
      dataList: [],
      selectedData: ''
    }
  },
  mounted() {
    // this.getListData()
    // this.$store.dispatch('getDataList')
    console.log('mp')
    if (this.$route.query && this.$route.query.selectedData) {
      this.selectedData = this.$route.query.selectedData
    } else {
      this.getListData()
    }
  },
  methods: {
    toTwoPage() {
      console.log('toTwoPage')
      this.$router.push({ name: 'Two', params: { rpar: this.dataList } })
    },
    getListData() {
      for (let i = 0; i < 20; i++) {
        this.dataList.push('第 ' + i + ' 个')
      }
      this.selectedData = this.dataList[0]
    }
  }
}
</script>
<style lang="less" scoped>
.container {
  text-align: center;
  padding: 20px;
  button {
    border: none;
    width: 200px;
    height: 50px;
    text-align: center;
    background: cyan;
    margin-top: 30px;
  }
}
</style>
