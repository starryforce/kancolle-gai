<template>
  <el-container>
    <el-header>魔改管理</el-header>
    <el-main>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="类型">
          <el-input v-model="form.type"></el-input>
        </el-form-item>
        <el-form-item label="子类型">
          <el-input v-model="form.subType"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">立即创建</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'MainConsoleCard',
  components: {
  },
  data() {
    return {
      form: {
        type: '',
        subType: '',
      },
    };
  },
  methods: {
    submit() {
      this.$http.post('/v1/ship_types', {
        shipType: this.type,
        shipSubtype: this.subType,
      }).then((response) => {
        this.result = JSON.stringify(response.data);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.el-form {
  width: 500px;
}
</style>

