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
      <mavon-editor
        class="editor"
        v-model="blog.content"
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
  margin-top: 100px;
}

.markdown {
  width: 80%;
  margin: auto;
}

.editor {
  margin-bottom: 20px;
  background-color: white;
  border: none;
  z-index: 0;
}
</style>
<script>
import { getBlog } from '@/services/main.js'

export default {
  data () {
    return {
      blogId: '',
      show: true,
      blog: {}
    }
  },
  async mounted () {
    this.blogId = this.$store.state.item
    const resp = await getBlog(this.blogId)
    this.blog = resp.data
  }
}
</script>
