<template>
  <el-container id="app" direction="vertical">
    <HomeHeader />
    <router-view></router-view>
    <HomeFooter />
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
<style lang="scss">

</style>
