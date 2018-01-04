<template>
  <el-container>
    <el-aside>
    </el-aside>
    <el-main>
      <el-container>
        <el-header>
        </el-header>
        <el-main>
          <CardThumbnailExplore v-for="item of shipCards" :key="item.key" v-bind="item" />
        </el-main>
        <el-footer>
          <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[1, 2, 3, 4, 5, 10]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="cardTotal"
          :background="true">
          </el-pagination>
        </el-footer>
      </el-container>
    </el-main>
    <el-aside>
    </el-aside>
  </el-container>
</template>



<script>
import CardThumbnailExplore from './CardThumbnailExplore';
import getShipCardsMixin from '../mixin/getShipCards';

export default {
  name: 'ExploreCards',
  components: {
    CardThumbnailExplore,
  },
  mixins: [getShipCardsMixin],
  props: {
    sort: String,
  },
  data() {
    return {
      shipCards: [],
      pageSize: 1,
      currentPage: 1,
      cardTotal: 0,
    };
  },

  mounted() {
    this.getTotal().then((response) => {
      this.cardTotal = response;
    });
    this.getShipCards({
      type: 'detail',
      sortBy: 'uploadTime',
      limit: this.pageSize,
      offset: this.pageSize * (this.currentPage - 1),
      order: 'DESC',
    }).then((datas) => {
      this.shipCards = datas;
    });
  },
  methods: {
    async getTotal() {
      const response = await this.$http.get('/v1/ship_cards', {
        params: {
          type: 'quantity',
        },
      });
      return response.data;
    },
    handleSizeChange(pageSize) {
      this.pageSize = pageSize;
      this.getShipCards({
        sortBy: 'uploadTime',
        limit: pageSize,
        offset: pageSize * (this.currentPage - 1),
      }).then((datas) => {
        this.shipCards = datas;
      });
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
      this.getShipCards({
        sortBy: 'uploadTime',
        limit: this.pageSize,
        offset: this.pageSize * (currentPage - 1),
      }).then((datas) => {
        this.shipCards = datas;
      });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
