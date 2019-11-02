<template>
  <div>
    <div class="mapgoods">
      <div>
        <img class="map" src="@/image/map.png" alt />
      </div>
      <div class="goodslist">
        <span class="title">猜你喜欢</span>
        <div class="goods" v-for="( datalist, index)  in renderLsit" :key="index">
          <img class="goodsImg" :src="datalist.image" alt />
          <div class="title">{{datalist.title}}</div>
          <div>
            <div class="block font">
              <el-rate v-model="datalist.score" :colors="colors"></el-rate>
            </div>

            <span
              class="commond-number"
            >{{datalist.avgPrice}}评价</span>
          </div>
          <span class="address" v-for=" (itemTap, index) in datalist.tab" :key="index">{{itemTap}}</span>
          <div class="price-box">
            <span>
              <span class="yuan">￥</span>
              <span class="price-number">245</span>
              <span class="price-desc">起</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      value1: 6,
      value2: 4,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"], // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      renderLsit: []
    };
  },
  created() {
    api.getGoodsList().then(res => {
      this.renderLsit = res.data.data;
      console.log(res.data.data);
    });
  }
};
</script>

<style lang="scss">
@import "@/assets/css/products/map.scss";
</style>