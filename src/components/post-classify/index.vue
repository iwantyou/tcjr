<template>
  <div class="post_classify">
    <el-row>
      <el-col :span="6">
        <div class="left">
          <h1 class="text-center">{{left.post_title}}</h1>
          <h3 class="des text-center">{{left.des}}</h3>
          <div class="classify">
            <el-row>
              <el-col
                :span="12"
                class="deg"
                v-for="(item,index) in left.classify"
                :key="index"
              >{{item}}</el-col>
            </el-row>
          </div>
          <div class="text-center">
            <el-button :type="type" round>查看更多</el-button>
          </div>
        </div>
      </el-col>
      <el-col :span="18">
        <div class="right">
          <el-row>
            <el-col :span="8" class="right_item" v-for="(item ,index) in right" :key="index">
              <h3 style="line-height:30px;">{{item.title}}</h3>
              <div class="flex text-center">
                <div class="item" v-for="(p_item,index1) in item.des" :key="index1">{{p_item}}</div>
              </div>
              <div class="right_name">{{item.name}}</div>
              <div class="right_price">
                <span style="color:orangered;font-size:18px">{{item.price}}</span>
                <span v-for="(item1,index1) in item.wdeg" :key="index1">{{item1}}</span>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'post_classify',
  props: {
    postData: { type: Object }
  },
  data () {
    return {
      type: '',
      left: {
        post_title: '全职有保障',
        des: '被骗有赔付',
        classify: ['司机', '司机', '司机', '司机', '司机', '司机']
      },
      right: [
        {
          title: '郑州富士康招工',
          des: ['郑州', '经验不限', '来自拉勾网'],
          name: '郑州富士康',
          price: '8000-1000',
          wdeg: ['保证', '直投']
        },
        {
          title: '郑州富士康招工',
          des: ['郑州', '经验不限', '来自拉勾网'],
          name: '郑州富士康',
          price: '8000-1000',
          wdeg: ['保证', '直投']
        },
        {
          title: '郑州富士康招工',
          des: ['郑州', '经验不限', '来自拉勾网'],
          name: '郑州富士康',
          price: '8000-1000',
          wdeg: ['保证', '直投']
        },
        {
          title: '郑州富士康招工',
          des: ['郑州', '经验不限', '来自拉勾网'],
          name: '郑州富士康',
          price: '8000-1000',
          wdeg: ['保证', '直投']
        },
        {
          title: '郑州富士康招工',
          des: ['郑州', '经验不限', '来自拉勾网'],
          name: '郑州富士康',
          price: '8000-1000',
          wdeg: ['保证', '直投']
        },
        {
          title: '郑州富士康招工',
          des: ['郑州', '经验不限', '来自拉勾网'],
          name: '郑州富士康',
          price: '8000-1000',
          wdeg: ['保证', '直投']
        }
      ]
    };
  }
};
</script>
<style scoped>
.text-center {
  text-align: center;
}
.post_classify {
  max-width: 1200px;
  box-sizing: border-box;
  margin: 0 auto;
  background-color: #fff;
  padding-top: 15px;
  padding-bottom: 30px;
  border-radius: 6px;
}
.left {
  padding: 10px 15px;
}
h1 {
  padding: 10px 0;
}
.des {
  line-height: 39px;
  letter-spacing: 9px;
  color: #5179ff;
  position: relative;
}
.des::before,
.des::after {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 170px;
  height: 1px;
  background-image: -webkit-linear-gradient(left, #3d99fd, #6c94fe);
}
.des::after {
  bottom: 0;
}
.des::before {
  top: 0;
}
.deg {
  margin: 10px auto;
}
.deg:nth-child(2n) {
  text-align: left;
  padding-left: 20px;
  border-left: 2px solid #ccc;
}
.deg:nth-child(2n + 1) {
  text-align: right;
  padding-right: 20px;
}
.classify {
  padding: 20px 15px 15px;
}
.right {
  padding-top: 26px;
}
.flex {
  display: flex;
}
.item,
.right_name,
.right_price {
  position: relative;
  font-size: 14px;
  color: #666;
}
.item:not(:nth-child(1)) {
  padding: 5px 10px;
}
.item:nth-child(1) {
  padding: 5px 10px 5px 0;
}
.item:not(:nth-child(1))::after {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  height: 15px;
  width: 3px;
  background-color: #ccc;
}
.right_item {
  padding: 5px 15px 25px 20px;
}
.right_name,
.right_price {
  padding-bottom: 5px;
}
.right_name {
  margin-bottom: 10px;
}
.right_price span:not(:nth-child(1)) {
  font-size:12px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0px 8px;
  margin-right: 5px;
  color: #000;
  position:relative;
  top:-2px;
}
</style>
