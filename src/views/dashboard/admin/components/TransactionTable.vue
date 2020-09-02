<template>
  <!-- <data-tables
    :data="list"
    :page-size="10"
    :pagination-props="{ pageSizes: [5, 10, 15] }"
  >
    <el-table-column
      v-for="col in cols"
      :prop="col.prop"
      :label="col.label"
      :key="col.label"
    />
  </data-tables> -->
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
import { transactionList } from '@/api/remote-search'

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
      transactionList().then((response) => {
        this.list = response.data.items
      })
    }
  }
}
</script>
