<template>
  <div>
    <span class="name">按省份选择:</span>
    <m-select
      :list="provinceList"
       title="省份"
      :className="province"
      :value="province"
      :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive"
      @change="changeProvince"
    />
    <m-select
      :list="cityList"
       title="城市"
      :className="city"
      :value="city"
      :disabled="cityDisabled"
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
      @change="changeCity"
    />
    <span>直接搜索:</span>
    <el-autocomplete 
        v-model="searchWord"
        placeholder="请输入内容"
    ></el-autocomplete>
  </div>
</template>

<script>
import MSelect from "./select.vue";
import api from "@/api/index.js";
export default {
  created () {

    api.getProvince().then( res => {
      // 通过map方法修改数据名 方便与cityList一起渲染
      this.provinceList = res.data.data.map( (item) => {
        item.name = item.provinceName;
        return item
      });
    });

  },
  data() {
    return {
      province: "省份",
      city: "城市",
      restaurants: [],
      provinceActive: false,
      cityActive: false,
      cityDisabled: true,
      provinceList: [],
      cityList: [],
      // 搜素部分
       searchWord:'',
       upDataRegion: {}

    };
  },
  computed: {

  },

  methods: {
    changeCity(item) {
      this.city = item.name;   //更新展示内容
    },
    changeProvince(item) {
      this.province = item.name;
      this.cityDisabled = false;  // 选择省份后解除地区的禁止选择
      this.cityList = item.cityInfoList
    },
    // 利用父组件 来实现组件间的数据通信, 在各个子组件内 通过$emit() 函数来触发
    // 父级的函数，父级获取子组件所传来的参数进行逻辑判断
    changeProvinceActive(flag) {  // flag = true

      this.provinceActive = flag;
      if (flag) {     //若省份下拉菜单显示则城市下拉菜单隐藏
        this.cityActive = false;
      }
    },

    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {    // 相反
        this.provinceActive = false;
      }
    },
  },
  components: {
    MSelect
  }
};
</script>


<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>
