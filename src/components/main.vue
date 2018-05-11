/*
 * MIT License
 *
 * Copyright (c) 2017 SmartestEE Co., Ltd..
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the 'Software'), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/*
 * Revision History:
 *     Initial: 2018/3/10     Wbofeng
 */
<template>
  <el-container>
    <el-header class="header" id="header">
      <el-row style="z-index: 10">
        <el-col :span="4" :push="1">
          <router-link to="/home" style="color:black;">
            <img class="logo" src="../assets/logo.png" @click="gohome()">
          </router-link>
        </el-col>
        <el-col :span="2" :push="14">
          <router-link to="/home" style="color:black;">
            <div class="navmenu-div">
              <span class="navmenu-container"><strong>HOME</strong></span>
            </div>
          </router-link>
        </el-col>
        <el-col :span="2" :push="14">
          <router-link to="/works" style="color:black;">
            <div class="navmenu-div">
              <span class="navmenu-container"><strong>MY WORKS</strong></span>
            </div>
          </router-link>
        </el-col>
        <el-col :span="2" :push="14">
          <router-link to="/tags" style="color:black;">
            <div class="navmenu-div">
              <span class="navmenu-container"><strong>TAGS</strong></span>
            </div>
          </router-link>
        </el-col>
      </el-row>
    </el-header>
    <el-main class="main">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>
<style scoped>
.header {
  position: fixed;
  height: 7vh !important;
  width: 100%;
  border-bottom: 1px solid #e7e7e7;
  z-index: 10;
  opacity: 1;
  background-color: white;
  transition-duration: 0.5s;
}

.main {
  position: relative;
  z-index: 0;
  padding: 0px;
}

.navmenu-div {
  height: 7vh;
}

.navmenu-container {
  font-size: 1.0vw;
  line-height: 7vh;
  transition-duration: 0.5s;
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
  width: 80%;
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
