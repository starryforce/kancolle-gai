<template>
  <el-header class="m-header">
    <el-row
      class="content"
      type="flex"
      align="middle">
      <el-col :span="3">
        <router-link
          class="logo"
          to="/">
          舰娘魔改
        </router-link>
      </el-col>
      <el-col
        :span="5"
        :offset="1">
        <el-input
          v-model="input"
          placeholder="开始翻小姐姐的衣橱"
          clearable />
      </el-col>
      <el-col :span="2">
        <el-button
          type="primary"
          icon="el-icon-search">成为绅士</el-button>
      </el-col>
      <el-col
        :span="7"
        :offset="2">
        <el-menu
          class="nav"
          mode="horizontal"
          default-active="1">
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
      </el-col>
    </el-row>
  </el-header>
</template>

<script>

export default {
  name: 'HomeHeader',
  components: {

  },
  data() {
    return {
      input: '',
    };
  },
};
</script>

<style lang="scss" scoped>
.m-header {
  .content {
    width: 1160px;
    margin: 0 auto;
  }
  .logo {
    font-size: 2rem;
  }
}
</style>
