<template>
  <div class="swipe">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in data" :key="item.id">
        <img :src="replaceUrl(item.image)" @click="toDetail(item.id)">
        <span class="title">{{item.title}}</span>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      data: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData () {
      axios.get('/api/news/latest').then((response) => {
        this.data = response.data.top_stories
      }).catch((error) => {
        console.log(error)
      })
    },
    replaceUrl (str) {
      if (str !== undefined) {
        return str.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
      }
    },
    toDetail (id) {
      this.$store.dispatch('addNewId', id)
      this.$router.push('/Detail/' + id)
      this.$store.dispatch('changeCurrentThemeId', -1)
    }
  }
}
</script>
<style lang="stylus">
.swipe
  position relative
  top 40px
  width 100%
  height 340px
  .mint-swipe-indicator
    opacity 0.7
  img
    width 100%
    height 340px
    z-index 1
  span
    position absolute
    font-size 20px
    color #fff
    bottom 30px
    left 20px
    font-weight 600
</style>


