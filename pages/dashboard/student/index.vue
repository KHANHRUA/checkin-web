<template>
  <el-container style="display: flex;justify-content: center">
    <el-row :gutter="20" style="width: 60%;min-width: 400px; border-radius: 5px;border: #333333 1px solid;margin-top: 20px;padding: 10px">
      <el-col :span="24" style="padding: 20px">
        <el-text style="font-size: 30px">
          {{$t('Manager')}}
        </el-text>
      </el-col>
      <el-col :span="24" :lg="12">
        <el-button class="buttonManager">
          {{$t('Class list')}}
        </el-button>
      </el-col>
      <el-col :span="24" :lg="12">
        <el-button class="buttonManager">
          {{$t('Session attended')}}
        </el-button>
      </el-col>
    </el-row>
  </el-container>
</template>
<script setup>
definePageMeta({
  layout: "dashboard"
})
</script>
<style lang="css">
.el-col-24{
  margin-bottom: 10px;
}

.buttonManager{
  width: 100%;
  height: 50px;
}
</style>