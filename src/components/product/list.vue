<template>
  <div class="m-products-list">
    <ul>
      <li v-for="item in nav" :key="item.key">{{item.name}}</li>
    </ul>
    <el-row>
      <m-item :meta="item" />
    </el-row>
  </div>
</template>



<script>
import MItem from "./item";
import api from '@/api/index.js'
export default {
  components: {
    MItem
  },

  created () {
    api.getGoodsList().then( res => {

     this.item = res.data.data
     console.log(this.item)
    })
  },

  data() {
    return {
      newItemList: [],
      item:[],
        // {
        // tab:['朝阳', '朝阳区'],
        //   areaName: "长阳镇",
        //   dealItems:[{title: '渲一',price:23, counterPrice:100,saleNum: 1000,},{title:'渲染二',price: 45,counterPrice: 100,saleNum: 1000,},{title: '渲三',counterPrice: 100,saleNum: 1000,},{title:'渲染四'}],
        //   avgPrice: 125,
        //   commentNum: 160,
        //   consumeNum: null,
        //   detailUrl: "",
        //   firstCate: [1, 20632, 20426, 20557],
        //   imgUrl:
        //     "https://p1.meituan.net/dpmerchantpic/0d6de8d1b381c225faaab1f2156dae7f473393.jpg@330w_187h_1e_1c",
        //   itemId: "158809828",
        //   lowPrice: "95.0",
        //   saleNum: null,
        //   score: "4.2",
        //   title: "旺顺阁鱼头泡饼（长阳半岛店）"
        // },
      nav: [
        {
          key: "s-default",
          name: "智能排序",
          active: true
        },
        {
          key: "s-price",
          name: "价格最低",
          active: false
        },
        {
          key: "s-score",
          name: "人气最高",
          active: false
        },
        {
          key: "s-comment",
          name: "评价最高",
          active: false
        }
      ]
    };
  }
};
</script>