import Http from '@/http/http'

export default {
  getHomeList(params) {
    return Http.get('/homeList', { params: params })
  }
}
