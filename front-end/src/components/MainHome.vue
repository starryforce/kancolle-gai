<template>
  <div>
    <SideBar class="g-side" />
    <div class="g-main">
      <ShowZone class="m-hot" />
      <ShowZone class="m-carousel" />
      <ShowZone class="m-top" />
      <ShowZone class="m-new" />
    </div>
  </div>
</template>

<script>
import SideBar from './SideBar';
import ShowZone from './ShowZone';

export default {
  name: 'MainHome',
  components: {
    SideBar,
    ShowZone,
  },
};
</script>

<style lang="scss" scoped>
.g-main {
  padding: 10px 0;
  min-height: 400px;
  background-color: #ddd;
}

.g-side {
  float: left;
  margin-left: -150px;
}
</style>
