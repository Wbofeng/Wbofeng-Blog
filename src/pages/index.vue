<template>
  <div @click="move()">
    <neon-effect :options="options"></neon-effect>
  </div>
</template>
<script>
export default {
  data () {
    return {
      options: {
        len: 30,
        count: 70,
        rate: 20,
        dieChance: 0.05,
        sparkChance: 0.1,
        sparkDist: 10,
        sparkSize: 2,
        contentLight: 70,
        shadowToTimePropMult: 6,
        bgColorArr: [0, 0, 0]
      }
    }
  },
  methods: {
    move () {
      this.$router.push('home')
    }
  }
}
</script>
<style scoped>
</style>
