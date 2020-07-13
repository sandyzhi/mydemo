<template>
  <div class="SelectcContainer">
    <!-- :multiple="true" -->
    <header class="header">管理系统</header>
    <div class="main">
      <el-select v-model="value" placeholder="请选择" popper-class="customSelect">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
      </el-select>
      <div style="height:800px"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: ''
    }
  }
}
</script>
<style lang="scss">
.SelectcContainer {
  position: relative;
  // width: 50%;
  height: 500px;
  // overflow-y: scroll;
  // background: pink;
  margin: 100px auto;
  // border: 1px solid pink;
  text-align: center;
  .header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 50px;
    background: coral;
    text-align: center;
    line-height: 50px;
    z-index: 1000;
  }
  .main {
    margin-top: 60px;
  }
}
</style>
