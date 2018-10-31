<template>
  <el-container>
    <el-header>
      计划明细
    </el-header>
    <el-main>
      <el-container>
        <el-header>
          <h3>白名单</h3>
          <el-table
            ref="singleTable"
            :data="tableData"
            highlight-current-row
            @current-change="handleCurrentChange"
            style="width: 100%">
            <el-table-column
              type="index"
              width="50">
            </el-table-column>
            <el-table-column
              property="date"
              label="日期"
              width="120">
            </el-table-column>
            <el-table-column
              property="name"
              label="姓名"
              width="120">
            </el-table-column>
            <el-table-column
              property="address"
              label="地址">
            </el-table-column>
          </el-table>
        </el-header>
        <el-main>
          <h3>列</h3>
        </el-main>
      </el-container>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'syncPlanDetail'
}
</script>

<style scoped>

</style>
