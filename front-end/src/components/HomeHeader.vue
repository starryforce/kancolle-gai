<template>
  <el-header class="m-header" height="138px">
    <el-container>
      <el-menu class="m-nav" mode="horizontal" default-active="1">
        <el-menu-item index="1">
          <router-link to="/home">主页</router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link to="/tutorial">教程</router-link>
        </el-menu-item>
        <el-menu-item index="3">
          <router-link to="/tool">工具</router-link>
        </el-menu-item>
        <el-menu-item index="4">
          <router-link to="/console">控制台</router-link>
        </el-menu-item>
      </el-menu>
    </el-container>
    <el-container>

    </el-container>
  </el-header>
</template>

<script>

export default {
  name: 'HomeHeader',
  components: {

  },
};
</script>

<style lang="scss" scoped>
.m-header{
}
.m-nav{
  width:1160px;
  margin:0 auto;
}
</style>
