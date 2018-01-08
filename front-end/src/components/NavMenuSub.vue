<template>
  <el-submenu v-if="menuInfo.type" :key="menuInfo.type" :index="menuInfo.type">
    <template slot="title">
      <i class="el-icon-setting" />
      <span>{{ menuInfo.type }}</span>
    </template>
    <template v-for="item of menuInfo.subs">
      <NavMenuSub :menu-info="item" :key="item.type" :index="item.type" />
    </template>
  </el-submenu>
  <el-menu-item v-else :key="menuInfo.name" :index="menuInfo.name">
    {{ menuInfo.name }}
  </el-menu-item>
</template>


<script>
export default {
  name: 'NavMenuSub',
  props: {
    menuInfo: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>

</style>


