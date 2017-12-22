<template>
  <div class="header">
    <div class="cmodel">
      <span class="naver"><i class="fa fa-bars" @click="showSidebar"></i></span>
      <h2 class="header-cont">{{title}}</h2>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '首页'
    }
  },
  methods: {
    showSidebar () {
      this.$emit('showSide')
    },
    toHome () {
      this.$router.push('/')
    }
  }
}
</script>
<style lang="stylus">
.header
  position fixed
  top 0
  left 0
  height 60px
  width 100%
  font-size 0
  z-index 5
  text-align center
  .cmodel
    color #333
    background-color #00a2ea
    height 60px
    display flex
    & > h2
      color #ffffff
      font-size 24px
      line-height 60px
      margin-top 0
      flex 11
      text-align left
    .naver
      left 10px
      font-size 24px
      flex 1
      color #fff
      line-height 60px
      
</style>



