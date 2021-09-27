import request from '@/utils/request'

export function getStuClsInfo(token) {
  return request({
    url: '/stu/clsInfo',
    method: 'get',
    params: { token }
  })
}

export function updateStuInfo(data) {
  return request({
    url: '/stu/updateStuInfo',
    method: 'post',
    data
  })
}

export function getStuBookList(token) {
  return request({
    url: '/stu/bookList',
    method: 'get',
    params: { token }
  })
}

export function updateStuBookList(token,bookList) {
  return request({
    url: '/stu/updateBookList',
    method: 'post',
    params: { token,bookList }
  })
}