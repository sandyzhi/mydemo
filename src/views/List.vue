<template>
  <div>
    <header>
      mescroll 测试
    </header>
    <mescroll-vue ref="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit">
      <!--内容...-->
      <ul class="data-list">
        <li class="data-li" v-for="(item, index) in dataList" :key="index" @click="myClick(index)">
          <span>{{ item }}</span>
        </li>
      </ul>
    </mescroll-vue>
  </div>
</template>

<script>
import MescrollVue from 'mescroll.js/mescroll.vue'
// import MescrollMixins from '@/assets/MescrollMixins.js'
export default {
  data() {
    return {
      mescroll: null, // mescroll实例对象
      mescrollDown: {}, // 下拉刷新的配置. (如果下拉刷新和上拉加载处理的逻辑是一样的,则mescrollDown可不用写了)
      mescrollUp: {
        callback: this.upCallback, // 上拉回调,此处简写; 相当于 callback: function(page, mescroll) { }
        // 以下是一些常用的配置,当然不写也可以的.
        page: {
          num: 0, // 当前页 默认0,回调之前会加1; 即callback(page)会从1开始
          size: 15 // 每页数据条数,默认10
        },
        htmlNodata: '<p class="upwarp-nodata">没有更多数据了</p>',
        noMoreSize: 5 // 如果列表已无数据,可设置列表的总数量要大于5才显示无更多数据;
        // 避免列表数据过少(比如只有一条数据),显示无更多数据会不好看
        // 这就是为什么无更多数据有时候不显示的原因
        // toTop: {
        //   // 回到顶部按钮
        //   src: './static/mescroll/mescroll-totop.png', // 图片路径,默认null,支持网络图
        //   offset: 1000 // 列表滚动1000px才显示回到顶部按钮
        // },
        // empty: {
        //   // 列表第一页无任何数据时,显示的空提示布局; 需配置warpId才显示
        //   warpId: 'xxid', // 父布局的id (1.3.5版本支持传入dom元素)
        //   icon: './static/mescroll/mescroll-empty.png', // 图标,默认null,支持网络图
        //   tip: '暂无相关数据~' // 提示
        // }
      },
      dataList: [] // 列表数据
    }
  },
  components: {
    MescrollVue // 注册meScroll 组件
  },
  methods: {
    // mescroll组件初始化的回调,可获取到mescroll对象
    mescrollInit(mescroll) {
      this.mescroll = mescroll // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
    },
    upCallback(page, mescroll) {
      // 去异步请求 获取新一页的数据
      // 暂且用定时器模拟
      this.getDataFromnet(
        page.num,
        page.size,
        arr => {
          // 如果页面是第一页 那么 把datalist 置空
          if (page.num === 1) this.dataList = []
          // 将新请求的数据 添加到数据列表
          this.dataList = this.dataList.concat(arr)
          // 数据渲染成功后,隐藏下拉刷新的状态
          this.$nextTick(() => {
            mescroll.endSuccess(arr.length)
          })
        },
        () => {
          // 联网异常,隐藏上拉和下拉的加载进度
          mescroll.endErr()
        }
      )
    },
    // 模拟从网络获取数据
    getDataFromnet(pageNum, pageSize, successCallback, errorCallback) {
      setTimeout(() => {
        const listData = []
        if (pageNum < 6) {
          for (let i = 0; i < pageSize; i++) {
            listData.push('第' + pageNum + '页 ：' + i)
          }
        }
        // 回调
        successCallback(listData)
      }, 1000)
    },
    myClick(index) {
      console.log(this.dataList[index] + ':' + index)
      this.$router.push('/details')
    }
  }
}
</script>

<style lang="less" scoped>
header {
  width: 100%;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background: green;
  color: white;
}
.mescroll {
  position: fixed;
  top: 44px;
  bottom: 0;
  height: auto;
  .data-list {
    .data-li {
      width: 100%;
      height: 50px;
      line-height: 50px;
      padding-left: 10px;
      &:nth-child(odd) {
        background: pink;
      }
      &:nth-child(even) {
        background: skyblue;
      }
    }
  }
}
</style>
