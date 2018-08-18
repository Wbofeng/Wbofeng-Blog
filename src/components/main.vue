<template>
  <el-container class="container">
    <el-header class="header" id="header">
      <el-row>
        <el-col :span="4" :push="0">
          <router-link to="/home" style="color:black;">
            <img class="logo" src="../assets/logo.png">
          </router-link>
        </el-col>
        <el-col :span="2" :push="14">
          <router-link to="/home">
            <div class="navmenu-div">
              <span class="navmenu-container">
                <strong>HOME</strong>
              </span>
            </div>
          </router-link>
        </el-col>
        <!-- <el-col :span="2" :push="12">
          <router-link to="/blogs">
            <div class="navmenu-div">
              <span class="navmenu-container">
                <strong>BLOGS</strong>
              </span>
            </div>
          </router-link>
        </el-col> -->
        <el-col :span="2" :push="14">
          <router-link to="/works">
            <div class="navmenu-div">
              <span class="navmenu-container">
                <strong>WORKS</strong>
              </span>
            </div>
          </router-link>
        </el-col>
        <el-col :span="2" :push="14">
          <router-link to="/tags">
            <div class="navmenu-div">
              <span class="navmenu-container">
                <strong>TAGS</strong>
              </span>
            </div>
          </router-link>
        </el-col>
      </el-row>
    </el-header>
    <el-main class="main">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </el-main>
  </el-container>
</template>
<style scoped>
.container {
  max-width: 1920px;
  min-width: 1440px;
}

.header {
  position: fixed;
  height: 55px !important;
  width: 100%;
  border-bottom: 1px solid #e7e7e7;
  z-index: 10;
  opacity: 1;
  background-color: white;
  transition-duration: 0.5s;
}

.main {
  padding: 0px;
  padding-bottom: 20px;
}

.navmenu-div {
  height: 55px;
}

.navmenu-container {
  font-size: 16px;
  line-height: 55px;
  transition-duration: 0.5s;
  color: black;
}

a {
  text-decoration: none;
}

.navmenu-div:hover > .navmenu-container {
  color: #4a9dbf;
}

.navmenu-container:checked {
  color: black;
}

.navmenu-container:focus {
  color: black;
}

.logo {
  width: 200px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  transform: translateX(100px) .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
<script>
export default {
  watch: {
    srcoll: window.addEventListener('scroll', () => {
      const header = document.getElementById('header')
      header.style.boxShadow = '0 0 16px 0 #e7e7e7'
      header.style.borderBottom = 'none'
      const t = document.documentElement.scrollTop || document.body.scrollTop
      if (t <= 0) {
        header.style.boxShadow = 'none'
        header.style.borderBottom = '1px solid #e7e7e7'
      }
    })
  }
}
</script>
