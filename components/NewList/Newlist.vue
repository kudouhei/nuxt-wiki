<template>
  <div class="newList">
    <div class="cmodel">
      <ul class="newul">
        <h2 class="title">今日热闻</h2>
        <li class="new" v-for="(story, index) in stories" :key="index" @click="toDetail(story.id)">
          <span class="title">{{story.title}}</span>
          <span class="avatar pull-right" v-for="(item, index) in story.images" :key="index"
          v-if="index<1"><img v-lazy="replaceUrl(item)"></span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      stories: []
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      axios.get('api/news/latest').then((response) => {
        this.stories = response.data.stories
        this.$store.dispatch('addAllNews', response.data.stories)
        let ids = response.data.stories.map(story => story.id)
        this.$store.dispatch('addThemeIds', ids)
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
      this.$router.push('/Detail/' + id )
      this.$store.dispatch('changeCurrentThemeId', -1)
    }
  }
}
</script>
<style lang="stylus">
.newList
  position relative
  width 100%
  height 100%
  top 20px
  background #f2f2f2
  .newul
    padding-left 14px
    list-style none
    .title
      color #666
      font-size 20px
      padding-top: 15px
    .new
      background #fff
      display flex
      width 97%
      border 1px solid #eaeaea
      border-radius 8px
      min-height 120px
      display flex
      margin-bottom 10px
      box-shadow 1px 1px 5px #e0e0e0
      .title
        font-size 20px
        line-height 20px
        flex 1
        margin-left 10px
      .avatar
        height 100px
        width 100px
        flex 0 0 100px
        margin 10px
        img
          width 100px
          height 100px

</style>


