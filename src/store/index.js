import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataList: [], // 数据列表
    selectedData: '' // 选择的推荐商店
  },
  mutations: {
    getDataList(state, dataList) {
      state.dataList = dataList
    },
    getSelectedData(state, index) {
      state.selectedData = state.selectedData[index]
    }
  },
  actions: {
    getDataList({ commit }) {
      const data = []
      for (let i = 0; i < 20; i++) {
        data.push('第 ' + i + ' 个')
      }
      commit('getDataList', { data })
    }
  },
  getters: {
    // getSelectedData(state, index) {
    //   return state.dataList[index]
    // }
  },
  modules: {
  }
})
