<template>
  <el-container>
    <el-header>同步计划</el-header>
    <el-main>
      <el-container>
        <el-header>
          <el-button type="primary" v-on:click="getSyncPlan" icon="el-icon-search" >查询</el-button></el-header>
        <el-main>
          <el-container>
            <el-main>
              <el-table
                :data="syncPlan"
                style="width: 100%"
                max-height="250">
                <el-table-column
                  fixed
                  prop="SOURCE_ID"
                  label="数据源ID"
                  width="150">
                </el-table-column>
                <el-table-column
                  prop="DB_TYPE"
                  label="数据源类型"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="SOURCE_NAME"
                  label="数据源名称"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="DB_URL"
                  label="连接字符串"
                  width="400">
                </el-table-column>
                <el-table-column
                  prop="APP_VERSION"
                  label="版本号"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="DB_USER_NAME"
                  label="用户名"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="DB_PASSWORD"
                  label="密码"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="TASK_ID"
                  label="任务ID"
                  width="300">
                </el-table-column>
                <el-table-column
                  fixed="right"
                  label="操作"
                  width="120">
                  <template slot-scope="scope">
                    <el-button
                      v-on:click="dialogVisible = true"
                      type="text"
                      size="small">
                       生成计划并开始同步
                    </el-button>
                    <el-dialog
                      title="提示"
                      :visible.sync="dialogVisible"
                      width="30%"
                      :modal-append-to-body='false'
                      :close-on-click-modal="false">
                      <span>请选择同步数据的时间</span><br>
                      <vue-datepicker-local v-model="time" format="YYYY-MM"></vue-datepicker-local>
                      <span slot="footer" class="dialog-footer">
                      <el-button @click="dialogVisible = false">取 消</el-button>
                      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                    </span>
                    </el-dialog>
                  </template>
                </el-table-column>
              </el-table>
            </el-main>
            <el-footer>
              <div class="block">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage4"
                  :page-sizes="[100, 200, 300, 400]"
                  :page-size="100"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="400">
                </el-pagination>
              </div>
            </el-footer>
          </el-container>
        </el-main>
      </el-container>
    </el-main>
  </el-container>
</template>

<script>
import axios from 'axios'
import VueDatepickerLocal from '../../tools/times/VueDatepickerLocal.vue'

export default {
  created: function () {
    this.getSyncPlan()
  },
  name: 'syncPlan',
  methods: {
    getSyncPlan () {
      console.log('  getSyncPlan begin ')
      var url = '/dc/syncData/getSyncPlan'
      axios.post(url)
        .then((response) => {
          this.syncPlan = response.data
          console.log('  getSyncPlan show data ')
          console.log(response.data)
          console.log(this.syncPlan)
        })
        .catch(function (error) {
          console.log(error)
        })
      console.log('  getSyncPlan end ')
    },
    execSyncData (sourceId) {
      var syncDataUrl = '/dc/syncData/execSyncData'
      var qs = require('qs')
      console.log(sourceId)
      axios.post(syncDataUrl, qs.stringify({'sourceId': sourceId}))
        .then((response) => {
          this.taskId = response.data
          for (var plan in this.syncPlan) {
            if (this.syncPlan[plan].SOURCE_ID == sourceId) {//eslint-disable-line
              console.log(this.taskId)
              this.syncPlan[plan]['TASK_ID'] = this.taskId
            }
            // console.log(this.syncPlan)
            if (this.taskId != '') {//eslint-disable-line
              this.$notify({
                title: '成功',
                message: '生成计划成功！',
                type: 'success'
              })
            }
            if (this.taskId == '') {//eslint-disable-line
              this.$notify.error({
                title: '错误',
                message: '生成计划失败，请联系管理员'
              })
            }
          }
          // console.log(this.taskId)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  },
  data: function () {
    return {
      syncPlan: [{
      }],
      currentPage4: 4,
      taskId: '',
      dialogVisible: false,
      time: new Date()
    }
  },
  components: {
    'vue-datepicker-local': VueDatepickerLocal
  }
}

</script>

<style scoped>

</style>
