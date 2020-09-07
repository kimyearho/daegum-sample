<template>
  <el-container>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-input placeholder="Search Node ..." v-model="filterText" />
      </div>
      <el-tree
        :data="data"
        :props="defaultProps"
        :filter-node-method="filterNode"
        default-expand-all
        ref="tree"
      ></el-tree>
    </el-card>
    <el-button
      :icon="!isToggle ? 'el-icon-caret-right' : 'el-icon-caret-left'"
      @click="toggleSide"
    ></el-button>
  </el-container>
</template>

<script>
export default {
  name: 'TreeComponent',
  props: {
    isToggle: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      filterText: '',
      data: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val)
    }
  },
  created() {
    this.data = require('@/api/tree.json').data
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    toggleSide() {
      this.$emit('isShowSide', !this.isToggle)
    }
  }
}
</script>

<style lang="scss" scoped>
.box-card {
  width: 100%;
}
.tree-tray {
  position: absolute;
  top: 50%;
  left: 286px;
  width: 15px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: 9;
}
.tray-btn {
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;
  padding: 0;
  height: 60px;
  background: #c0c4cc;
  border-color: #c0c4cc;
  border-radius: 20px 0 0 20px;
  font-size: 23px;
  color: #606266;
}
</style>
