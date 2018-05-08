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
 *     Initial: 2018/3/11     Wbofeng
 */
<template>
  <div class="main">
    <div class="header">
      <span class="title"><strong>Tags</strong></span><br/><br/>
      <span class="detail">在这里你可以根据标签，快速检索文章</span>
    </div>
    <div class="tags-container" id="container">
      <loading v-if="this.loading"></loading>
      <span class="tag"
            v-for="(tag, index) in tags"
            :key="index"
            @click="push(tag)"
            :style="{ backgroundColor: tag.color }">
        {{tag.Tag}}
      </span>
    </div>
    <div v-for="(item, index) in show" :key="index" class="result">
      <span class="result-name">
        <Icon type="pricetag"></Icon>
        {{item.tag}}
      </span>
      <div class="result-detail"
           v-for="(detail, index) in item.detail"
           :key="index"
           @click="move(detail)">
        <span class="result-detail-title">{{detail.Title}}</span>
        <span class="result-detail-other">
          visitors: {{detail.visitor}} <strong>·</strong> {{detail.Created}}
        </span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.main {
  width: 100%;
  padding: 0px;
  text-align: center;
}

.header {
  margin: auto;
  position: relative;
  margin-top: 6vw;
  padding-bottom: 1vw;
  width: 60%;
  border-bottom: 1px #ccc solid;
  text-align: left;
}

.title {
  font-size: 30px;
  user-select: none;
}

.detail {
  color: #999;
  user-select: none;
}

.tags-container {
  width: 60%;
  margin: auto;
  margin-top: 3vw;
  text-align: left;
  padding-bottom: 4vw;
}

.tag {
  padding: 0.5vw;
  padding-top: 0.25vw;
  padding-bottom: 0.25vw;
  color: white;
  background-color: #34b1b7;
  text-align: center;
  border-radius: 5px;
  margin-left: 0.25vw;
  margin-right: 0.25vw;
  font-size: 14px;
  user-select: none;
}

.result {
  width: 60%;
  margin: auto;
  text-align: left;
}

.result-name {
  font-size: 16px;
  color: #0085a7;
}

.result-detail {
  padding-top: 1vw;
  padding-bottom: 1vw;
  border-bottom: 1px #eee solid;
  margin-bottom: 1vw;
  transition-duration: 0.6s;
}

.result-detail:hover {
  border-bottom: 1px #999 solid;
}

.result-detail-title {
  font-size: 20px;
  user-select: none;
}

.result-detail-other {
  margin-left: 50%;
}
</style>
<script>
import loading from '../components/loading'

export default {
  data () {
    return {
      id: 'title',
      tags: [],
      show: [],
      loading: true
    }
  },
  components: {
    loading
  },
  mounted () {
    this.$http.get('http://192.168.0.111:21001/blog/tag/activelist').then((response) => {
      this.tags = response.body.ID
      this.loading = false
      for (let n = 0; n < this.tags.length; n += 1) {
        if (this.tags[n].Count < 10) {
          this.tags[n].color = '#81a3cd'
        } else if (this.tags[n].Count >= 10 && this.tags[n].Count < 30) {
          this.tags[n].color = '#b7adcf'
        } else if (this.tags[n].Count >= 30) {
          this.tags[n].color = '#b5738d'
        }
      }
    }, () => {
      this.$Notice.error({
        title: 'TAGS 内容获取失败'
      })
    })
  },
  methods: {
    push (item) {
      const id = {
        id: item.TagID
      }
      const article = {}
      this.$http.post('http://192.168.0.111:21001/blog/article/getbytag', id).then((response) => {
        if (this.show.length === 0) {
          article.tag = item.Tag
          article.detail = response.body.data
          this.show.unshift(article)
        } else {
          for (let i = 0; i <= this.show.length; i += 1) {
            if (i < this.show.length) {
              if (this.show[i].tag === item.tag) {
                this.show.splice(i, 1)
                article.tag = item.Tag
                article.detail = response.body.data
                this.show.unshift(article)
                break
              }
            } else {
              article.tag = item.Tag
              article.detail = response.body.data
              this.show.unshift(article)
              break
            }
          }
        }
      })
    },
    move (item) {
      this.$store.commit('modifyblog', item)
      this.$router.push('/blog/' + item.Id) // eslint-disable-line prefer-template
    }
  }
}
</script>
