<template>
  <div class="shipCard">
    <router-link to="/carddetail/1">
      <img src="../temp/example.jpg" alt="">
      <p>大和-夏季花火</p>
      <p>
        <span>下载:10086次</span>
        <span>评分:10</span>
      </p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ShipCard',
  props: {
    cardInfo: {
      type: 'object',
    },
  },
};
</script>

<style lang="scss" scoped>
.shipCard {
  float: left;
  margin: 0 20px 20px 0; // 原始大小 218x300
  img {
    max-height: 240px;
    max-width: 174px;
  }
}
</style>
