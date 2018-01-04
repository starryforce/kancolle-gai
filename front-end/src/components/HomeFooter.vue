<template>
  <el-footer class="m-footer">
    <section class="content">
      Copyright &copy; gakki.tv
      <span class="creator">By: <a href="https://github.com/starryforce" target="_ablank">starryforce</a></span>
    </section>
  </el-footer>
</template>

<script>
export default {
  name: 'HomeFooter',
};
</script>

<style lang="scss" scoped>
.m-footer {
  background: linear-gradient(to bottom, #404040, #464646, #404040);
  .content {
    position: relative;
    width: 1160px;
    margin: 0 auto;
  }
  .creator {
    position: absolute;
    right: 25px;
    top:10px;
  }
}
</style>
