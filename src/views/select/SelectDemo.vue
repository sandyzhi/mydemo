<template>
    <div class="container">
  <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
      >
    </el-option>
  </el-select>

  </div>
</template>
<script>
export default {
    data(){
     return {
       options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
          disabled:'true'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value:''
        }
    }
}
</script>
<style lang="scss">
.container{
    width: 50%;
    height: 500px;
    // background: pink;
    margin: 100px auto;
    border: 1px solid pink;
    text-align: center;
    padding: 40px;
}

</style>