import fetch from '@/lib/fetch'
// import utils from '@/lib/utils'
//  获取page列表
export const getOrderList = (params) => {
  return fetch({
    url: `/webtest/pages/`,
    params: params,
    method: 'GET'
  })
}
//  登录
export const userLogin = (params) => {
  return fetch({
    url: `/webtest/users/login`,
    data: params,
  })
}
// 增加page list
export const addList = (params) => {
  return fetch({
    url: `/webtest/pages/add`,
    data: params
  })
}
// 更新list
export const updateList = (params) => {
  return fetch({
    url: `/webtest/pages/update`,
    data: params
  })
}
// 更新list
export const removeList = (params) => {
  return fetch({
    url: `/webtest/pages/remove`,
    data: params
  })
}
// 获取图片列表
export const getPicList = () => {
  return fetch({
    url: `/webtest/post/pic`,
    method: "GET"
  })
}
// 移除图片

export const removepic = (params) => {
  return fetch({
    url: `/webtest/post/remove`,
    data: params
  })
}