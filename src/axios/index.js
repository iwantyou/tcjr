import axios from 'axios'
import jscookie from 'js-cookie'
/* baseURL基础地址 */
export const ajax = axios.create({
  baseURL: '/api'
})

ajax.interceptors.request.use(config => {
  var token = jscookie.get('token')
  if (token) {
    config.headers.authen = token
  }
  return config
}, err => {
  Promise.reject(err).catch(err => err)
})
// eslint-disable-next-line import/export
export * from './post'
// eslint-disable-next-line import/export
export * from './get'
