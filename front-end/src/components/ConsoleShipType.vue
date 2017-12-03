<template>
  <el-container>
    <el-header>舰船类型管理</el-header>
    <el-main>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="类型">
          <el-input v-model="form.type" placeholder="请输入类型名称"></el-input>
        </el-form-item>
        <el-form-item label="子类型">
          <el-input v-model="form.subType" placeholder="请输入子类型名称"></el-input>
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
  name: 'ConsoleShipType',
  data() {
    return {
      form: {
        type: '',
        subType: '',
      },
    };
  },
  mounted() {
    this.initTypeDatas();
  },
  methods: {
    async initTypeDatas() {
      await this.$http.post('/v1/ship_types', {
        shipType: '1',
        shipSubtype: '1-1',
      });
      await this.$http.post('/v1/ship_types', {
        shipType: '1',
        shipSubtype: '1-2',
      });
      await this.$http.post('/v1/ship_types', {
        shipType: '1',
        shipSubtype: '1-3',
      });
      await this.$http.post('/v1/ship_types', {
        shipType: '2',
        shipSubtype: '2-1',
      });
      await this.$http.post('/v1/ship_types', {
        shipType: '2',
        shipSubtype: '2-2',
      });
    },
    submit() {
      this.$http.post('/v1/ship_types', {
        shipType: this.form.type,
        shipSubtype: this.form.subType,
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
