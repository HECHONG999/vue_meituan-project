<template>
    <div class="page-changeCity">
        <el-row >
            <province />
        </el-row>
        <el-row>
            <hot :title="title" :list="list"/> 
        </el-row>
        <el-row>
           <hot title="最近访问:" :list="recentList" />
        </el-row>
        <el-row>
            <category/>
        </el-row>
    </div>
</template>

<script>
import Province from "@/components/changecity/province.vue"
import Hot from "@/components/changecity/hot.vue"
import Category from "@/components/changecity/category.vue"
import api from "@/api/index.js"
export default {
    components: {
        Province,
        Hot,
        Category
    },
    data () {
    return {
        title: '热门城市',
        list: [],
        recentList: []
    }
    },
    created () {
        api.getHotCity().then( res => {
            this.list = res.data.data
        })
        api.getRecentCity().then( res => {
            this.recentList = res.data.data
        })
    }
}
</script>