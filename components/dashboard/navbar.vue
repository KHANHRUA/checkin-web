<template>
  <el-header class="header">
    <el-dropdown>
    <el-button v-if="user" class="el-dropdown-link" style="height: 40px;">
      <Avatar v-if="user" :name="user.name"/>
      <el-text size="large" style="font-weight: bold">{{user.name}}</el-text>
    </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>{{$t('profile')}}</el-dropdown-item>
          <el-dropdown-item @click="logOut">{{$t('log out')}}</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-header>
</template>

<script>
import Avatar from "~/components/dashboard/avatar.vue";

export default {
  name: 'navbar',
  components: {Avatar},
  data(){
    return{
      user: null
    }
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem('user'))
  },
  methods:{
    logOut(){
      localStorage.removeItem('user')
      navigateTo('/auth/login')
    }
  }
}
</script>

<style lang="css" scoped>
.header {
  background-color: #60b8d4;
  display: flex;
  justify-content: end;
  align-items: center;
}
</style>