<template>
  <el-container>
    <el-header>舰船类型管理</el-header>
    <el-main>
      <el-form
        ref="shipType"
        :model="shipType"
        :rules="shipTypeRules"
        label-width="80px">
        <el-form-item label="类型" prop="shipType">
          <el-input v-model.trim="shipType.shipType" />
        </el-form-item>
        <el-form-item label="子类型" prop="shipSubtype">
          <el-input v-model.trim="shipType.shipSubtype" />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="createShipType('shipType')">立即创建</el-button>
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
      shipType: {
        shipType: '',
        shipSubtype: '',
      },
      shipTypeRules: {
        shipType: [{ required: true, message: '请输入舰船类型', trigger: 'blur' }],
        shipSubtype: [{ required: true, message: '请输入舰船子类型', trigger: 'blur' }],
      },
    };
  },
  mounted() {
  },
  methods: {
    createShipType(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http.post('/v1/ship_types', this.shipType).then((response) => {
            this.result = JSON.stringify(response.data);
          });
          this.$refs[formName].resetFields();
        } else {
          return false;
        }
        return false;
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
