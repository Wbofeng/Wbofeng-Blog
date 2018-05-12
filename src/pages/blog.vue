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
    <div class="markdown">
      <div class="header">
        <p class="title"><strong>{{this.blog.Title}}</strong></p>
        <span class="author">作者 {{this.blog.Author}}</span>
        <span class="time">日期 {{this.blog.Created}}</span>
      </div>
      <loading v-show="show"></loading>
      <mavon-editor
        v-model="blog.Content"
        :ishljs = "true"
        :toolbars = "{}"
        :subfield = false
        :toolbarsFlag = false
        defaultOpen = 'preview'/>
    </div>
  </div>
</template>
<style scoped>
.main {
  padding: 0px;
  text-align: center;
  width: 100%;
}

.markdown {
  width: 60%;
  margin: auto;
  margin-top: 8vw;
}

.title {
  font-size: 32px;
  margin-bottom: 1vw;
  user-select: none;
}

.author {
  margin-left: 3vw;
  margin-right: 3vw;
  color: #999;
  font-size: 16px;
  user-select: none;
}

.time {
  margin-left: 3vw;
  margin-right: 3vw;
  color: #999;
  font-size: 16px;
  user-select: none;
}

.header {
  padding-bottom: 2vw;
  border-bottom: 1px solid #eee;
}
</style>
<script>
import loading from '../components/loading'

export default {
  components: {
    loading
  },
  data () {
    return {
      blog: {},
      show: true
    }
  },
  created () {
    const blogid = {
      id: this.$store.state.item.Id
    }
    this.$http.post('http://192.168.0.111:21001/blog/article/getbyid', blogid).then((response) => {
      this.blog = response.body.data
      this.show = false
      this.blog.Created = this.blog.Created.slice(0, 10)
    }, () => {
      this.$Notice.error({
        title: '内容获取失败'
      })
    })
  }
}
</script>
