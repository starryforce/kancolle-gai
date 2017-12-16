<template>
  <div>
    <template v-if="shipInfo && shipInfo[0].type">
      <el-submenu
        v-for="(item) of shipInfo"
        :key="item.type"
        :index="item.type">
        <template slot="title">
          <i class="el-icon-setting" />
          <span>{{ item.type }}</span>
        </template>
        <NavMenuSub
          v-if="item.subs && item.subs.length>0"
          :ship-info="item.subs" />
      </el-submenu>
    </template>
    <template v-if="shipInfo && shipInfo[0].name">
      <el-menu-item
        v-for="(item) of shipInfo"
        :key="item.name"
        :index="item.name">
        {{ item.name }}
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: 'NavMenuSub',
  props: {
    shipInfo: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>

</style>


