<template>
    <el-row class="m-header-topbar m-header">
        <el-col :span="10">
            <geo />
        </el-col>
        <el-col :span="14">
            <m-nav />
        </el-col>
    </el-row>
</template>

<script>
// vue.resource
//   axios 发送网络请求
//         可以拦截请求和响应的功能( 发送求情前: 如校验一些数据等就能用axios来实现)
//         可以把数据直接转化为 json
import geo from './geo.vue';
import mNav from './nav.vue';
export default {
    components: {
        geo,
        mNav
    }
}
</script>

<style lang="scss">
    @import "@/assets/mycss/public/header/topbar.scss"
</style>