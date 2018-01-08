<template>
  <el-container>
    <el-aside width="auto">
      <NavMenu />
    </el-aside>
    <el-main class="m-home">
      <div class="top">
        <el-carousel class="carousel" :interval="4000" type="card" height="300px">
          <el-carousel-item v-for="item in shipCards" :key="item.id">
            <router-link :to="'/card_detail/'+item.id">
              <img :src="item.preview" :alt="item.name">
            </router-link>
          </el-carousel-item>
        </el-carousel>
        <section class="panel">
            <p>头像占位符</p>
            <p>描述占位符</p>
            <p>个人信息占位符</p>
            <router-link to="/console/card">
              <button>上传魔改</button>
            </router-link>
        </section>
      </div>
      <ShowZone class="clearfix" sort="uploadTime">最新</ShowZone>
      <ShowZone class="clearfix" sort="downloadTimes">下载最多</ShowZone>
    </el-main>
  </el-container>
</template>



<script>
import NavMenu from './NavMenu';
import ShowZone from './ShowZone';
import getShipCardsMixin from '../mixin/getShipCards';

export default {
  name: 'HomeMain',
  components: {
    NavMenu,
    ShowZone,
  },
  mixins: [getShipCardsMixin],
  data() {
    return {
      shipCards: [],
    };
  },
  mounted() {
    this.getShipCards({
      sortBy: 'uploadTime',
      limit: 5,
    }).then((datas) => {
      this.shipCards = datas;
    });
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.el-aside{
  overflow: visible;
}
.m-home {
  .top {
    display: flex;
    justify-content: space-around;
  }
  .panel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
    width: 300px;
    height: 300px;
    margin-left: 40px;
    background-color: #cfd6e4;
    & > :first-child {
      margin-bottom: 20px;
    }
    & > :last-child {
      margin-top: 20px;
    }
    button {
      height: 50px;
      width: 120px;
      border-radius: 20px;
      color: #fff;
      background-color: #3eaeb2;
      font-size: 1.5rem;
      text-shadow: 0 0 2px #405d53, 0 0 2px #405d53, 0 0 2px #405d53,
        0 0 2px #405d53, 0 0 2px #405d53, 0 0 2px #405d53, 0 0 2px #405d53;
      &:focus {
        outline: none;
      }
    }
  }
}
.el-carousel {
  $img-width: 218px;
  $img-height: 300px;
  width: $img-width*2;
  img {
    width: $img-width;
    height: $img-height;
  }
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
