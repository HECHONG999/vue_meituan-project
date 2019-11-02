<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">{{$store.state.position.areaName}}美团</el-breadcrumb-item>
    <el-breadcrumb-item>{{$store.state.position.areaName}}火锅</el-breadcrumb-item>
  </el-breadcrumb>
</template>


<script>
export default {

}
</script>

