<template>
  <div class="dashboard-editor-container">
    <el-row :gutter="8">
      <el-col
        :xs="{ span: 24 }"
        :sm="{ span: 24 }"
        :md="{ span: 24 }"
        :lg="{ span: 12 }"
        :xl="{ span: 12 }"
        :style="styles.cols"
      >
        <h1>PAGE 1 - LEFT</h1>
      </el-col>
      <el-col
        :xs="{ span: 24 }"
        :sm="{ span: 24 }"
        :md="{ span: 24 }"
        :lg="{ span: 12 }"
        :xl="{ span: 12 }"
        :style="styles.cols"
      >
        <h1>PAGE 1 - RIGHT</h1>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'SamplePage1',
  data() {
    return {
      styles: {
        cols: {
          border: '1px solid #ddd',
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
</style>
