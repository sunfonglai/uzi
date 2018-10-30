<template>
  <el-container>
    <!--头部-->
    <el-header height="50px">
      <!--<a href="" class="logo">-->
      <!--&lt;!&ndash;<img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=374454640,225596549&fm=27&gp=0.jpg" alt="">&ndash;&gt;-->
      <!--管理员系统-->
      <!--</a>-->
      <div class="nav">

        <a href="" class="cms-a">官网维护</a>
        <div class="userMenu">
          <span class="author">
            <!--<img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3809442943,2036280987&fm=27&gp=0.jpg"  alt="">-->
          </span>
          <el-dropdown>
            <span class="el-dropdown-link">
              设置<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>切换账号</el-dropdown-item>
              <el-dropdown-item>注销</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </el-header>
    <!--主题内容-->
    <el-container>
      <!--侧边栏-->
      <el-aside width="200px">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>导航三</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!--内容-->
      <el-main>
        <router-view id="main"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'test'
}
</script>

<style scoped>
  .el-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    background-color: #B3C0D1;
    color: #333;

  .logo {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;

  img {
    width: 120px;
    height: 60px;
    margin-right: 10px;
  }

  }
  .nav {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;

  .cms-a {
  }

  .userMenu {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    margin-left: 100px;

  .author {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    background-color: #c0c0c0;

  img {
    width: 100%;
    height: 100%;
  }

  }
  .el-dropdown {
    margin-left: 10px;
  }

  }
  }
  }

  .el-aside {
    position: absolute;
    left: 0;
    top: 80px;
    bottom: 0;
    background-color: #D3DCE6;
    color: #333;
    text-align: left;

  .el-menu {
    background-color: transparent;
  }

  }

  .el-main {
    position: absolute;
    left: 200px;
    top: 80px;
    bottom: 0;
    right: 0;
    background-color: #E9EEF3;
    color: #333;
    text-align: left;
    overflow-x: hidden;
    overflow-y: auto;
  }

  body > .el-container {
    min-width: 1000px;
    overflow-x: auto;
    overflow-y: auto;
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 100%;
  }
</style>
