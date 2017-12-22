<template>
  <div class="detail-box" :style="{backgroundImage: 'url(' + replaceUrl(background) + ')'}">
    <div class="detail-mask"></div>
    <h1 class="detail-title">{{description}}</h1>
    <p class="detail-image-source">{{image_source}}</p>
  </div>
</template>
<script>
export default {
  props: {
    background: {
      type: String
    },
    image_source: {
      type: String
    },
    description: {
      type: String
    }
  },
  methods: {
    replaceUrl (str) {
      if (str !== undefined) {
        return str.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
      }
    }
  }
}
</script>
<style lang="stylus">
.detail-box
  position relative
  z-index 0
  height 350px
  width 100%
  background-size 100%
  background-position 50%
  background-repeat no-repeat
  .detail-mask
    width 100%
    height 100%
    position absolute
    top 0
    left 0
    background-image -webkit-linear-gradient(bottom,rgba(0,0,0,.7),rgba(0,0,0,.1) 40%,rgba(0,0,0,.1))
    background-image -webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.7)),color-stop(40%,rgba(0,0,0,.1)),to(rgba(0,0,0,.1)))
  .detail-title
    position absolute
    bottom 20px
    line-height 24px
    font-size 24px
    color #fff
    font-weight 300
    padding 10px 10px 10px 40px
</style>

