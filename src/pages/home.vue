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
  <div class="main">
    <el-row>
      <el-col :span="12" :push="4">
        <img src="../assets/home.png" class="home-img" @click="move()">
        <div>
          <loading v-if="this.loading" class="loading"></loading>
          <el-row v-for="(blog, index) in blogs" :key="index" class="blog">
            <div @click="move(blog)" class="blog-div">
              <el-col :span="16" :style="{ width: blog.mainwidth }">
                <p class="blog-title">{{blog.title}}</p>
                <p class="blog-detail">
                  <span>浏览次数: {{blog.count}}</span>
                  <span>标签: {{blog.tags}}</span>
                </p>
                <span class="blog-container">{{blog.profile}}</span>
              </el-col>
              <el-col :span="8" :style="{ width: blog.imgwidth }">
                <div class="blog-img">
                  <img :src="blog.picture" class="blog-img-detail">
                </div>
              </el-col>
            </div>
          </el-row>
          <el-button class="getmore" @click="getmoreblog()" v-if="this.loading === false">
            <loading class="loading-button" v-if="this.getmore === true"></loading>
            <span v-if="this.getmore === false">加载更多</span>
          </el-button>
        </div>
      </el-col>
      <el-col :span="4" class="col" :push="4">
        <img src="../assets/user.jpg" class="user-img">
        <span class="user-name"><strong>王博锋</strong></span>
        <span class="user-note">怕什么真理无穷，进一步有进一步的欢喜</span>
        <div class="icon-container">
          <el-row>
            <el-col :span="8">
              <div @click="to('https://github.com/Wbofeng')">
                <Icon type="social-github" class="icon"></Icon>
              </div>
              </el-col>
            <el-col :span="8">
              <div @mouseover="active('qqactive', 0)" @mouseout="active('qqactive', 1)">
                <img :src="this.qq" class="icon-img" id="qq">
              </div>
            </el-col>
            <el-col :span="8">
              <div @mouseover="active('wechatactive', 0)" @mouseout="active('wechatactive', 1)">
                <img :src="this.wechat" class="icon-img" id="wechat">
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="hot-tags">
          <p class="title"><strong>Tags</strong></p>
          <div class="tags">
            <span class="tags-container">Weex</span>
            <span class="tags-container">JavaScript</span>
            <span class="tags-container">Vue</span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped>
.main {
  margin-top: 14vh;
  z-index: 1;
}

.home-img {
  width: 100%;
  height: 18vw;
  background-color: #ccc;
  transition-duration: 0.6s;
}

.home-img:hover {
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}

.blog {
  padding-top: 1vw;
  padding-bottom: 1vw;
  border-bottom: 1px solid #eee;
  text-align: left;
  width: 100%;
  transition-duration: 0.6s;
}

.blog-div {
  height: 10vw;
}

.blog:hover {
  border-bottom: 1px #999 solid;
}

.blog:hover .blog-title {
  color: steelblue;
}

.blog-title {
  margin-left: 1vw;
  font-size: 1.5vw;
  margin-bottom: 0.5vw;
  user-select: none;
}

.blog-detail {
  margin-left: 1vw;
  font-size: 12px;
  margin-bottom: 0.7vw;
  user-select: none;
}

.blog-container {
  display: block;
  margin-left: 20px;
  margin-top: 20px;
  font-size: 20px;
}

.blog-img {
  background-color: #f5f5f5;
  height: 10vw;
  margin-right: 1vw;
}

.blog-img-detail {
  width: 100%;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}

.getmore {
  width: 100%;
  height: 10vh;
  border: none;
  transition-duration: 0.6s;
  margin-bottom: 5vh;
  font-size: 16px;
  color: #666;
}

.getmore:hover {
  color: steelblue;
  background-color: #fff;
}

.getmore:focus {
  border: none;
  background-color: #fff !important;
}

.getmore:active {
  border: none;
  background-color: #fff !important;
}

.loading-button {
  margin: 0px !important;
}

.user-img {
  width: 70%;
  margin-top: 3vw;
  border-radius: 50%;
}

.user-name {
  display: block;
  margin-top: 1.6vw;
  font-size: 1.2vw;
  color: #666;
  user-select: none;
}

.user-note {
  display: block;
  margin-top: 0.5vw;
  font-size: 0.8vw;
  color: #999;
  user-select: none;
}

.icon-container {
  margin-top: 2vw;
}

.icon {
  font-size: 2.6vw;
  color: #999;
}

.icon:hover {
  color: #333;
}

.hot-tags {
  margin-top: 2vw;
  text-align: left;
  padding-left: 1vw;
  padding-right: 1vw;
  margin-bottom: 2vw;
  user-select: none;
}

 .tags {
  display: flex;
  flex-wrap: wrap-reverse;
 }

.title {
  font-size: 1.2vw;
  text-align: center;
  margin-bottom: 1vw;
  color: #666;
  user-select: none;
}

.tags-container {
  border: solid 1px #ccc;
  padding: 0.3vw;
  border-radius: 5px;
  color: #ccc;
  display: inline-block;
  margin-left: 1vw;
  margin-bottom: 1vh;
  transition-duration: 0.5s;
}

.tags-container:hover {
  color: #333;
  border: solid 1px #333;
}

.col {
  margin-left: 2vw;
}

.icon-img {
  width: 48%;
  transition-duration: 0.5s;
}
</style>
<script>
import loading from '../components/loading'

export default {
  data () {
    return {
      blogs: [],
      loading: true,
      getmore: false,
      qq: require('../assets/QQ.png'),
      wechat: require('../assets/wechat.png')
    }
  },
  components: {
    loading
  },
  mounted () {
    this.$http.get('http://127.0.0.1:7001/home').then((response) => {
      console.log(response.body[0])
      for (let i = 0; i < response.body.length; i += 1) {
        response.body[i].picture = 'http://localhost:8001/' + response.body[i].picture.slice(response.body[i].picture.indexOf('Images/') + 7)
      }
      this.blogs = [...response.body]
      console.log(this.blogs)
      this.loading = false
      if (this.$store.state.page > 0) {
        this.$store.commit('modifypage', 1)
      } else {
        this.$store.commit('modifypage', this.$store.state.page + 1)
      }
      // this.cutdate(this.blogs)
      this.blogs.forEach((blog) => {
        if (blog.picture !== '') {
          blog.mainwidth = '66.7%' // eslint-disable-line no-param-reassign
          blog.imgwidth = '33.3%' // eslint-disable-line no-param-reassign
        } else {
          blog.mainwidth = '100%' // eslint-disable-line no-param-reassign
          blog.imgwidth = '0' // eslint-disable-line no-param-reassign
        }
      })
    }, () => {
      this.$Notice.error({
        title: 'HOME 内容获取失败'
      })
    })
  },
  methods: {
    move (item) {
      this.$store.commit('modifyblog', item)
      this.$router.push({ path: '/blog/' + item.id }) // eslint-disable-line prefer-template
    },
    to (link) {
      window.location.href = link
    },
    active (name, active) {
      if (name === 'qqactive' && active === 0) {
        this.qq = require('../assets/QQ-hover.png')
      } else if (name === 'qqactive' && active === 1) {
        this.qq = require('../assets/QQ.png')
      } else if (name === 'wechatactive' && active === 1) {
        this.wechat = require('../assets/wechat.png')
      } else if (name === 'wechatactive' && active === 0) {
        this.wechat = require('../assets/wechat-hover.png')
      }
    },
    cutdate (array) {
      for (let i = 0; i < array.length; i += 1) {
        array[i].Created = array[i].Created.slice(0, 10) // eslint-disable-line no-param-reassign
      }
    },
    getmoreblog () {
      this.getmore = true
      this.$http.post('http://192.168.0.111:21001/blog/article/approval', { page: this.$store.state.page }).then((response) => {
        this.blogs = this.blogs.concat(response.body.data)
        this.cutdate(this.blogs)
        this.blogs.forEach((blog) => {
          if (blog.img !== '') {
            blog.mainwidth = '66.7%' // eslint-disable-line no-param-reassign
            blog.imgwidth = '33.3%' // eslint-disable-line no-param-reassign
          } else {
            blog.mainwidth = '100%' // eslint-disable-line no-param-reassign
            blog.imgwidth = '0' // eslint-disable-line no-param-reassign
          }
        })
        this.getmore = false
        this.$store.commit('modifypage', this.$store.state.page + 1)
      }, () => {
        this.$Notice.error({
          title: '内容获取失败'
        })
      })
    }
  }
}
</script>
