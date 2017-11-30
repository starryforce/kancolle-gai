<template>
  <el-container>
    <el-aside width="265px">
      <NavMenu />
    </el-aside>
    <el-main>
      Main
    </el-main>
  </el-container>
</template>

<script>
import NavMenu from './NavMenu';

export default {
  name: 'HomeMain',
  components: {
    NavMenu,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
.el-container {
  width: 1160px;
  margin: 0 auto;
}
</style>
