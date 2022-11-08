<template>
  <div>
    <el-tree :data="menus"
             show-checkbox
             node-key="name"
             :props="defaultProps"
             ref="tree">
    </el-tree>
    <el-button @click="getcheckedNodes">node节点获取</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menus: [],
      //将数据展示出来
      defaultProps: {
        label: 'name',
        children: 'children'
      }
    }
  },
  created () {
    this.menus = [...this.$router.options.routes]
    //根据不同角色，勾选不同的菜单权限，将菜单数据交给后端

  },
  methods: {
    getcheckedNodes() {
      let arr = this.$refs.tree.getcheckedNodes()
      console.log(arr);
    }
  },
}
</script>