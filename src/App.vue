<script setup>
</script>

<template>
  <div id="main-container">
    <el-menu id="main-menu" router>
      <el-menu-item index="/">主页</el-menu-item>
      <el-menu-item index="/health">健康</el-menu-item>
      <el-menu-item index="/training">锻炼</el-menu-item>
    </el-menu>

    <div id="main-page">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
#main-container {
  display: flex;
  border: 1px solid #dcdfe6;
}

#main-menu {
  width: 150px;
}

#main-page {
  flex: 1;
  padding: 15px;
}
</style>
