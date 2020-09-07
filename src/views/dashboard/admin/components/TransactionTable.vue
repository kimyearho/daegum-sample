<template>
  <el-table :data="list" style="width: 100%;padding-top: 15px;">
    <el-table-column label="Order_No" min-width="200">
      <template slot-scope="scope">
        {{ scope.row.order_no }}
      </template>
    </el-table-column>
    <el-table-column label="Price" width="195" align="center">
      <template slot-scope="scope"> ¥{{ scope.row.price }} </template>
    </el-table-column>
    <el-table-column label="Status" width="100" align="center">
      <template slot-scope="{ row }">
        <el-tag :type="row.status">
          {{ row.status }}
        </el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      list: null,
      cols: [
        {
          prop: 'order_no',
          label: 'Order_No',
          width: 500,
          sortable: true
        },
        {
          prop: 'price',
          label: 'Price',
          width: 50
        },
        {
          prop: 'status',
          label: 'Status',
          width: 50
        }
      ]
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.list = require('@/api/list.json').data
    }
  }
}
</script>
