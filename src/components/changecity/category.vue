<template>
    <div class="category">
        <dl class="m-categroy">
            <dt>按首拼音字母选择:</dt>
            <dd v-for="(item, index) in wordList" :key="index">
                <!-- 这里利用 a标签的锚点作用来进行哈希 拼接跳转到对应的 id 区域 -->
                <a :href="'#city-' + item">{{item}}</a>
            </dd>
        </dl>
        <dl class="m-categroy-section" v-for="(item, index) in cityGroup" :id="'city-' + index" :key="index">
            <dt>{{index}}</dt>
            <dd v-for="(item ,index) in item" :key="index">{{item.name}}</dd>
        </dl>
    </div>
</template>


<script>
import api from '@/api/index.js'
export default {
    data () {
        return {
            wordList: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
            cityGroup: {},
            arr: []

        }
    },
    created () {

        api.getCityList().then( res => {
            this.arr = res.data.data

            let obj = {}
            this.arr.forEach( (item, index) => {
            if( !obj[item.firstChar.toUpperCase()]) {
                obj[item.firstChar.toUpperCase()] = []
            }

            obj[item.firstChar.toUpperCase()].push(item)
        })
         this.cityGroup = obj

        })

    },
}
</script>

<style lang="scss">
    @import "@/assets/css/changecity/categroy.scss";
</style>