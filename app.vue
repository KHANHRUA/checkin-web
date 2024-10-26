<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
<script>

</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');

body{
  padding: 0;
  margin: 0;
  font-family: "Nunito", sans-serif;
  font-style: normal;
}

.el-form-item__label:before{
  display: none;
}

.el-form-item__label:after{
  color: var(--el-color-danger);
  content: "*";
  margin-right: 4px;
}
</style>