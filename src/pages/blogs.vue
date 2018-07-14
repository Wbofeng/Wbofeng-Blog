<template>
  <div class="main">
    <div class="banner">
    </div>
    <!-- <loading v-if="this.loading"></loading> -->
    <div class="body">
      <el-card shadow="hover" class="blog-card" v-for="(blog, index) in blogs" :key="index">
        <div @click="move(blog)">
          <img :src="blog.picture" class="image">
          <div style="padding: 14px;">
            <p class="title">{{ blog.title }}</p>
            <p class="profile">{{ blog.profile }}</p>
          </div>
        </div>
      </el-card>
    </div>
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

.body {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 4%;
  padding-right: 4%;
}

.blog-card {
  text-align: left;
  width: 30%;
  margin-top: 30px;
}

.title {
  font-size: 20px;
}

.profile {
  font-size: 14px;
}

.image {
  width: 100%;
  height: 15vw;
}
</style>
<script>
export default {
  data () {
    return {
      blogs: []
    }
  },
  mounted () {
    this.$http.get('http://127.0.0.1:7001/home').then((response) => {
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
    }
  }
}
</script>
