<template>
    <div class="m-menu">
        <dl class="nav">
            <dt>全部分类</dt>
            <dd v-for="(item, index) in menuList" @mouseleave="menuLeave" @mouseenter="menuEnter(item)" :key="index" >
                <i :class="item.type"></i>
                    {{item.name}}
                <span class="arrow"></span>
            </dd>
        </dl>
        <div v-if="curDetail" class="detail" @mouseenter="detailEnter" @mouseleave="detailLeave">
            <template v-for="(item, index) in curDetail">
                <h4 :key="index">{{item.title}}</h4>
                <span v-for="(item, index) in item.items" :key="item + 'index' + index"> {{item}}</span>
            </template>
        </div>
    </div>
</template>

<script>
import api from "@/api/index.js"
export default {
    data() {
        return {
            menuList: [],
            curDetail: null
        }
    },
    created () {
        api.getMenuList().then( res => {
            this.menuList = res.data.data
        })
    },
    methods: {
        menuEnter(item) {
            // item是触发mouseEnter时调用函数传入进来的数据
            this.curDetail = item.items
            // 每移入一个dd时清除上一个dd展示的延迟
            clearTimeout(this.timer)
        },
        menuLeave () {
            let self = this;
            // 离开menu时延迟200ms 让二级标题消失
            this.timer =  setTimeout(() => {
                self.curDetail = false;
            }, 200);
        },
        detailEnter () {
            // 移入二级标题时清除延迟 让二级标题继续显示
            clearTimeout(this.timer)
        },
        detailLeave () {
            this.curDetail = null;
        }
    }
}
</script>