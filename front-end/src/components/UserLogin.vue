<template>
  <section class="m-login">
    <h1>登录</h1>
    <el-form ref="login" :model="login" :rules="loginRules" status-icon label-width="80px">
      <el-form-item label="昵称" prop="name">
        <el-input v-model.trim="login.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model.trim="login.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="processLogin('login')">登录</el-button>
        <el-button @click="resetInfo('login')">重置</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
export default {
  name: 'UserLogin',
  data() {
    return {
      login: {
        name: '',
        password: '',
      },
      loginRules: {
        name: [
          { required: true, message: '请输入昵称', trigger: 'blur' },
          { min: 5, max: 16, message: '长度在 5 到 16 个字符', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    processLogin(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http.post('/v1/login', {
            name: this.login.name,
            password: this.login.password,
          }).then((response) => {
            this.result = JSON.stringify(response.data);
            this.$refs[formName].resetFields();
          });
        } else {
          return false;
        }
        return false;
      });
    },
    resetInfo(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="scss">
.m-login {
  width: 400px;
  h1 {
    text-align: center;
    font-size: 2.5rem;
    margin: 50px auto;
  }
}
</style>
