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
  .content {
    width: 1160px;
    margin: 0 auto;
  }
  .creator {
    float: right;
  }
}
</style>
