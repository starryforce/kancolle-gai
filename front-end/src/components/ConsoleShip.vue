<template>
  <el-container>
    <el-header>舰船管理</el-header>
    <el-main>
      <el-form
        ref="ship"
        :model="ship"
        :rules="shipRules"
        label-width="80px">
        <el-form-item label="图鉴ID" prop="code">
          <el-input
            v-model.number="ship.code"
            placeholder="请输入图鉴ID" />
        </el-form-item>
        <el-form-item label="舰名" prop="name">
          <el-input
            v-model.trim="ship.name"
            placeholder="请输入舰名" />
        </el-form-item>
        <el-form-item label="类型">
          <el-cascader
            expand-trigger="hover"
            :options="options"
            v-model="ship.type"
            @change="handleChange" />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submit">立即创建</el-button>
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
      ship: {
        code: '',
        name: '',
        type: [],
      },
      shipRules: {
        code: [{ required: true, message: '请输入图鉴ID', trigger: 'blur' }],
        name: [{ required: true, message: '请输入舰船名称', trigger: 'blur' }],
      },
      shipTypeList: [],
    };
  },
  computed: {
    options() {
      const options = [];
      const arr = [];
      this.shipTypeList.forEach((item) => {
        arr.push(item.ship_type);
      });
      const unique = [...new Set(arr)];
      unique.forEach((item) => {
        options.push({
          value: item,
          label: item,
          children: [],
        });
      });
      this.shipTypeList.forEach((item) => {
        for (let i = 0; i < options.length; i += 1) {
          if (item.ship_type === options[i].value) {
            options[i].children.push({
              value: item.id,
              label: item.ship_subtype,
            });
          }
        }
      });
      return options;
    },
  },
  mounted() {
    this.initTypeDatas();
  },
  methods: {
    async submit() {
      await this.$http.post('/v1/ships', {
        code: Number(this.ship.code),
        name: this.ship.name,
        ship_type_id: this.ship.type[1],
      });
    },
    handleChange(value) {
      return value;
    },
    async initTypeDatas() {
      const result = await this.$http.get('/v1/ship_types');
      this.shipTypeList = result.data;
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
