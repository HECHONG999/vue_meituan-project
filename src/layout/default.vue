<template>
   <el-container class="layout-default">
       <el-header height="">
          <my-header/>
       </el-header>
       <el-main>
           <!-- 通过配置页面路由 传来的页面在router-view中进行渲染-->
            <router-view></router-view>
       </el-main>
       <el-footer>
            <my-footer/>
       </el-footer>
   </el-container>
</template>

<script>
import myHeader from '@/components/header/index.vue';
import myFooter from '@/components/footer/index.vue'
export default {
    components: {
        myHeader,
        myFooter
    }
}
</script>

<style lang="scss">
    @import "@/assets/mycss/public/layout.scss";
</style>