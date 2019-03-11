import fetch from '@/lib/fetch'
// import utils from '@/lib/utils'

/**
 * @description: 获取列表
 * @param {type} 
 */
export const getOrderList = (params) => {
  return fetch({
    url: `/admin/pages/`,
    params: params,
    method: 'GET'
  })
}

export const userLogin = (params) => {
  return fetch({
    url: `/admin/users/login`,
    data: params,
  })
}