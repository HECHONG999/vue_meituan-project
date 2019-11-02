<template>
<div >
  <dl class="s-item"  v-for="(datalist, index) in meta" :key="index">
    <dt >
      <img 
        :src="datalist.image"
        alt
      />
    </dt>
    <dd>
      <h3>
        <router-link to="/">{{datalist.title}}</router-link>
      </h3>
      <p>
        <el-rate v-model="score" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
        <span v-if="score > 4.5">很好</span>
        <span v-else-if="score > 4">好</span>
        <span v-else-if="score > 3.5">不错</span>
        <span v-else-if="score > 3">一般</span>
        <span v-else>很差</span>
        <span class>{{score}}分</span>
        <span class="s-item-comment-total">{{commentNum}}人评论</span>
      </p>

      <p>
          <span class="s-item-tab">
              <!-- 判断当前tab中数据如果有两条 渲染一次 | -->
              <span v-for="(v, i) in datalist.tab" :key="v" > {{ v + ( i < datalist.tab.length - 1 ? '|' : '' )}} </span>
          </span>
          <span class="s-item-addr">{{datalist.address}}</span>
          <span>
              <a href="#">
                  查看地图
                  <i class="el-icon-location"></i>
              </a>
          </span>
      </p>
      <p>
          
          <span>人均{{datalist.avgPrice}}</span>
      </p>


      <ul class="deal-items">
          <li class="items" v-for="(item, index) in datalist.dealItems" :key="index">
              <p class="deal-title">
                    {{item.title}}
              </p>
              <p>
                  <span class="deal-price">
                      ￥{{item.price}}{{item.priceType}}
                  </span>
                  <span class="deal-old-price">
                     门市价￥{{item.counterPrice}}
                  </span >
                  <span class="deal-sales">已售{{item.saleNum}}</span>
              </p>
          </li>
      </ul>
    </dd>
  </dl>

</div>
</template>

<script>
export default {

    props:['meta'],
    // watch: {
    //   meta: {
    //     handler () {
    //       console.log(this.meta)
    //       console.log('sss')
    //     }
    //   }
    // },
  data() {
    return {
      score: 4,
      commentNum: 98
    };
  }
,
  mounted() {
    console.log(this.meta)
  }
};
</script>