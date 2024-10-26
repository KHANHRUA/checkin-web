<template>
  <div class="container" onclick="onclick">
    <div class="top"></div>
    <div class="bottom"></div>
    <div class="center">
      <h2>{{$t('Please Sign In')}}</h2>
      <el-form :model="formData" :rules="rules" ref="loginForm">
        <el-form-item prop="username" :label="$t('Username')">
          <el-input v-model.trim="formData.username" :placeholder="$t('Username')">
            <template v-slot:suffix>
              <el-icon>
                <UserFilled />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password" :label="$t('Password')">
          <el-input v-model.trim="formData.password" :type="passwordType" :placeholder="$t('Password')">
            <template v-slot:suffix>
              <div @click="changePasswordType">
                <eyeOffFilled v-if="passwordType === 'password'" style="cursor: pointer"/>
                <eyeOnFilled v-else style="cursor: pointer"/>
              </div>
            </template>
          </el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="submitForm">Login</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import eyeOnFilled from "@/icons/eye-on-filled.vue";
import eyeOffFilled from "@/icons/eye-off-filled.vue";
import {UserFilled} from "@element-plus/icons-vue";

defineComponent({
  components: {
    eyeOnFilled,
    eyeOffFilled
  },
});
</script>

<script lang="ts">
import type {FormInstance} from "element-plus";

export default {
  name: 'loginPage',
  data(){
    return{
      formData:{
        username: '',
        password: ''
      },
      passwordType: 'password',
      rules: {
        username: [{ required: true, message: 'Tài khoản là trường bắt buộc' }],
        password: [{ required: true, message: 'Mật khẩu là trường bắt buộc' }],
      }
    }
  },
  mounted() {
    if (localStorage.getItem('user')){
      navigateTo('/dashboard/student')
    }
  },
  methods:{
    submitForm():void{
      const loginForm = this.$refs.loginForm as FormInstance;
      loginForm.validate((valid:boolean)=>{
        if(valid){
          this.$message({
            message: this.$t('Login success'),
            type: 'success'
          })
          localStorage.setItem('user','{"id":1,"name":"khanh","age":20,"role":"teacher"}')
          navigateTo('/dashboard/student')
        }
        else{
          this.$message({
            message: this.$t('Username or password is incorrect'),
            type: 'error'
          })
        }
      })
    },
    changePasswordType():void{
      this.passwordType = this.passwordType === 'password'? 'text':'password'
    }
  }
}
</script>

<style scoped>

*,*:before,*:after{box-sizing:border-box}

body{
  min-height:100vh;
}

.container{
  position:absolute;
  width:100%;
  height:100%;
  overflow:hidden;

  &:hover,&:active{
    .top, .bottom{
      &:before, &:after{
        margin-left: 200px;
        transform-origin: -200px 50%;
        transition-delay:0s;
      }
    }

    .center{
      opacity:1;
      transition-delay:0.2s;
    }
  }
}

.top, .bottom{
  &:before, &:after{
    content:'';
    display:block;
    position:absolute;
    width:200vmax;
    height:200vmax;
    top:50%;left:50%;
    margin-top:-100vmax;
    transform-origin: 0 50%;
    transition:all 0.5s cubic-bezier(0.445, 0.05, 0, 1);
    z-index:10;
    opacity:0.65;
    transition-delay:0.2s;
  }
}

.top{
  &:before{transform:rotate(45deg);background:#e46569;}
  &:after{transform:rotate(135deg);background:#ecaf81;}
}

.bottom{
  &:before{transform:rotate(-45deg);background:#60b8d4;}
  &:after{transform:rotate(-135deg);background:#3745b5;}
}

.center{
  position:absolute;
  width:400px;
  height:400px;
  top:50%;left:50%;
  margin-left:-200px;
  margin-top:-200px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:30px;
  opacity:0;
  transition:all 0.5s cubic-bezier(0.445, 0.05, 0, 1);
  transition-delay:0s;
  color:#333;

  input{
    width:100%;
    padding:15px;
    margin:5px;
    border-radius:1px;
    border:1px solid #ccc;
    font-family:inherit;
  }
}
</style>