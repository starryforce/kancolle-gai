<template>
  <section class="m-register">
    <h1>注册一个新的账号</h1>
    <el-form ref="register" :model="register" :rules="registerRules" status-icon label-width="80px">
      <el-form-item label="昵称" prop="name">
        <el-input v-model.trim="register.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model.trim="register.password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="重复密码" prop="checkPassword">
        <el-input type="password" v-model.trim="register.checkPassword" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="processRegister('register')">注册</el-button>
        <el-button @click="resetInfo('register')">重置</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
export default {
  name: 'UserRegister',
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.register.checkPassword !== '') {
          this.$refs.register.validateField('checkPassword');
        }
        callback();
      }
    };
    const confirmPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.register.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };

    return {
      register: {
        name: '',
        password: '',
        checkPassword: '',
      },
      registerRules: {
        name: [
          { required: true, message: '请输入昵称', trigger: 'blur' },
          { min: 5, max: 16, message: '长度在 5 到 16 个字符', trigger: 'blur' },
        ],
        password: [
          { validator: validatePass, trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' },
        ],
        checkPassword: [
          { validator: confirmPass, trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    processRegister(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http.post('/v1/register', {
            name: this.register.name,
            password: this.register.password,
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

<style lang="scss" scoped>
.m-register {
  width: 400px;
  h1 {
    text-align: center;
    font-size: 2.5rem;
    margin: 50px auto;
  }
}
</style>
