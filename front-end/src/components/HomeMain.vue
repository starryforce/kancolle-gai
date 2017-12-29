<template>
  <el-container>
    <el-aside width="250px">
      <NavMenu />
    </el-aside>
    <el-main>
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in shipCards" :key="item.id">
          <router-link :to="'/card_detail/'+item.id">
            <img :src="item.preview" :alt="item.name">
          </router-link>
        </el-carousel-item>
      </el-carousel>
      <ShowZone class="clearfix" sort="upload_time">最新</ShowZone>
      <ShowZone class="clearfix" sort="download_times">下载最多</ShowZone>
    </el-main>
  </el-container>
</template>


<script>
import NavMenu from './NavMenu';
import ShowZone from './ShowZone';

export default {
  name: 'HomeMain',
  components: {
    NavMenu,
    ShowZone,
  },
  data() {
    return {
      shipCards: [],
    };
  },
  mounted() {
    this.getShipCards({
      sortMode: 'uploadTime',
      limit: 6,
      offset: 0,
      order: 'DESC',
    });
  },
  methods: {
    async getShipCards(params) {
      const response = await this.$http.get('/v1/ship_cards', {
        params,
      });
      this.shipCards = response.data;
    },
  },
};
</script>

<style lang="scss" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
