<template>
  <el-menu default-active="1">
    <NavMenuSub :ship-info="shipInfo" />
  </el-menu>
</template>

<script>
import shipInfo from '@/json/newShipInfo.json';
import NavMenuSub from './NavMenuSub';

export default {
  name: 'NavMenu',
  components: {
    NavMenuSub,
  },
  data() {
    return {
      shipInfo,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>


