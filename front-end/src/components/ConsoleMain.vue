<template>
  <el-container>
    <el-aside>
      <el-menu>
        <el-menu-item index="1">
          <i class="el-icon-menu" />
          <span slot="title">
            <router-link to="/console/ship_type">舰船类型管理</router-link>
          </span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu" />
          <span slot="title">
            <router-link to="/console/ship">舰船管理</router-link>
          </span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-menu" />
          <span slot="title">
            <router-link to="/console/card">魔改管理</router-link>
          </span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <router-view />
  </el-container>
</template>

<script>

export default {
  name: 'ConsoleMain',
};
</script>

<style lang="scss" scoped>
</style>
