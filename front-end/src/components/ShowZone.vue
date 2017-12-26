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
        <CardThumbnail v-for="item in shipCards" :key="item.id" v-bind="item" />
      </div>
    </main>
  </section>
</template>


<script>
import CardThumbnail from './CardThumbnail';

export default {
  name: 'ShowZone',
  components: {
    CardThumbnail,
  },
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
  mounted() {
    this.getShipCards();
  },
  methods: {
    async getShipCards() {
      const response = await this.$http.get('/v1/ship_cards', {
        params: {
          sortMode: 'uploadTime',
          offset: 0,
          limit: 8,
          order: 'DESC',
        },
      });
      this.shipCards = response.data;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
