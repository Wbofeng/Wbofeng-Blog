<template>
  <div class="userSide">
    <img class="user-img" src="../assets/user.jpg">
    <p class="user-name">WBofeng</p>
    <p class="user-note">怕什么真理无穷，进一步有进一步的欢喜</p>
    <el-row class="user-contact">
      <el-col :span="6" :offset="3">
        <a href="https://github.com/Wbofeng" target="blank">
          <img class="icon" src="../assets/github.png">
        </a>
      </el-col>
      <el-col :span="6">
        <el-popover
          placement="bottom"
          trigger="hover">
          <img class="scan" src="../assets/qqscan.jpg">
          <img class="icon" slot="reference" src="../assets/qq.png">
        </el-popover>
      </el-col>
      <el-col :span="6">
        <el-popover
          placement="bottom"
          trigger="hover">
          <img class="scan" src="../assets/wechatscan.jpg">
          <img class="icon" slot="reference" src="../assets/wechat.png">
        </el-popover>
      </el-col>
    </el-row>
    <div class="hot-tags">
      <p class="hot-tags-title">Hot Tags</p>
      <div class="hot-tags-container">
        <span class="tags">JavaScript</span>
        <span class="tags">Vue</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.userSide {
  user-select: none;
}

.user-img {
  width: 60%;
  border-radius: 50%;
  margin-top: 45px;
  border: 1px solid #ccc;
}

.user-name {
  font-size: 20px;
  font-weight: 600;
  margin: 20px 0 10px 0;
}

.user-note {
  font-size: 14px;
  margin: 10px 0 25px 0;
}

.user-contact {
  margin-bottom: 20px;
}

.icon {
  width: 50%;
}

.scan {
  width: 180px;
}

.hot-tags-title {
  font-size: 20px;
  font-weight: 600;
}

.tags {
  border: solid 1px #ccc;
  padding: 0.3vw;
  border-radius: 5px;
  color: #ccc;
  display: inline-block;
  margin-left: 1vw;
  margin-bottom: 1vh;
  transition-duration: 0.5s;
}

.tags:hover {
  color: #333;
  border: solid 1px #333;
}
</style>
