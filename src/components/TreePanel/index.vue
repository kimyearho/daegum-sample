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
      data: [
        {
          label: 'Level one 1',
          children: [
            {
              label: 'Level two 1-1',
              children: [
                {
                  label: 'Level three 1-1-1'
                }
              ]
            }
          ]
        },
        {
          label: 'Level one 2',
          children: [
            {
              label: 'Level two 2-1',
              children: [
                {
                  label: 'Level three 2-1-1'
                }
              ]
            },
            {
              label: 'Level two 2-2',
              children: [
                {
                  label: 'Level three 2-2-1'
                }
              ]
            }
          ]
        },
        {
          label: 'Level one 3',
          children: [
            {
              label: 'Level two 3-1',
              children: [
                {
                  label: 'Level three 3-1-1'
                }
              ]
            },
            {
              label: 'Level two 3-2',
              children: [
                {
                  label: 'Level three 3-2-1'
                }
              ]
            }
          ]
        },
        {
          label: 'Level one 4',
          children: [
            {
              label: 'Level two 4-1',
              children: [
                {
                  label: 'Level three 4-1-1'
                }
              ]
            },
            {
              label: 'Level two 4-2',
              children: [
                {
                  label: 'Level three 4-2-1'
                }
              ]
            }
          ]
        },
        {
          label: 'Level one 5',
          children: [
            {
              label: 'Level two 5-1',
              children: [
                {
                  label: 'Level three 5-1-1'
                }
              ]
            }
          ]
        }
      ],
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
