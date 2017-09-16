<template>
  <header class="g-head">
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
    <div class="m-title">
      <h1 class="m-logo">
        <a href="#">舰娘魔改</a>
      </h1>
      <section class="m-search">
        <form action="" class="box">
          <input type="text">
          <input type="submit" value="搜索">
        </form>
      </section>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style lang="scss" scoped>
.g-head {
  height: 170px;
  width: 100%;
  background: {
    // image: url("/resource/headback.png"); //暂时用B站头图，大小合适。。。
    image: url("//i0.hdslb.com/bfs/archive/17759bd2d61eb97e992642f79a15ddabd015d0dc.png");
    position: center;
  }
}

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

.m-title {
  position: relative;
  margin: 0 auto;
  width: 1160px;
  height: 128px;
}

.m-title .m-logo {
  position: absolute;
  bottom: 20px;
  font-size: 3rem;
}

.m-search {
  position: absolute;
  right: 20px;
  bottom: 25px;
}
</style>
