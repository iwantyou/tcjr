<template>
  <div class="home">
    <!--搜索 -->
    <div class="home_h">
      <el-input v-model="positiontime" placeholder="请输入搜索的内容" type="text">
        <el-select slot="prepend" placeholder="请选择" v-model="position_value">
          <el-option
            v-for="(item) in position_sort"
            :key="item.id"
            :value="item.title"
            :label="item.title"
          ></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <!--body 内容 -->
    <div class="home_mid">
      <el-row class="home_mid_main" :span="24">
        <el-col class="home_mid_left" :span="5">
          <ul class="box">
            <li v-for="(item,index) in postionData" :key="index">
              <div class="box_content">
                <a v-for="(pos,index1) in item.left" :key="index1" src="javascript;">{{pos}}</a>
              </div>
              <div class="box_content_right visibale">
                <div class="arrow" :style="'top:'+ (28 + index * 35)+'px'"></div>
                <ul class="box_box" v-for="(posdetail, item_index) in item.right" :key="item_index">
                  <li class="box_box_header">{{posdetail.pos}}</li>
                  <ul class="box_box_content">
                    <li v-for="(item_p, index_p) in posdetail.pos_data" :key="index_p">{{item_p}}</li>
                  </ul>
                </ul>
              </div>
            </li>
          </ul>
        </el-col>
        <el-col class="home_mid_mid" :span="14">
          <el-carousel height="430px" trigger="click" autoplay arrow="hover" :loop="true">
            <el-carousel-item v-for="item in imgData" :key="item">
              <!-- <a src="javascript:;" :style="'bakground-size:cover;background:url('+item+')'" /> -->
              <img :src="item" width="100%" height="100%" />
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col class="home_mid_right" :span="5">
          <!-- <el-tabs v-model="tableValue" :stretch="true">
            <el-tab-pane
              v-for="item in tab"
              :key="item.id"
              :label="item.label"
              :name="item.label"
            >{{item.label}}</el-tab-pane>
          </el-tabs>-->
          <!-- Tab-->
          <ul class="home_mid_right_h">
            <li
              v-for="(item ,index) in tab"
              :class="[{'active': cur == index}]"
              :key="index"
              @click="cur = index;"
            >{{item.label}}</li>
          </ul>
          <!-- 热点-->
          <div class="home_mid_right_content hot_pos" v-if="cur == 0">
            <ul>
              <li v-for="(item, index) in pos_sort" :key="index">
                <span
                  :style=" 'padding-right:10px;color:' + (index == 0 ? '#f94e4c;font-style:italic;': index == 1 ? '#ff910d;font-style:italic;': index ==2 ? '#ffbe00;font-style:italic;': '') "
                >{{index+1}}</span>
                <span class="hot_title">{{item.title}}</span>
                <span>{{item.price}}</span>
              </li>
              <li class="com more">
                查看更多
                <i class="el-icon-caret-right com_arrow"></i>
              </li>
            </ul>
          </div>
          <!-- 资讯 经验 视频 职播-->
          <div class="home_mid_right_content information" v-else>
            <ul style="padding-top:20px;">
              <li v-for="(item ,index) in information" :key="index" style="position:relative">
                <img v-if="cur == 1 || cur == 2" class="information_img" :src="item.img" />
                <img class="information_img" :src="item.video" v-if="cur == 3|| cur ==4" />
                <i v-if="cur == 3|| cur ==4" class="el-icon-video-play play"></i>
                <div class="information_msg">{{item.msg}}</div>
              </li>
              <li class="com more">
                查看更多
                <i class="el-icon-caret-right com_arrow"></i>
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 求职内容 三类-->
    <post-classify></post-classify>
    <post-classify></post-classify>
    <post-classify></post-classify>
    <!-- 热门-->
    <div class="hot_place">
      <h1 class="text-center mar-b30">热门</h1>
      <el-row>
        <el-col class="hot_place_main" :span="8" v-for="(item, index) in hotplace" :key="index">
          <div style="margin-bottom:20px;font-size:18px">{{item.title}}</div>
          <span v-for="item1 in item.hot" :key="item1" class="span">{{item1}}</span>
        </el-col>
      </el-row>
    </div>
    <!--职位搜索 -->
    <!-- <div class="zhiwei_search">
      <h1 class="text-center mar-b30">职位搜索</h1>
      <el-row>
        <el-col :span="6" v-for="(item, index) in engineData" :key="index"></el-col>
      </el-row>
    </div>-->
  </div>
</template>
<script>
import NPprogress from "nprogress";
import postClassify from "@/components/post-classify";
export default {
  name: "home",
  components: {
    postClassify
  },
  data() {
    return {
      positiontime: "",
      position_value: "",
      position_sort: [
        {
          id: "0",
          title: "所有职位"
        },
        {
          id: "1",
          title: "全职"
        },
        {
          id: "2",
          title: "兼职"
        }
      ],
      postionData: [
        {
          left: ["销售", "市场", "客服", "公关"],
          right: [
            { pos: "销售", pos_data: ["1", "2", "3"] },
            { pos: "市场", pos_data: ["1", "2", "3"] },
            { pos: "客服", pos_data: ["1", "2", "3"] },
            { pos: "销售", pos_data: ["1", "2", "3"] },
            { pos: "公关", pos_data: ["1", "2", "3"] }
          ]
        },
        {
          left: ["技工", "工人", "生产", "机械"],
          right: [
            {
              pos: "技工",
              pos_data: [
                "普工",
                "电工",
                "木工",
                "钳工",
                "焊工",
                "钣金工",
                "锅炉工",
                "油漆工",
                "缝纫工",
                "维修工",
                "水暖工",
                "车工",
                "叉车工",
                "手机维修",
                "电梯工",
                "操作工",
                "包装工",
                "水泥工",
                "钢筋工",
                "纺织工",
                "管道工",
                "样衣工",
                "装卸工"
              ]
            },
            {
              pos: "生产",
              pos_data: [
                "质量管理",
                "生产组长",
                "车间主任",
                "工艺设计",
                "生产总监",
                "高级工程师"
              ]
            },
            { pos: "机械", pos_data: ["机械工程", "仪器仪表", "机电版图设计"] }
          ]
        },
        {
          left: ["司机", "物流", "贸易", "保险"],
          right: [
            {
              pos: "司机",
              pos_data: [
                "商务司机",
                "客车司机",
                "出租车司机",
                "班车司机",
                "驾校教练",
                "带车司机",
                "地铁司机",
                "高铁司机",
                "小车司机",
                "快车司机",
                "专车司机"
              ]
            },
            {
              pos: "物流",
              pos_data: [
                "快递员",
                "仓库管理",
                "搬运工",
                "物流专员",
                "物流经理",
                "调度员"
              ]
            },
            {
              pos: "贸易",
              pos_data: [
                "外贸",
                "专员",
                "外贸经理",
                "采购员",
                "采购经理",
                "商务专员",
                "报关员",
                "买手"
              ]
            },
            {
              pos: "保险",
              pos_data: [
                "保险",
                "推销",
                "保险顾问",
                "核保理赔",
                "保险经纪人",
                "保险精算师",
                "契约管理",
                "保险内勤"
              ]
            }
          ]
        },
        {
          left: ["餐饮", "酒店", "超市", "服务业"],
          right: [
            { pos: "销售", pos_data: ["1", "2", "3"] },
            { pos: "销售", pos_data: ["1", "2", "3"] },
            { pos: "销售", pos_data: ["1", "2", "3"] },
            { pos: "销售", pos_data: ["1", "2", "3"] },
            { pos: "销售", pos_data: ["1", "2", "3"] }
          ]
        },
        {
          left: ["销售", "市场", "客服", "公关"],
          right: [
            { pos: "销售", pos_data: ["1", "2", "3"] },
            { pos: "销售", pos_data: ["1", "2", "3"] },
            { pos: "销售", pos_data: ["1", "2", "3"] },
            { pos: "销售", pos_data: ["1", "2", "3"] },
            { pos: "销售", pos_data: ["1", "2", "3"] }
          ]
        },
        {
          left: ["销售", "市场", "客服", "公关"],
          right: [
            { pos: "销售", pos_data: ["1", "2", "3"] },
            { pos: "销售", pos_data: ["1", "2", "3"] },
            { pos: "销售", pos_data: ["1", "2", "3"] },
            { pos: "销售", pos_data: ["1", "2", "3"] },
            { pos: "销售", pos_data: ["1", "2", "3"] }
          ]
        },
        {
          left: ["销售", "市场", "客服", "公关"],
          right: [
            { pos: "销售", pos_data: ["1", "2", "3"] },
            { pos: "销售", pos_data: ["1", "2", "3"] },
            { pos: "销售", pos_data: ["1", "2", "3"] },
            { pos: "销售", pos_data: ["1", "2", "3"] },
            { pos: "销售", pos_data: ["1", "2", "3"] }
          ]
        },
        {
          left: ["销售", "市场", "客服", "公关"],
          right: [
            { pos: "销售", pos_data: ["1", "2", "3"] },
            { pos: "销售", pos_data: ["1", "2", "3"] },
            { pos: "销售", pos_data: ["1", "2", "3"] },
            { pos: "销售", pos_data: ["1", "2", "3"] },
            { pos: "销售", pos_data: ["1", "2", "3"] }
          ]
        },
        {
          left: ["销售", "市场", "客服", "公关"],
          right: [
            { pos: "销售", pos_data: ["1", "2", "3"] },
            { pos: "销售", pos_data: ["1", "2", "3"] },
            { pos: "销售", pos_data: ["1", "2", "3"] },
            { pos: "销售", pos_data: ["1", "2", "3"] },
            { pos: "销售", pos_data: ["1", "2", "3"] }
          ]
        },
        {
          left: ["房地产", "建筑", "装修", "设计"],
          right: [
            { pos: "销售", pos_data: ["1", "2", "3"] },
            { pos: "销售", pos_data: ["1", "2", "3"] },
            { pos: "销售", pos_data: ["1", "2", "3"] },
            { pos: "销售", pos_data: ["1", "2", "3"] },
            { pos: "销售", pos_data: ["1", "2", "3"] }
          ]
        },
        {
          left: ["更多职位"],
          right: [
            { pos: "销售", pos_data: ["1", "2", "3"] },
            { pos: "销售", pos_data: ["1", "2", "3"] },
            { pos: "销售", pos_data: ["1", "2", "3"] },
            { pos: "销售", pos_data: ["1", "2", "3"] },
            { pos: "销售", pos_data: ["1", "2", "3"] }
          ]
        }
      ],
      tab: [
        {
          id: 0,
          label: "排行"
        },
        {
          id: 1,
          label: "资讯"
        },
        {
          id: 2,
          label: "经验"
        },
        {
          id: 3,
          label: "视频"
        },
        {
          id: 4,
          label: "职播"
        }
      ],
      info_data: [
        {
          img:
            "http://t7.baidu.com/it/u=308498223,1547401918&fm=190&app=58&f=JPEG?w=300&h=300&s=2ECA7A234AF333A521A199030100C0E2",
          msg: "还在加班吗？ 骚年，快来换份工作吧，这里应有尽有哦，期待你的加入"
        }
      ], // 资讯
      surr_data: [
        {
          img:
            "http://t7.baidu.com/it/u=308498223,1547401918&fm=190&app=58&f=JPEG?w=300&h=300&s=2ECA7A234AF333A521A199030100C0E2",
          msg: "还在加班吗？ 骚年，快来换份工作吧，这里应有尽有哦，期待你的加入"
        },
        {
          img:
            "http://t7.baidu.com/it/u=308498223,1547401918&fm=190&app=58&f=JPEG?w=300&h=300&s=2ECA7A234AF333A521A199030100C0E2",
          msg: "还在加班吗？ 骚年，快来换份工作吧，这里应有尽有哦，期待你的加入"
        },
        {
          img:
            "http://t7.baidu.com/it/u=308498223,1547401918&fm=190&app=58&f=JPEG?w=300&h=300&s=2ECA7A234AF333A521A199030100C0E2",
          msg: "还在加班吗？ 骚年，快来换份工作吧，这里应有尽有哦，期待你的加入"
        },
        {
          img:
            "http://t7.baidu.com/it/u=308498223,1547401918&fm=190&app=58&f=JPEG?w=300&h=300&s=2ECA7A234AF333A521A199030100C0E2",
          msg: "还在加班吗？ 骚年，快来换份工作吧，这里应有尽有哦，期待你的加入"
        }
      ], // 经验
      video_data: [
        {
          msg:
            "还在加班吗？ 骚年，快来换份工作吧，这里应有尽有哦，期待你的加入",
          video:
            "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3360263291,1175623208&fm=58"
        },
        {
          video:
            "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3360263291,1175623208&fm=58",
          msg: "还在加班吗？ 骚年，快来换份工作吧，这里应有尽有哦，期待你的加入"
        }
      ], // 视频
      dir_data: [
        {
          video:
            "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3360263291,1175623208&fm=58",
          msg: "还在加班吗？ 骚年，快来换份工作吧，这里应有尽有哦，期待你的加入"
        },
        {
          video:
            "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3360263291,1175623208&fm=58",
          msg: "还在加班吗？ 骚年，快来换份工作吧，这里应有尽有哦，期待你的加入"
        },
        {
          video:
            "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3360263291,1175623208&fm=58",
          msg: "还在加班吗？ 骚年，快来换份工作吧，这里应有尽有哦，期待你的加入"
        }
      ], // 职播
      cur: 0,
      pos_sort: [
        { title: "web前端开发工程师", price: "8000/月" },
        { title: "java", price: "8000/月" },
        { title: "大数据研发", price: "10000/月" },
        { title: "人工智能", price: "8000/月" },
        { title: "区块链", price: "8000/月" },
        { title: "物联网", price: "10000/月" },
        { title: "物联网", price: "8000/月" },
        { title: "物联网", price: "8000/月" }
      ],
      information: [],
      tableValue: "所有职位",
      imgData: [
        "https://timg.baidu.com/timg?zhaopin&quality=100&size=w700&sec=1566954877&di=7fb26fe54fd8525e12b9b79e82e3f68a&src=http://static.open.baidu.com/media/ch6/png/pcbanner-peixun.png",
        "https://timg.baidu.com/timg?zhaopin&quality=100&size=w700&sec=1566954877&di=478e41e912dcb422c33ea06f5178bca8&src=http://static.open.baidu.com/media/ch6/jpg/ruzhu_1380x1040_2.jpg",
        "https://timg.baidu.com/timg?zhaopin&quality=100&size=w700&sec=1566954877&di=3bb79ff171da5d6c7d07f05e0003e1d2&src=http://static.open.baidu.com/media/ch6/jpg/quanzhi_1380x1040_2.jpg"
      ], // 幻灯片数组
      engineData: [
        {
          imgurl: ""
        }
      ],
      hotplace: [
        {
          title: "热门职位",
          hot: ["前端", "Java", "php", "大数据"]
        },
        {
          title: "热招企业",
          hot: [
            "百度",
            "富士康",
            "万达集团",
            "蒙牛集团",
            "中石油",
            "中国人寿",
            "中国平安",
            "阿里巴巴",
            "中国移动",
            "工商银行"
          ]
        },
        {
          title: "热门区域",
          hot: [
            "北京",
            "上海",
            "广州",
            "深圳",
            "厦门",
            "成都",
            "西安",
            "天津",
            "南京",
            "武汉",
            "沈阳",
            "杭州",
            "合肥",
            "青岛",
            "大连",
            "重庆"
          ]
        }
      ]
    };
  },
  created() {
    NPprogress.start();
    setTimeout(() => {
      NPprogress.done();
    }, 1000);
  },
  watch: {
    cur(value) {
      if (value == 1) this.information = this.info_data;
      if (value == 2) this.information = this.surr_data;
      if (value == 3) this.information = this.video_data;
      if (value == 4) this.information = this.dir_data;
    }
  }
};
</script>
<style scoped>
/* 重置表单 */
.el-select {
  width: 100px;
}
.el-row {
  height: 100%;
}
.el-tabs__item.is-top {
  padding-right: 5px !important;
}
</style>

<style less="scss" scoped>
.text-center {
  text-align: center;
}
.active {
  color: orangered;
  border-bottom: 2px solid orangered;
}
img {
  width: 100%;
  height: 100%;
}
.home {
  background: url("https://zhaopin.baidu.com/static/newpczhaopin/a27d1e713e60967d0db8118311a566c9.jpg")
    no-repeat;
  background-position: top;
  background-size: 1920px 530px;
  letter-spacing: 1px;
  background-color: #f5f5f5;
}
.home_h {
  width: 800px;
  margin: 0 auto;
  padding-top: 50px;
}
.home_mid {
  max-width: 1200px;
  height: 430px;
  margin: 50px auto 30px;
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.7);
  background-color: #fff;
  overflow: hidden;
  border-radius: 5px;
}
.home_mid_main {
  position: relative;
}
.home_mid_left,
.home_mid_mid,
.home_mid_right {
  height: 100%;
}
.home_mid_left {
  background: #000;
  color: #fff;
}
.box {
  list-style: none;
  box-sizing: border-box;
  padding: 20px 0;
}
.box > li {
  transition: background-color 0.5s;
}
.box > li:hover {
  background-color: rgba(255, 255, 255, 0.3);
}
.box_content {
  padding-left: 38px;
  padding-right: 38px;
  display: flex;
  justify-content: space-around;
  line-height: 35px;
}
.box li:hover .box_content_right.visibale {
  display: block;
}
.box_content a {
  font-size: 16px;
  color: #fff;
  text-decoration: none;
  display: inline-block;
}
.box_content_right {
  display: none;
  position: absolute;
  top: 0;
  left: 249px;
  /* box-shadow: 0 0 40px 0 rgba(68, 68, 255, 0.2);
   */
  box-shadow: 0 0 40px 0 rgba(81, 131, 255, 0.55);
  border: 1px solid #5183ff;
  border-radius: 2px;
  border-left: 0;
  height: 430px;
  width: 700px;
  box-sizing: border-box;
  z-index: 99;
  color: #000;
  background: #fff;
  padding: 20px 15px;
}
.box_content_right .arrow {
  content: "";
  width: 0;
  height: 0;
  border-width: 10px;
  border-color: transparent #fff transparent transparent;
  position: absolute;
  left: -20px;
  z-index: 100;
  border-style: solid;
}
.home_mid_mid a {
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  outline: none;
}
.box_box {
  list-style: none;
}
.box_box > li {
  display: inline-block;
  padding: 6px 12px;
}
.box_box .box_box_header {
  font-weight: 500;
  font-size: 18px;
  padding: 6px 12px;
  display: block;
  padding-bottom: 0;
}
.box_box_content {
  display: inline-block;
  white-space: wrap;
  padding-left: 20px;
}
.box_box_content > li {
  display: inline-block;
  padding: 6px 8px;
  color: #666;
  transition: color 0.35s;
  cursor: pointer;
}
.box_box_content > li:hover {
  color: #5183ff;
}
.home_mid_right ul {
  list-style: none;
  padding-left: 10px;
}
.home_mid_right ul > li {
  display: inline-block;
  font-size: 16px;
  padding: 5px 5px 12px;
  transition: border-color 0.35s;
}
.home_mid_right_h {
  cursor: pointer;
}
.home_mid_right ul.home_mid_right_h > li:hover {
  color: orangered;
  border-bottom: 2px solid orangered;
}
.hot_pos ul {
  list-style: none;
  margin-top: 20px;
}
.home_mid_right_content ul > li {
  font-size: 14px;
  padding-left: 15px;
  cursor: pointer;
  position: relative;
}
.home_mid_right_content ul > li:hover,
.home_mid_right_content ul > li:hover span {
  color: #5183ff;
}
.hot_pos ul > li span {
  display: inline-block;
}
.hot_title + span {
  color: #666;
}
.com.more {
  display: block;
  text-align: center;
  font-size: 12px;
  padding-top: 25px !important;
}
.com:hover,
.com:hover .com_arrow {
  color: #5183ff;
}
.com_arrow {
  color: #000;
}
span.hot_title {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100px;
  width: 100px;
  vertical-align: bottom;
}
.information ul {
  list-style: none;
}
/* .information ul > li:nth-child(1) {
  padding: 20px 15px 10px;
} */
.information ul > li:not(:nth-child(1)) {
  padding: 0px 15px 10px;
}
.information ul > li .information_img {
  display: block;
  width: 60px;
  height: 60px;
  /* float: left; */
  position: absolute;
  top: 0;
  left: 5px;
  border-radius: 4px;
  object-fit: fill;
  z-index: 1;
}
.play {
  position: absolute;
  top: 14px;
  left: 20px;
  color: #fff;
  font-size: 30px;
  z-index: 99;
  transition: transform 0.35s;
}
.play:hover {
  transform: scale(1.2);
}
.information ul > li .information_msg {
  padding-left: 65px;
  margin-bottom: 10px;
  padding-top: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 105px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
}
.hot_place {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px 30px;
  box-sizing: border-box;
}
.hot_place_main {
  padding: 0 30px;
}
.hot_place_main:hover {
  border-radius: 5px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
}
.mar-b30 {
  margin-bottom: 50px;
}
.span {
  display: inline-block;
  padding-right: 10px;
  padding-bottom: 5px;
  color: #666;
}
.span:hover {
  color: #5183ff;
}
</style>
