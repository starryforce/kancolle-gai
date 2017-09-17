<template>
  <header class="m-header">
    <app-nav></app-nav>
    <div class="g-container">
      <div class="m-logo">
        <a href="#"></a>
      </div>
      <div class="m-search">
        <form action="" class="box">
          <input type="text">
          <input type="submit" value="搜索">
        </form>
      </div>
    </div>
  </header>
</template>

<script>
import AppNav from './AppNav';

export default {
  name: 'AppHeader',
  components: {
    AppNav,
  },
};
</script>

<style lang="scss" scoped>
.m-header {
  background: {
    image: url("../../temp/starrynight.jpg"); //暂时用B站头图，大小合适。。。
    // image: url("//i0.hdslb.com/bfs/archive/17759bd2d61eb97e992642f79a15ddabd015d0dc.png");
    position: center;
  }
}

.g-container {
  position: relative;
  width: 1160px;
  height: 138px;
  margin: 0 auto;
}

.m-logo {
  position: absolute;
  bottom: 20px;
  a {
    display: block;
    width: 100px;
    height: 100px;
    background: {
      size: 100px 100px;
      image: url("../../assets/logo.png");
      repeat: no-repeat;
    }
  }
}

.m-search {
  position: absolute;
  right: 20px;
  bottom: 25px;
}
</style>
