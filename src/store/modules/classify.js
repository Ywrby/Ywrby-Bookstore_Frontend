import { getClassifyAndBookList } from '@/api/books'
import { getToken } from '@/utils/auth'

const mutations = {
  SET_CLASSIFYID: (state, classifyId) => {
    state.classifyId = classifyId
  },
  SET_CLASSIFYNAME: (state, classifyName) => {
    state.classifyName = classifyName
  },
  SET_BOOKLIST: (state, bookList) => {
    state.bookList = bookList
  }
}

export default {
  namespaced: true,
  state: {
    token: getToken(),
    title: '图书类别列表',
    classifyId: '',
    classifyName: '',
    bookList: []
  },
  mutations,
  actions: {
    getClassifyAndBookList({ commit }) {
      return new Promise((resolve, reject) => {
        getClassifyAndBookList().then((response) => {
          const { data } = response
          if (!data) {
            reject('请求数据失败.')
          }
          const { classifyId, classifyName, bookList } = data
          commit('SET_CLASSIFYID', classifyId)
          commit('SET_CLASSIFYNAME', classifyName)
          commit('SET_BOOKLIST', bookList)
          console.log(data)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
