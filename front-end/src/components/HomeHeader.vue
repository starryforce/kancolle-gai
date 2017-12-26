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
          class="search_button"
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
  $grey-gradient: linear-gradient(to bottom, #404040, #464646, #404040);
  $light-blue-shadow: 0 0 10px #279293;
  background: $grey-gradient;
  .content {
    width: 1160px;
    margin: 0 auto;
  }
  .search_button {
    background: linear-gradient(to bottom, #156766, #1aa4ab);
  }
  .logo {
    color: #fff;
    font-size: 2rem;
  }
  .nav {
    background: inherit;
    font-weight: bold;
    a {
      color: #fff;
      font-size: 1.3rem;
    }
    li:hover {
      background: $grey-gradient;
      text-shadow: $light-blue-shadow, $light-blue-shadow, $light-blue-shadow,
        $light-blue-shadow, $light-blue-shadow;
    }
  }
}
</style>
