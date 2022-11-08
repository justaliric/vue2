<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header"
           class="clearfix">
        <span>CDTU</span>
      </div>
      <el-form :model="form"
               status-icon
               :rules="rules"
               ref="form"
               label-width="50px"
               class="demo-ruleForm">
        <el-form-item label="账号"
                      prop="username">
          <el-input v-model="form.username"
                    autocomplete="off">
          </el-input>
        </el-form-item>
        <el-form-item label="密码"
                      prop="password">
          <el-input type="password"
                    v-model="form.password"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     @click="login('form')">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>

  </div>
</template>

<script>
import { nameRule, passRule } from '../utils/valid';
import { setToken } from "@/utils/setToken";
import { login } from "@/api/api";

export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ validator: nameRule }],
        password: [{ validator: passRule }]
      }

    }
  },
  methods: {
    login (form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          console.log(this.form);
          login(this.form).then(res => {
            if (res.data.status === 200) {
              setToken('username', res.data.username)
              setToken('token', res.data.token)
              this.$message({ message: res.data.message, type: 'success' })
              this.$router.push('/home')
            }
          })
        } else {
          console.error(this.form);
        }
      });
    },
  },
}
</script>
<style lang="scss">
.login {
  width: 100%;
  height: 100%;
  position: absolute;
  background: url('../assets/img/login.jpg') top no-repeat;

  .el-card {
    background-color: #606f7b57;
    border: 1px solid rgba(48, 45, 45, 0.716);
    color: gainsboro;
    font-weight: 300;
  }

  .box-card {
    width: 400px;
    margin: 200px auto;
    .el-form .el-form-item label {
      color: gainsboro;
    }
    .el-button {
      width: 100%;
    }
    .el-card__header {
      font-size: 26px;
    }
  }
}
</style>