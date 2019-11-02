<template>
    <div class="page-product">
        <el-row>
            <crumbs />
        </el-row>
        <el-row>
            <el-col :span="19">
                <el-row>
                    <category />
                </el-row>
                <el-row>
                    <m-list />
                </el-row>
            </el-col>
            <el-col :span="5">
                <m-mapgoods/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Crumbs from "@/components/product/crumbs.vue"
import Category from "@/components/product/category.vue"
import MList from "@/components/product/list.vue";
import MMapgoods from '@/components/product/mapgoods.vue'
export default {
    components: {
        Crumbs,
        Category,
        MList,
        MMapgoods
    }
}
</script>


<style lang="scss">
    @import '@/assets/css/products/index.scss';
</style>