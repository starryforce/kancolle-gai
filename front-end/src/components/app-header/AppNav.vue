<template>
  <nav class="m-nav">
    <ul>
      <li>
        <router-link to="/home">主页</router-link>
      </li>
      <li>
        <router-link to="/tutorial">教程</router-link>
      </li>
      <li>
        <router-link to="/tool">工具</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppNav',
};
</script>

<style lang="scss" scoped>
.m-nav {
  background-color: rgba(0, 0, 0, 0.4);
  ul {
    height: 42px;
    margin: 0 auto;
    width: 1160px;
  }
  li {
    float: left;
  }
  a {
    display: block;
    line-height: 42px;
    padding: {
      right: 1rem;
      left: 1rem;
    }
    &:link,
    &:visited,
    &:hover,
    &:focus,
    &:active {
      text-decoration: none;
      color: #fff;
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }
  }
}
</style>
