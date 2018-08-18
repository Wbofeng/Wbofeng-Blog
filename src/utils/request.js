import axios from 'axios'

const service = axios.create({
  baseURL: 'http://www.wbofeng.top/api/v1/blog', // api的base_url
  timeout: 15000 // 请求超时时间
})

service.interceptors.request.use(config => {
  // console.log(config)
  return config
})

export default service
