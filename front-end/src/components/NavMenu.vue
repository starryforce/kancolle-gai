<template>
  <div>
    <el-switch v-model="isCollapse" active-text="展开" inactive-text="折叠">
    </el-switch>
    <el-menu class="m-menu" unique-opened :collapse="!isCollapse">
      <NavMenuSub v-for="item of menuInfo" :menu-info="item" :key="item.type" />
    </el-menu>
  </div>
</template>


<script>
import NavMenuSub from './NavMenuSub';

export default {
  name: 'NavMenu',
  components: {
    NavMenuSub,
  },
  data() {
    return {
      isCollapse: false,
      menuInfo: [],
    };
  },
  mounted() {
    this.getMenu();
  },
  methods: {
    async getMenu() {
      const result = await this.$http.get('/v1/ship_menu');
      this.menuInfo = result.data;
    },
  },
};
</script>

<style lang="scss" scoped>
.el-switch {
  margin-bottom: 20px;
}
.m-menu:not(.el-menu--collapse) {
  width: 400px;
  min-height: 400px;
}
</style>


