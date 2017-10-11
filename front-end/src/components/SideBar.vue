<template>
  <aside>
    <div class="m-menu">
      <SideBarMenu :shipInfo="initialShipInfo" />
    </div>
  </aside>
</template>

<script>
import initialShipInfo from '@/json/newShipInfo.json';
import SideBarMenu from './SideBarMenu';

export default {
  name: 'SideBar',
  components: {
    SideBarMenu,
  },
  data() {
    return {
      initialShipInfo,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>


