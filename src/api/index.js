import axios from '@/axios.js'

var api = {
  searchHotWords (params) {
    return axios.get('/api/meituan/header/searchHotWords.json', {params})
  },
  getSearchList () {
    return axios.get('/api/meituan/header/search.json', {
      id: '何冲很帅'
    })
  },
  getCurPosition () {
    return axios.get('/api/meituan/city/getPosition.json')
  },
  getHotCity () {
    return axios.get('/api/meituan/city/hot.json')
  },
  getRecentCity () {
    return axios.get('/api/meituan/city/recents.json')
  },
  getProvince () {
    return axios.get('/api/meituan/city/province.json')
  },
  getCityList () {
    return axios.get('/api/meituan/city/cityList.json')
  },
  getMenuList () {
    return axios.get('/api/meituan/index/nav.json')
  },
  getStyleList () {
    return axios.get('/api/meituan/index/resultsByKeywords.json')
  },
  getGoodsList () {
    return axios.get('/api/meituan/list/goodsList.json')
  }

}

export default api
