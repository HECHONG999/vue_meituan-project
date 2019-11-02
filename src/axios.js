
import axios from 'axios'
axios.defaults.baseURL = 'http://api.duyiedu.com'
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  config.params = {
    ...config.params, // ...展开运算符为了避免 重新设置的params覆盖config.params
    appkey: '997999HECHONG__1569861150645'
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

export default axios // 导出axios
