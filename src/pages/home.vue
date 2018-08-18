<template>
  <div class="home">
    <el-row>
      <el-col :span="18">
        <img class="banner-img" src="../assets/home.png">
        <blogs></blogs>
      </el-col>
      <el-col :span="6">
        <user></user>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.home {
  margin: 0px auto;
  margin-top: 70px;
  width: 1180px;
}

.banner-img {
  width: 100%;
}
</style>

<script>
import user from '../components/userSide'
import blogs from '../components/blogsSide'

export default {
  components: {
    user,
    blogs
  }
}
</script>
