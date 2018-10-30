<template>
  <!--整体布局-->
  <el-container style="height: 100%;width: 100%" direction="vertical">
    <!--上方信息栏-->
    <el-header height="70px" width="100%" id="header">
      <el-menu id="upmenu"
        class="el-menu-demo"
        mode="horizontal"
        background-color="black"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
      </el-menu>
    </el-header>
    <!--下方布局-->
    <el-container>
      <!--左侧一级菜单-->
      <el-aside  id="navbar" width="220px">
        <el-container>
          <el-main>
            <el-menu  class="el-menu-vertical-demo"
                     background-color="#545c64"
                     text-color="#fff"
                     active-text-color="#ffd04b">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span slot="title">导航一</span>
                </template>
                <el-menu-item-group>
                  <span slot="title">分组一</span>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <span slot="title">选项4</span>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
              </el-menu-item>
              <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
              </el-menu-item>
            </el-menu>
          </el-main>
        </el-container>
      </el-aside>
      <!--右方主菜单-->
      <el-container id="mainframe">
        <!--上方快捷菜单-->
        <el-header >
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </el-header>
        <!--主界面-->
        <el-main>
          <!--<el-button type="primary" v-on:click="buildNavBar">主要按钮</el-button>-->
          <!--<div v-html='menusHtml'>{{menusHtml}}</div>-->
          <component :is="currMainComp"></component>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
/* eslint-disable no-unused-vars */

import axios from 'axios'
import syncPlan from '../syncData/syncPlan'

// import $ from 'home.js'

export default {
  name: 'homePage',
  components: {syncPlan},
  beforeMount: function () {
    console.log('beforeMount  getMenuList begin ')
    this.getMenuList()
    console.log(this.menuList)
    console.log('beforeMount  getMenuList end ')
  },
  mounted: function () {
    // this.getMenuList()
    console.log('mounted')
    console.log(this.menuList)
  },
  created: function () {
    console.log('created')
    console.log(this.menuList)
  },
  beforeUpdate: function () {
    // console.log('beforeUpdate')
    // console.log(this.menuList)
    // this.buildNavBar()
  },
  data () {
    return {
      menuList: '',
      menusHtml: '',
      currMainComp: 'syncPlan'
    }
  },
  methods: {
    checkUser () {
      // handleOpen()
      // console.log(this.menuList)
      // var url = '/pfUrl/pf/user/isSysUser'
      // axios.post(url)
      //   .then(function (response) {
      //     console.log(response)
      //   })
      //   .catch(function (error) {
      //     console.log(error)
      //   })
    },
    getMenuList () {
      console.log('  getMenuList begin ')
      var url = '/pfUrl/menu/getMenuList'
      axios.post(url)
        .then((response) => {
          this.menuList = response.data
          console.log('  getMenuList show data ')
          console.log(response.data)
          console.log(this.menuList)
        })
        .catch(function (error) {
          console.log(error)
        })
      console.log('  getMenuList end ')
    },
    buildNavBar () {
      var menuList = this.menuList //
      var menuHtmlStr = ''
      var menuListTemp = []
      var level1 = 0
      var level2 = 0
      var level3 = 0
      var level3Html = ''
      for (let i = 0; i < menuList.length; i++) {
        if (menuList[i].menuLevel === 1 && menuListTemp.length === 0) {
          // 初始化
          level3Html = ''
          level1++
          menuListTemp.push(menuList[i])
        }
        if (menuList[i].menuLevel === 1 && menuListTemp.length !== 0) {
        // 将上一个循环的末端标签组装
          for (let j = menuListTemp.length - 1; j >= 0; j--) {
          //  先组装二级菜单
            var level2Html = '<el-submenu index="' + level1 + '-' + level2 + '"><template slot="title">选项4</template>' + level3Html + '</el-submenu>'
          }
        }
        if (menuList[i].menuLevel === 2) {
          level2++
          menuListTemp.push(menuList[i])
        }
        if (menuList[i].menuLevel === 3) {
          level3++
          level3Html = level3Html + '<el-menu-item index="' + level1 + '-' + level2 + '-' + level3 + '">' + menuList[i].menuName + '</el-menu-item>'
        }
      }
      this.menusHtml = menuHtmlStr
      this.menusHtml = level3Html
      console.log(level3Html)
    }
  }
}
</script>

<style scoped>

  #header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    background-color: black;
    color: #333;
  }

  #navbar {
    position: absolute;
    left: 0;
    top: 60px;
    bottom: 0;
    background-color: #545c64;
    color: #333;
    text-align: left;
    width: 50px;
  }

  #upmenu {
    display: flex;
    display: -webkit-flex;
    align-items: right;
    -webkit-align-items: center;
    margin-left: 70%;
  }

  #mainframe{
    position: absolute;
    left: 200px;
    top: 60px;
    bottom: 0;
    right: 0;
    background-color: #E9EEF3;
    color: #333;
    text-align: left;
    overflow-x: hidden;
    overflow-y: auto;
  }

</style>
