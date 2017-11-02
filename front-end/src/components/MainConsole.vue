<template>
  <div class="m-console clearfix">
    <aside class="m-menu">
      <ul>
        <li>
          <router-link to='/console/ship'>舰船管理</router-link>
        </li>
        <li>
          <router-link to='/console/shiptype'>舰船类型管理</router-link>
        </li>
        <li>
          <router-link to='/console/card'>魔改管理</router-link>
        </li>
      </ul>
    </aside>
    <router-view class="m-panel"></router-view>
  </div>
</template>

<script>
export default {
  name: 'MainConsole',
};
</script>

<style lang="scss" scoped>
$menu-width:150px;
.m-console {
  .m-menu {
    float: left;
  }
}

.m-menu {
  width: $menu-width;
  padding:10px;
  background-color: #126;
}

.m-panel {
  margin-left: $menu-width;
  background-color: #261;
}
</style>
