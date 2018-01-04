<template>
  <section class="m-showZone">
    <el-row type="flex" class="row-bg" justify="space-between">
      <el-col :span="6">
        <h1><slot>板块标题</slot></h1>
      </el-col>
      <el-col :span="6">
        <router-link :to="result_url">更多</router-link>
      </el-col>
    </el-row>
    <main>
      <div class="m-cards clearfix">
        <CardThumbnail class="item" v-for="item in shipCards" :key="item.id" v-bind="item" />
      </div>
    </main>
  </section>
</template>


<script>
import CardThumbnail from './CardThumbnail';
import getShipCardsMixin from '../mixin/getShipCards';

export default {
  name: 'ShowZone',
  components: {
    CardThumbnail,
  },
  mixins: [getShipCardsMixin],
  props: {
    sort: String,
  },
  data() {
    return {
      shipCards: [],
    };
  },
  computed: {
    result_url() {
      return `/explore/${this.sort}`;
    },
  },
  async mounted() {
    this.getShipCards({
      sortBy: this.sort,

    }).then((datas) => {
      this.shipCards = datas;
    });
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.m-cards {
  .item {
    float: left;
    margin: 0 20px 20px 0; // 原始大小 218x300
  }
}
</style>
