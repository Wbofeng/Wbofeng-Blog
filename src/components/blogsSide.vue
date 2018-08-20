<template>
  <div v-loading="loading">
    <el-row v-for="item in blogs" :key="item.id" class="blog-container">
      <div @click="move(item)">
        <el-col :span="16">
          <p class="blog-title">{{item.title}}</p>
          <p class="blog-infor">create: {{item.created}} | views: {{item.count}} | tag: {{item.tags}}</p>
          <p class="blog-profile">{{item.profile}}</p>
        </el-col>
        <el-col :span="8">
          <img class="img" :src="item.picture">
        </el-col>
      </div>
    </el-row>
  </div>
</template>

<style scoped>
.blog-container {
  width: 100%;
  text-align: left;
  border-bottom: 1px solid #eee;
  transition-duration: 0.6s;
  height: 200px;
}

.blog-container:hover {
  border-bottom: 1px solid black;
}

.blog-title {
  font-size: 20px;
}

.blog-infor {
  font-size: 14px;
  margin-bottom: 30px;
}

.img {
  width: 70%;
  margin-top: 20px;
  margin-left: 20%;
  height: 160px;
  border-radius: 10px;
}
</style>

<script>
import { getBlogs } from '@/services/main.js'

export default {
  data () {
    return {
      blogs: [],
      loading: true
    }
  },
  async mounted () {
    if (this.blogs.length === 0) {
      const resp = await getBlogs()
      this.blogs = [...resp.data.reverse()]
      for (let i = 0; i < this.blogs.length; i += 1) {
        this.blogs[i].picture = `http://www.wbofeng.top/images/${this.blogs[i].picture.slice(32)}`
      }
      if (this.blogs.length !== 0) {
        this.loading = false
      }
    } else {
      this.loading = false
    }
  },
  methods: {
    move (item) {
      this.$store.commit('modifyblog', item)
      this.$router.push({ path: `/blog/${item.id}` })
    }
  }
}
</script>
