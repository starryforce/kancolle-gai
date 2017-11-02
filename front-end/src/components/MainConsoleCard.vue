<template>
  <div class="m-ships">
    <header>

    </header>
    <div class="m-body">
      <div class="m-relatedselelct">
      </div>
      <div class="m-createship">
        <form action="" method="post">
          <p><label for="">图鉴ID：</label><input type="text"></p>
          <p><label for="">舰名：</label><input type="text"></p>
          <p><label for="">类型</label><input type="text"></p>
          <p><label for="">子类型</label><input type="text"></p>
          <p><label for="">级别</label><input type="text"></p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainConsoleCard',
};
</script>

<style lang="scss" scoped>
.m-ships {
  padding: 10px;
}
</style>
