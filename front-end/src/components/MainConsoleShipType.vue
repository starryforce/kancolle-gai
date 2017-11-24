<template>
  <div class="m-ships">
    <header>

    </header>
    <div class="m-body">
      <div class="m-relatedselelct">
      </div>
      <div class="m-createship">
        <form action="" method="post">
          <p>
            <label for="">类型</label><input type="text" v-model="type"></p>
          <p>
            <label for="">子类型</label><input type="text" v-model="subType"></p>
          <input type="button" @click="submit()" value="提交">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainConsoleShipType',
  data() {
    return {
      type: '',
      subType: '',
    };
  },
  methods: {
    submit() {
      this.$http.post('/v1/ship_types', {
        shipType: this.type,
        shipSubtype: this.subType,
      });
    },
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
.m-ships {
  padding: 10px;
}
</style>
