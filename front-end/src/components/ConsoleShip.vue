<template>
  <el-container>
    <el-header>舰船管理</el-header>
    <el-main>
      <el-form
        ref="form"
        :model="form"
        label-width="80px">
        <el-form-item label="图鉴ID">
          <el-input
            v-model="form.code"
            placeholder="请输入图鉴ID" />
        </el-form-item>
        <el-form-item label="舰名">
          <el-input
            v-model="form.name"
            placeholder="请输入舰名" />
        </el-form-item>
        <el-form-item label="类型">
          <el-cascader
            expand-trigger="hover"
            :options="options"
            v-model="form.type"
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
      form: {
        code: '',
        name: '',
        type: [],
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
        code: Number(this.form.code),
        name: this.form.name,
        ship_type_id: this.form.type[1],
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
