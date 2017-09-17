<template>
  <div class="shipCard">
    <a href="">
      <img src="../../temp/大和示例.jpg" alt="">
      <p>大和-夏季花火</p>
      <p>
        <span>下载:10086次</span>
        <span>评分:10</span>
      </p>
    </a>
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
