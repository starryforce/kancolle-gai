<template>
  <el-container>
    <el-header>舰船管理</el-header>
    <el-main>
      <el-form ref="form" :model="selectedOptions" label-width="80px">
        <el-form-item label="图鉴ID">
          <el-input v-model="selectedOptions.code" placeholder="请输入图鉴ID"></el-input>
        </el-form-item>
        <el-form-item label="舰名">
          <el-input v-model="selectedOptions.name" placeholder="请输入舰名"></el-input>
        </el-form-item>
        <el-form-item label="类型">
          <el-cascader expand-trigger="hover" :options="options" v-model="selectedOptions.type" @change="handleChange">
          </el-cascader>
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
  name: 'ConsoleShip',
  components: {
  },

  data() {
    return {
      selectedOptions: {
        code: '',
        name: '',
        type: [],
      },
      options: [],
    };
  },
  mounted() {
    this.initTypeDatas();
  },
  methods: {
    async submit() {
      await this.$http.post('/v1/ships', {
        code: Number(this.selectedOptions.code),
        name: this.selectedOptions.name,
        ship_type_id: this.selectedOptions.type[1],
      });
    },
    handleChange(value) {
      return value;
    },
    async initTypeDatas() {
      const result = await this.$http.get('/v1/ship_types');
      this.options = result.data;
    },
  },
};
</script>

<style lang="scss" scoped>
.el-form {
  width: 500px;
}
.el-cascader {
  width: 100%;
}
</style>
