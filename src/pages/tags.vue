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
    <div v-loading="loading" class="tags-container" id="container">
      <span class="tag"
            v-for="(tag, index) in tags"
            :key="index"
            @click="push(tag)"
            :style="{ backgroundColor: tag.color }">
        {{tag.name}}
      </span>
    </div>
    <div class="result" v-loading="resultLoading">
      <span class="result-name">
        {{selectedTag}}
      </span>
      <div class="result-detail"
           v-for="(item, index) in show"
           :key="index"
           @click="move(item)">
        <span class="result-detail-title">{{item.title}}</span>
        <span class="result-detail-other">
          {{item.porfile}}
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
import { getTags, scarchBlogs } from '@/services/main.js'

export default {
  data () {
    return {
      id: 'title',
      tags: [],
      show: [],
      selectedTag: '',
      loading: true,
      resultLoading: false
    }
  },
  async mounted () {
    try {
      const resp = await getTags()
      this.tags = [...resp.data]
      this.loading = false
      // for (let n = 0; n < this.tags.length; n += 1) {
      //   if (this.tags[n].Count < 10) {
      //     this.tags[n].color = '#81a3cd'
      //   } else if (this.tags[n].Count >= 10 && this.tags[n].Count < 30) {
      //     this.tags[n].color = '#b7adcf'
      //   } else if (this.tags[n].Count >= 30) {
      //     this.tags[n].color = '#b5738d'
      //   }
      // }
    } catch (err) {
      return false
    }
  },
  methods: {
    async push (item) {
      this.resultLoading = true
      const resp = await scarchBlogs({ name: item.name })
      this.selectedTag = item.name
      if (resp.data.length !== 0) {
        this.show = [...resp.data]
        this.resultLoading = false
      }
    },
    move (item) {
      this.$store.commit('modifyblog', item)
      this.$router.push(`'/blog/${item.id}`) // eslint-disable-line prefer-template
    }
  }
}
</script>
