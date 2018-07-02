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
 *     Initial: 2018/3/12     Wbofeng
 */
<template>
  <div class="main">
    <div class="banner">
    </div>
    <!-- <loading v-if="this.loading"></loading> -->
    <transition-group
      name="staggered-fade"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
    >
      <div class="work" v-for="(work, index) in works" :key="index" :data-index="index">
        <div class="work-img-div">
          <img class="work-img" :src="work.img">
        </div>
        <div class="work-container">
          <div class="text-div">
            <p class="work-title"><strong>{{work.Title}}</strong></p>
            <span class="work-detail">{{work.Detail}}</span>
          </div>
          <el-row class="bottom">
            <el-col :span="14" class="bottom-detail">
              {{work.Author}}<strong> · </strong>{{work.Created}}
            </el-col>
            <el-col :span="4" :push="6">
              <div class="button" @click="move(work.Link)">
                <span>Open it</span>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </transition-group>
  </div>
</template>
<style scoped>
.main {
  width: 100%;
  padding: 0px;
  text-align: center;
  padding-bottom: 3vh;
}

.banner {
  width: 100%;
  height: 20.83vw;
  background-image: url('../assets/banner.png');
  background-size: 100% 100%;
}

.work {
  position: relative;
  margin: auto;
  top: -8vw;
  margin-top: 5vw;
  width: 40vw;
  background-color: white;
  padding-top: 2vw;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.2);
}

.work-img-div {
  width: 100%;
  height: 20vw;
  background-color: #f5f5f5;
}

.work-img {
  height: 100%;
  width: 100%;
  max-width:100%;
  max-height:100%;
}

.work-container {
  width: 100%;
  padding: 1.5vw;
  text-align: left;
}

.work-title {
  font-size: 20px;
  user-select: none;
  margin-bottom: 1vh;
}

.text-div {
  padding-bottom: 2vw;
  border-bottom: 1px solid #eee;
  transition-duration: 0.4s;
}

.work:hover:hover .text-div {
  border-bottom: 1px solid #333;
}

.bottom {
  margin-top: 1vw;
}

.bottom-detail {
  user-select: none;
}

.button {
  position: absolute;
  right: 0px;
  width: 4vw;
  height: 2vw;
  background-color: #0086a5;
  padding-top: 0.3vw;
  text-align: center;
  color: white;
  font-size: 12px;
  display: table;
}

.button span {
  display: table-cell;
  vertical-align: middle;
  user-select: none;
}

.button-container {
  color: white;
  font-size: 12px;
}
</style>
<script>
import loading from '../components/loading'

export default {
  data () {
    return {
      works: [
        {
          Title: '极智人官网',
          Detail: '使用 Vue 和 element-UI 制作的页面',
          Author: 'Wbofeng',
          Created: '2017-11-05',
          img: require('../assets/smartestee.png'),
          Link: 'https://bootcamp.smartestee.com/#/'
        },
        {
          Title: '极智人管理后台',
          Detail: '基于 Element-admin，实现了人员添加，技术新闻搜索，权限授权，密码修改等功能',
          Author: 'Wbofeng',
          Created: '2018-5-20',
          img: require('../assets/s8e.png'),
          Link: 'https://techcats.s8e.io/#/login'
        },
        {
          Title: '印象中国',
          Detail: '基于 Hugo 上的二次开发',
          Author: 'ShiChao Wbofeng',
          Created: '2018-7-02',
          img: require('../assets/inxchina.png'),
          Link: 'http://inxchina.com/'
        }
      ],
      loading: true
    }
  },
  components: {
    loading
  },
  mounted () {
    /* this.$http({
      url: 'http://192.168.0.111:21001/blog/project/list',
      method: 'GET',
      timeout: 10000
    }).then((response) => {
      this.works = response.body.data
      this.loading = false
      for (let i = 0; i < this.works.length; i += 1) {
        this.works[i].Created = this.works[i].Created.slice(0, 10)
      }
    }, () => {
      this.$Notice.error({
        title: 'WORKS 内容获取失败'
      })
    }) */
  },
  methods: {
    move (link) {
      window.location.href = link
    },
    beforeEnter (el) {
      el.style.opacity = 0 // eslint-disable-line no-param-reassign
    },
    enter (el) {
      const delay = el.dataset.index * 150
      setTimeout(() => {
        el.style.opacity = 1 // eslint-disable-line no-param-reassign
      }, delay)
    }
  }
}
</script>
