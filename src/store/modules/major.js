import { getStuClsInfo } from '@/api/stu_info'
import { getToken } from '@/utils/auth'

const mutations = {
  SET_MAJORNAME: (state, majorName) => {
    state.majorName = majorName
  },
  SET_CLSNO: (state, clsNo) => {
    state.clsNo = clsNo
  },
  SET_COLLEGE: (state, college) => {
    state.college = college
  }
}

export default {
  namespaced: true,
  state: {
    token: getToken(),
    title: '班级信息',
    majorName: '',
    clsNo: '',
    college: ''
  },
  mutations,
  actions: {
    getStuClsInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getStuClsInfo(state.token).then((response) => {
          const { data } = response
          if (!data) {
            reject('请求数据失败.')
          }
          const { major, clsNo, college } = data
          commit('SET_MAJORNAME', major)
          commit('SET_CLSNO', clsNo)
          commit('SET_COLLEGE', college)
          console.log('right-major')
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
