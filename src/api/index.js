import fetch from '@/lib/fetch'
// import utils from '@/lib/utils'
//  获取page列表
export const getOrderList = (params) => {
  return fetch({
    url: `/webtestadmin/pages/`,
    params: params,
    method: 'GET'
  })
}
//  登录
export const userLogin = (params) => {
  return fetch({
    url: `/webtestadmin/users/login`,
    data: params,
  })
}
// 增加page list
export const addList = (params) => {
  return fetch({
    url: `/webtestadmin/pages/add`,
    data: params
  })
}
// 更新list
export const updateList = (params) => {
  return fetch({
    url: `/webtestadmin/pages/update`,
    data: params
  })
}
// 更新list
export const removeList = (params) => {
  return fetch({
    url: `/webtestadmin/pages/remove`,
    data: params
  })
}
// 获取图片列表
export const getPicList = () => {
  return fetch({
    url: `/webtestadmin/post/pic`,
    method: "GET"
  })
}
// 移除图片

export const removepic = (params) => {
  return fetch({
    url: `/webtestadmin/post/remove`,
    data: params
  })
}