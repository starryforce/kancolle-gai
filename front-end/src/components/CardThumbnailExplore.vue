<template>
  <router-link :to="card_url" class="m-card_thumbnail_explore">
    <div class="m-preview">
      <img :src="preview" :alt="name">
    </div>
    <div class="m-introduction">
      <h1>{{name}}</h1>
      <p class="tags">圣诞 冬季 西方</p>
      <p class="download_times">下载 NA次</p>
      <p class="rate">评分 <span >NA</span></p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'CardThumbnailExplore',
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
.m-card_thumbnail_explore {
  display: flex;
  margin: 0 20px 20px 0; // 原始大小 218x300
  .m-preview img {
    height: 300px;
    width: 218px;
  }
  .m-introduction {
    flex-grow: 1;
    margin-left: 20px;
    h1 {
      font-size: 1.5rem;
      color: #000;
    }
    .download_times {
    }
    .rate {
      span {
        font-size: 1rem;
        color: #72a46d;
      }
    }
  }
}
</style>
