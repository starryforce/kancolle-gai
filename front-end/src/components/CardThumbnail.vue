<template>
  <section class="m-card_thumbnail">
    <router-link :to="card_url">
      <img :src="preview" :alt="name">
      <p>{{name}}</p>
      <p>
        <span>下载:NA次</span>
        <span>评分:NA</span>
      </p>
    </router-link>
  </section>
</template>

<script>
export default {
  name: 'CardThumbnail',
  components: {
  },
  props: {
    id: {
      type: String,
    },
    name: {
      type: String,
    },
    preview: {
      type: String,
    },
  },
  data() {
    return {
    };
  },
  computed: {
    card_url() {
      return `/card_detail/${this.id}`;
    },
  },
};
</script>
<style lang="scss" scoped>
.m-card_thumbnail {
  float: left;
  margin: 0 20px 20px 0; // 原始大小 218x300
  font-size: 0.5rem;
  img {
    height: 240px;
    width: 174px;
  }
}
</style>
