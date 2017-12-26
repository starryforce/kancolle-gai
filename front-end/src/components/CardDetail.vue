<template>
  <el-container class="m-card_detail">
    <el-main class="main">
      <section class="preview"><img :src="cardDetails.preview" alt=""></section>
      <section class="details">
        <p>标题：{{cardDetails.name}}</p>
        <p>本名：</p>
        <p>舰种：</p>
        <p>素材来源：{{cardDetails.source_url}}</p>
        <p>画师：{{cardDetails.creator}}</p>
        <p>Pixiv ID：</p>
        <p>上传时间：{{cardDetails.created_at}}</p>
        <p>评分：{{cardDetails.rate}}</p>
        <p>下载链接：<a :href="cardDetails.download_url" download>下载</a></p>
      </section>
      <section class="comment">
      </section>
    </el-main>
    <el-aside class="aside">
      <section class="content">

      </section>
    </el-aside>
  </el-container>
</template>


<script>

export default {
  name: 'CardDetail',
  components: {
  },
  props: {
    id: {
      type: String,
    },
  },
  data() {
    return {
      cardDetails: {},
    };
  },
  computed: {
    cardId() {
      return this.id;
    },
  },
  mounted() {
    this.getCardDetail();
  },
  methods: {
    async getCardDetail() {
      const response = await this.$http.get(`/v1/ship_cards/${this.cardId}`);
      this.cardDetails = response.data;
    },
  },
};
</script>
<style lang="scss" scoped>
.m-card_detail {
  .main,
  .aside {
    background-color: #f3eadc;
    border-radius:12px;
    border:solid #7a662e;
  }
  .aside {
    margin-left: 20px;
  }
}
</style>
