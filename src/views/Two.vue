<template>
  <div class="container">
    <div class="header">我是Two</div>
    <div class="listBox">
      <ul>
        <li v-for="(item, index) in dataList" :key="index" @click="selectedItem(index)" :class="{ selectedS: selected === index }">{{ item }}</li>
      </ul>
    </div>
    <div class="confirmBox">
      <div class="btn" @click="confirmClick">确认</div>
    </div>
  </div>
</template>

<script>
// ...mapGetters(['getSelectedData'])
export default {
  data() {
    return {
      selected: 0,
      dataList: [],
      selectedObj: '',
      selectedIndex: 0
    }
  },
  mounted() {
    // console.log(this.$route.params)
    console.log('测试')
    this.getRouteParams()
  },
  methods: {
    getRouteParams() {
      // const data = this.$route.query
      // debugger
      const { rpar } = this.$route.params
      if (rpar === undefined) {
        this.getListData()
      } else {
        this.dataList = rpar
      }
      console.log(this.dataList)
    },
    getListData() {
      for (let i = 0; i < 20; i++) {
        this.dataList.push('第 ' + i + ' 个')
      }
    },
    selectedItem(index) {
      this.selected = index
      this.selectedObj = this.dataList[index]
      // vuex 数据存储
      // this.$store.getters.getSelectedData(index)
      this.selectedIndex = index
    },
    confirmClick() {
      console.log(this.selectedObj)
      // this.$store.commit('getSelectedData', this.selectedIndex)
      this.$router.replace({ path: '/home', query: { selectedData: this.selectedObj } })
    }
  },
  components: {}
}
</script>

<style lang="less" scoped>
.container {
  text-align: center;
  .header {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: white;
  }
  .listBox {
    position: fixed;
    width: 100%;
    top: 40px;
    bottom: 0;
    height: auto;
    overflow: scroll;
  }
}
ul {
  width: 100%;
  list-style: none;
  padding: 0;
  // margin-top: 45px;
}
li {
  list-style: none;
  height: 50px;
  line-height: 50px;
  padding-left: 10px;
  &.selectedS {
    color: red;
    font-size: 30px;
  }
}
li:nth-child(odd) {
  background-color: pink;
}
li:nth-child(even) {
  background-color: skyblue;
}
.confirmBox {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: white;
  margin-top: 10px;
  padding-top: 15px;
  .btn {
    width: 150px;
    height: 30px;
    line-height: 30px;
    background: red;
    color: white;
    font-size: 20px;
    text-align: center;
    margin: auto;
  }
}
</style>
