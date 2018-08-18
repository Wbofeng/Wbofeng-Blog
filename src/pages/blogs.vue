<template>
  <div class="main">
    <div class="banner">
    </div>
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

.input {
  margin-top: 30px;
}

</style>
<script>
export default {
  data () {
    return {
      blogs: [],
      input: ''
    }
  },
  mounted () {
  },
  methods: {
    move (item) {
      this.$store.commit('modifyblog', item)
      this.$router.push({ path: '/blog/' + item.id }) // eslint-disable-line prefer-template
    }
  }
}
</script>
