<template>
  <el-container>
    <el-aside width="250px">
      <NavMenu />
    </el-aside>
    <el-main>
      <ShowZone class="clearfix" sort="upload_time">最新</ShowZone>
      <ShowZone class="clearfix" sort="download_times">下载最多</ShowZone>
    </el-main>
  </el-container>
</template>

<script>
import NavMenu from './NavMenu';
import ShowZone from './ShowZone';

export default {
  name: 'HomeMain',
  components: {
    NavMenu,
    ShowZone,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
