<template>
  <div id="app">
    <MainHeader class="g-head" />
    <router-view class="g-body"></router-view>
    <MainFooter class="g-foot" />
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader';
import MainFooter from '@/components/MainFooter';

export default {
  name: 'app',
  components: {
    MainHeader,
    MainFooter,
  },
};
</script>

<style lang="scss" src="@/styles/reboot.scss"></style>
<style lang="scss" src="@/styles/tools.scss"></style>

<style lang="scss" scoped>
.g-head,
.g-foot {
  width: 100%;
}

.g-body {
  max-width: 1160px;
  margin: 0 auto;
}
</style>

