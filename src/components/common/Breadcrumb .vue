<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(items,index) in $route.matched"
                          :key="index">
        {{items.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>