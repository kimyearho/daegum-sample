<template>
  <div>
    <div class="button-bar">
      <button @click="sizeToFit()">Size to Fit</button>
      <button style="margin: 0 10px" @click="autoSizeAll(false)">
        Auto-Size All
      </button>
      <button @click="autoSizeAll(true)">
        Auto-Size All (Skip Header)
      </button>
    </div>
    <ag-grid-vue
      style="width: 100%;height: 280px;"
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
      { headerName: 'Make', field: 'make', sortable: true, unSortIcon: true },
      { headerName: 'Model', field: 'model' },
      { headerName: 'Price', field: 'price' },
      {
        headerName: 'Status',
        field: 'status',
        cellClass: function(params) {
          return params.value === 'success' ? 'rag-green' : 'rag-red'
        }
      }
    ]
  },
  mounted() {
    this.gridApi = this.gridOptions.api
    this.gridColumnApi = this.gridOptions.columnApi
  },
  methods: {
    onGridReady() {
      this.rowData = [
        { make: 'Toyota', model: 'Celica', price: 35000, status: 'success' },
        { make: 'Ford', model: 'Mondeo', price: 32000, status: 'success' },
        { make: 'Porsche', model: 'Boxter', price: 72000, status: 'success' },
        { make: 'Porsche', model: 'Boxter', price: 72000, status: 'primary' },
        { make: 'Porsche', model: 'Boxter', price: 72000, status: 'success' }
      ]
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
