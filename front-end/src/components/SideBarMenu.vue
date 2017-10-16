<template>
  <ul>
    <li v-for="(item,index) of shipInfo" :key="index">
      <a v-if="item.type">{{item.type}}</a>
      <a v-if="item.name" :href="item.url">{{item.name}}</a>
      <SideBarMenu v-if="item.subs && item.subs.length>0" :shipInfo="item.subs" />
    </li>
  </ul>
</template>
<script>
export default {
  name: 'SideBarMenu',
  props: {
    shipInfo: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  position: relative;
  width: 150px;
}

li {
  position: relative;
  width: 148px;
  background-color: #666;
}

ul {
  border: {
    style: solid;
    width: 1px;
  }
}

ul ul {
  position: absolute;
  top: -1px;
  right: -150px;
  display: none;
}

ul>li:hover>ul {
  display: block;
}

li:hover {
  background-color: #00a1d6;
}

a {
  color: #fff;
}
</style>
