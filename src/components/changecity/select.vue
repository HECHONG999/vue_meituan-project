<template>
  <div
    :class="['choose-wrap', disabled?'disabled':'']"
    @click="showWrapper"
    v-document-click="documentClick"
  >
    <div class="choose" :class="[disabled?'disabled':'']">
      <span>{{value}}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{'mt-content':true, 'active':showWrapperActive}">
        <h2>{{title}}</h2>
        <div :class="['wrapper', className]">
          <div class="col" v-for="(dataList, index) in rederList" :key="index">
            <span
              v-for="(item, index) in dataList"
              :key="index"
              @click="changeValue(item)"
              :class="{'mt-item': true , 'active': item.name == value}"
            >{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  props: [
    "showWrapperActive",
    "disabled",
    "value",
    "title",
    "list",
    "className"
  ],
  computed: {
    rederList: function() {
      // 计算省份渲染几列
      let col = Math.ceil(this.list.length / 12);
      let resultList = [];
      for (let i = 0; i < col; i++) {
        let data = this.list.slice(i * 12, i * 12 + 12); // 每一列渲染12条数据
        resultList.push(data); // 数据格式 [['山东', '哈尔滨', ....],['重庆','湖南', ...],['湖北','宁夏', ...]]
      }
      return resultList;
    }
  },

  methods: {
    // 开始展示下拉菜单
    showWrapper(e) {
      e.stopPropagation();
      // 提交父级change_active函数执行 传入参数
      if (this.disabled) {
        return;
      }
      this.$emit("change_active", true);
    },
    documentClick() {
      // 点击隐藏下拉展示菜单

      this.$emit("change_active", false);
    },
    changeValue(provinceList) {
      // 提交父级change函数 传入省份所对应的城市数据
      // this.$store.dispatch('setPosition', provinceList)
      this.$emit("change", provinceList);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/select.scss";
</style>