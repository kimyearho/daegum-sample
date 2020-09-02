<template>
  <div class="dashboard-editor-container">
    <el-row :gutter="8">
      <el-col :style="styles.sidebar" :span="toggle ? 4 : 1">
        <tree-component :isToggle="toggle" @isShowSide="toggle = !toggle" />
      </el-col>
      <el-col :style="styles.contents" :span="toggle ? 20 : 23">
        <el-card>
          <div slot="header" class="clearfix">
            {{ headTitle }}
          </div>
          <div id="root">
            <google-map
              :center="{ lat: 37.52487, lng: 126.92723 }"
              :zoom="16"
              style="width: 100%; height: 500px"
            >
              <ground-overlay
                source="./overlay.png"
                :bounds="{
                  north: 2.502,
                  south: 2.185,
                  east: 104.0262,
                  west: 103.5998
                }"
                :opacity="0.5"
              >
              </ground-overlay>
            </google-map>
          </div>
          <div class="card-footer">
            <el-badge :value="12" class="item">
              <el-button size="small">comments</el-button>
            </el-badge>
            <el-badge :value="3" class="item">
              <el-button size="small">replies</el-button>
            </el-badge>
            <el-badge :value="1" class="item" type="primary">
              <el-button size="small">comments</el-button>
            </el-badge>
            <el-badge :value="2" class="item" type="warning">
              <el-button size="small">replies</el-button>
            </el-badge>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TreeComponent from '@/components/TreePanel'

export default {
  name: 'SamplePage3',
  components: {
    TreeComponent
  },
  data() {
    return {
      toggle: true,
      headTitle: 'Vue Google Map Sample!',
      styles: {
        sidebar: {
          paddingRight: '8px',
          marginBottom: '30px'
        },
        contents: {
          paddingRight: '8px',
          marginBottom: '30px'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: #f5f5f5;
  position: relative;
  min-height: 90vh;
}
.card-footer {
  margin-top: 32px;
}
.item {
  margin-right: 50px;
}
</style>
