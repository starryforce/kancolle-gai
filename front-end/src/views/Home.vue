<template>
  <div>
    <side-bar class="g-side"></side-bar>
    <div class="g-main">
      <show-zone class="m-hot"></show-zone>
      <show-zone class="m-carousel"></show-zone>
      <show-zone class="m-top"></show-zone>
      <show-zone class="m-new"></show-zone>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/side-bar';
import ShowZone from '@/components/show-zone';

export default {
  name: 'Home',
  components: {
    SideBar,
    ShowZone,
  },
};
</script>

<style lang="scss" scoped>
.g-main {
  padding:10px 0;
  min-height: 400px;
  background-color: #ddd;
}

.g-side {
  float: left;
  margin-left: -150px;
}
</style>
