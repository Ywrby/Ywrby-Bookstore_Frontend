import request from '@/utils/request'

export function getClassifyAndBookList() {
  return request({
    url: '/book/classifyAndBookList',
      method: 'get'
  })
}

export function getBookList(page,pageSize) {
    return request({
      url: '/book/list',
      method: 'get',
      params: { page, pageSize }
    })
  }
  