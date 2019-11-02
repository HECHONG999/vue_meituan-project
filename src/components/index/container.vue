<template>
  <div class="m-istyle">
    <dl @mouseover="over">
      <!-- nav 是父组件用子组件的时候哦 传递来的数据 -->
      <dt>{{nav.title}}</dt>
      <dd data-type="all" :class="{active: kind == 'all'}">全部</dd>
      <dd data-type="spa" :class="{active: kind == 'spa'}">约会</dd>
      <dd data-type="food" :class="{active: kind == 'food'}">聚餐</dd>
      <dd data-type="movie" :class="{active: kind == 'movie'}">电影演出</dd>
    </dl>
    <ul class="ibody">
      <!-- getScenes 需要像后端请求的数据 -->
      
      <li v-for="(item, index) in getScenes" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image" />
          <div class="cbody">
            <div class="title">{{item.title}}</div>
            <div class="sub-title" :title="item.subTitle">{{item.subTitle}}</div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">￥</span>
                <span class="current-price numfont">{{item.price}}</span>
              </span>
              <span class="old-price">{{item.oldPrice}}</span>
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
          </div>
        </el-card>
      </li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>
<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      kind: "all",
      getScenes: {
        // title: '有格调',
        // list: [
        //       {
        //     imgUrl: 'https://p1.meituan.net/deal/3938a20bbcb18f7b5c132945a156d86235822.jpg@0_7_440_266a%7C388h_640w_2e_100Q%7C319w_180h_1e_1c',
        //     title:'黄门老灶火锅',
        //     sub_title: '[四季青]锅底8选1，包间免费',
        //     oldPrice: '美团价￥58',
        //     price: '28',
        //     address: '崇文门'
        // },
        //  {
        //     imgUrl: 'https://p1.meituan.net/deal/3938a20bbcb18f7b5c132945a156d86235822.jpg@0_7_440_266a%7C388h_640w_2e_100Q%7C319w_180h_1e_1c',
        //     title:'黄门老灶火锅',
        //     sub_title: '[四季青]锅底8选1，包间免费',
        //     oldPrice: '美团价￥58',
        //     price: '28',
        //     address: '崇文门'
        // }
        // ]
      }
    };
  },
  created() {
    // 页面一加载就获取展示数据
    this.getRequest()
  },
  // 父级组件传过来的nav数据 需要通过props在子组件中定义才能使用
  props: ["nav"],
  methods: {
    getRequest(kind) {
      api.getStyleList().then(res => {
        var dataList = res.data.data;
        for (var prop in dataList) {
          if (prop ==( kind || "all" )) {
            console.log(dataList[prop]);
            this.getScenes = dataList[prop];
          }
        }
      });
    },
    over(e) {
      let dom = e.target;
      let tagName = dom.tagName.toLowerCase();
      if (tagName != "dd") {
        return false;
      }
      this.kind = dom.getAttribute("data-type");

      // 动态获取数据  ajax请求
      this.getRequest(this.kind)

    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>