import fetch from '@/lib/fetch'
// import utils from '@/lib/utils'
//  获取page列表
export const getOrderList = (params) => {
  return fetch({
    url: `/admin/pages/`,
    params: params,
    method: 'GET'
  })
}
//  登录
export const userLogin = (params) => {
  return fetch({
    url: `/admin/users/login`,
    data: params,
  })
}
// 增加page list
export const addList = (params) => {
  return fetch({
    url: `/admin/pages/add`,
    data: params
  })
}