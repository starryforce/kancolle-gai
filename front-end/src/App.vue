<template>
  <el-container id="app">
    <HomeHeader class="g-head" />
    <router-view class="g-body"></router-view>
    <HomeFooter class="g-foot" />
  </el-container>
</template>

<script>
import HomeHeader from './components/HomeHeader';
import HomeFooter from './components/HomeFooter';

export default {
  name: 'App',
  components: {
    HomeHeader,
    HomeFooter,
  },
};
</script>

<style lang="scss" src="./styles/reboot.scss"></style>

<style lang="scss" scoped>

</style>
