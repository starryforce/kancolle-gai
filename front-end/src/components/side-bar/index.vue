<template>
  <aside>
    <div class="m-menu">
      <app-menu :shipInfo="initialShipInfo"></app-menu>
    </div>
  </aside>
</template>

<script>
import initialShipInfo from '@/json/newShipInfo.json';
import AppMenu from './AppMenu';

export default {
  name: 'SideBar',
  components: {
    AppMenu,
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


