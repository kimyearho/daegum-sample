<template>
  <div>
    <div class="button-bar" style="margin-bottom: 10px">
      <el-button type="primary" @click="sizeToFit()">Size to Fit</el-button>
      <el-button
        type="primary"
        style="margin: 0 10px"
        @click="autoSizeAll(false)"
      >
        Auto-Size All
      </el-button>
      <el-button type="primary" @click="autoSizeAll(true)">
        Auto-Size All (Skip Header)
      </el-button>
    </div>
    <ag-grid-vue
      style="width: 100%;height: 500px;"
      class="ag-theme-alpine"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :gridOptions="gridOptions"
      :modules="modules"
      @grid-ready="onGridReady"
    >
    </ag-grid-vue>
  </div>
</template>

<script>
import { AllCommunityModules } from '@ag-grid-community/all-modules'
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css'
import '@ag-grid-community/all-modules/dist/styles/ag-theme-alpine.css'
import { AgGridVue } from 'ag-grid-vue'

export default {
  data() {
    return {
      columnDefs: null,
      rowData: null,
      gridOptions: null,
      gridApi: null,
      columnApi: null,
      modules: AllCommunityModules
    }
  },
  components: {
    AgGridVue
  },
  beforeMount() {
    this.gridOptions = {}

    this.columnDefs = [
      {
        field: 'athlete',
        minWidth: 150,
        sortable: true,
        unSortIcon: true
      },
      {
        field: 'age',
        maxWidth: 90
      },
      {
        field: 'country',
        minWidth: 150,
        cellClass: function(params) {
          return params.value === 'United States' ? 'rag-green' : 'rag-red'
        }
      },
      {
        field: 'year',
        maxWidth: 100
      },
      {
        field: 'date',
        minWidth: 90
      }
    ]
  },
  mounted() {
    this.gridApi = this.gridOptions.api
    this.gridColumnApi = this.gridOptions.columnApi
  },
  methods: {
    onGridReady() {
      this.$axios
        .get(
          'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json'
        )
        .then((res) => {
          this.rowData = res
        })
    },
    sizeToFit() {
      this.gridApi.sizeColumnsToFit()
    },
    autoSizeAll(skipHeader) {
      var allColumnIds = []
      this.gridColumnApi.getAllColumns().forEach(function(column) {
        allColumnIds.push(column.colId)
      })
      this.gridColumnApi.autoSizeColumns(allColumnIds, skipHeader)
    }
  }
}
</script>
