<template>
  <div id="app">
    <app-header class="g-head"></app-header>
    <router-view class="g-body"></router-view>
    <app-footer class="g-foot"></app-footer>
  </div>
</template>

<script>
import AppHeader from '@/components/app-header';
import AppFooter from '@/components/AppFooter';

export default {
  name: 'app',
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style lang="scss" src="@/styles/reboot.scss">

</style>

<style lang="scss" src="@/styles/tools.scss">

</style>

<style lang="scss" scoped>
.g-head {
  width: 100%;
}

.g-body {
  width: 1160px;
  margin: 0 auto;
}

.g-foot {
  width: 100%;
}
</style>

