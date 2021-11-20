import axios from 'axios'
import { Loading } from 'element-ui'
import { message } from '@/utils/message'

let loadingInstance
const debug = process.env.NODE_ENV !== 'production'
const Http = axios.create({
  baseURL: 'http://rap2api.taobao.org/app/mock/288712/',
  timeout: 60 * 1000,
  withCredentials: true
})

Http.interceptors.request.use(config => {
  // dev模式打印请求参数
  if (debug) { console.log(`%c请求:${config.url}`, 'color:green', config) }
  // 传参中有needLoading 展示loading框
  if ((config.data && config.data.needLoading) || (config.params && config.params.needLoading)) {
    loadingInstance = Loading.service({ fullscreen: true })
  }
  return config
})

Http.interceptors.response.use(response => {
  // 关闭loading
  if (loadingInstance) {
    loadingInstance.close()
  }
  const data = response.data
  // dev模式打印相应参数
  if (debug) { console.log(`%c响应:${response.config.url}`, 'color:red', data) }
  // 下载文件放行
  if (data.code === '666666' && data.msg === 'success') {
    return data
  }
}, error => {
  if (loadingInstance) {
    loadingInstance.close()
  }
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        error.message = '错误请求'
        console.log(400, '错误请求')
        break
      case 401:
        error.message = '未授权，请重新登录'
        message.error('未授权，请重新登录')
        break
      case 403:
        error.message = '拒绝访问'
        message.error('拒绝访问')
        break
      case 404:
        error.message = '请求错误,未找到该资源'
        message.error('请求错误,未找到该资源')
        break
      case 405:
        error.message = '请求方法未允许'
        message.error('请求方法未允许')
        break
      case 408:
        error.message = '请求超时'
        message.error('请求超时')
        break
      case 500:
        error.message = '服务器端出错'
        message.error('服务器端出错')
        break
      case 501:
        error.message = '网络未实现'
        message.error('网络未实现')
        break
      case 502:
        error.message = '网络错误'
        message.error('网络错误')
        break
      case 503:
        error.message = '服务不可用'
        message.error('服务不可用')
        break
      case 504:
        error.message = '网络超时'
        message.error('网络超时')
        break
      case 505:
        error.message = 'http版本不支持该请求'
        message.error('http版本不支持该请求')
        break
      default:
        error.message = `连接错误${error.response.status}`
        message.error(`'连接错误'${error.response.status}`)
    }
  } else {
    error.message = '连接到服务器失败'
    message.error(error.message)
  }
  return Promise.reject(error)
})

export default Http
