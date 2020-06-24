<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  mounted(){
    this.parse()
  },
  methods:{
    parse(){
      /*
* 实现函数parse，将服务端返回的公交数据按下面定义的规则优先级输出：
*
* 1. 输出常规线路，并按照线路数字从小到大排列(如20路，301路等这些都是常规路线)
* 2. 输出地铁线路，并按照线路数字从小到大排序
* 3. 输出其它线路，并按照线路名称长短从小到大排序*/
      const res = {
                  code: 0,
                  data: {
                  lines: '20路,301路,5路,地铁5号线,机场大巴线,107路,机场快轨',
                  lineids: 'lzbd,lwes,lxid,lwic,lwdf,ldfx,loin',
                  linedetails: {
                  lwdf: {
                  name: '机场大巴线'
                  },
                  lwes: {
                  name: '301路'
                  },
                  lwic: {
                  name: '地铁5号线'
                  },
                  ldfx: {
                  name: '107路'
                  },
                  lzbd: {
                  name: '20路'
                  },
                  lxid: {
                  name: '5路'
                  },
                  loin: {
                  name: '机场快轨'
                  }
                  }
                  }
    }

    // 通过lines 先进性排序 同时将lineIds 排序
    // 根据排序 将 linedetails 创建一个新的对象 按照顺序依次将这些属性加入
    let lines = res.data.lines.split(',');
    let linesIds = res.data.lineids.split(',');
    let commonWay = []
    let subWay = []
    let otherWay = []
    }
    
  },
  components: {}
}
</script>

<style lang="stylus" scoped></style>
