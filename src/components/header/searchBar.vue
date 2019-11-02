<template>
    <div class="search-panel">
        <el-row class="m-header-searchbar">
            <el-col :span="3" class="left">
                <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
            </el-col>
            <el-col :span="15" class="center">
                <div class="wrapper">
                    <el-input v-model="searchWord" placeholder="请搜索商家或地点" @input="input" @focus="focusInput" @blur="blurInput"></el-input>
                    <el-button type="primary" icon="el-icon-search"></el-button>
                    <dl class="hotPlace" v-if="isHotPlace">
                        <dt>热门搜索</dt>
                        <dd  v-for="(item, index) in hotPlaceList" :key="index">
                            <router-link  to="/">{{item}}}</router-link>
                        </dd>
                    </dl>
                    <dl class="searchList" v-if="isSearchList">
                        <dd  v-for="(item, index) in suggestList" :key="index">
                            <router-link  :to="{name: 'goods'}" >{{item}}</router-link>
                        </dd>
                    </dl>
                </div>
                <p class="suggest">
                    <router-link  :to="{name: 'goods', params: {name: item}}" v-for="(item, index) in suggestList" :key="index">{{item}}</router-link>
                </p>
            </el-col>

        </el-row>
    </div>
</template>

<script>
// 需用用到 axios 就引用 axios
// import axios from "@/axios"   // 在哪儿调用呢---  在哪儿获取数据就在那儿使用
import api from "@/api/index.js"
export default {
    data () {
        return {
            searchWord: '',
            isFocus: false,
            hotPlaceList: [],
            searchList: [],
            suggestList: []
        }
    },

    // created  在创建组件的时候获取数据
    created () {

        api.searchHotWords({id:'我是何冲'}).then( res => {
            this.hotPlaceList = res.data.data;
        })

        api.getSearchList().then( res => {
            this.suggestList = res.data.data.list
        })
        // 如果需要调用别的平台上的接口 就需要把域名拼接在地址前面
        //   axios.get('/api/meituan/header/searchHotWords.json',{
        //       params: {
        //           id: '我是何冲'
        //       }
        //   }).then(  res =>  {
        //         console.log(res)
        //         this.hotPlaceList = res.data.data;
        // })
        //     axios.get('/api/meituan/header/search.json',{
        //       params: {
        //           id: '搜索推荐'
        //       }
        //   }).then(  res =>  {
        //         this.suggestList = res.data.data.list;
        //         console.log(res)
        // })

        // 获取数据
        // 这样写的话是获取不到数据的  这样它会默认访问到你打开的localhost:8080 这个服务器
        // axios.get('/api/meituan/header/searchHotWords.json').then(  res =>  {
        // })

        // 如果需要调用别的平台上的接口 就需要把域名拼接在地址前面
        // get 参数一: axios所请求数据的地址  参数二:是传给后端所需要的值
        //   axios.get('/api/meituan/header/searchHotWords.json',{
        //     //   params: {
        //     //       appkey: '997999HECHONG__1569861150645'
        //     //   }
        //   }).then(  res =>  {      // 因为axios是基于promise的promise的http库, 通过.then来处理请求数据后的数据
        //         console.log(res)
        //         this.hotPlaceList = res.data.data;
        //         this.suggestList = res.data.data;
        // })
    },
    computed: {
        isHotPlace () {
            // input触发聚焦事件 并且 searchWord 中没值 isHotPlace 显示
            return !this.searchWord && this.isFocus
        },
        isSearchList () {
            return this.searchWord && this.isFocus
        }
    },
    methods: {
        focusInput () {
            this.isFocus = true
        },
        blurInput () {       // 失去焦点时 下拉框不在显示
            let self = this;
            setTimeout( () => {
            self.isFocus = false
            },200)
        },
        input (e) {
            // console.log(e,'何冲帅')
        }
    }
}
</script>


<style lang="scss">
    @import "@/assets/css/public/header/index.scss";
    @import "@/assets/css/public/header/search.scss"
</style>