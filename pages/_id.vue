<template>
  <div class="themeDetail">
    <DetailImage :background="background" :description="description" :imageSource="image_source"></DetailImage>
    <div class="editors" v-if="editors.length>0">
      <span class="editor">主编</span>
      <div class="avatar" v-for="(item, index) in editors" :key="index">
        <img v-lazy="replaceUrl(item.avatar)">
      </div>
    </div>
    <div class="themeNewList">
      <ul>
        <li class="new" v-for="story in this.stories"
        :key="story.id" @click="toDetail(`${story.id}`, currentId)">
          <span class="title">{{story.title}}</span>
          <span class="avatar" v-for="(item, index) in story.images" :key="index"
          v-if="index<1">
            <img v-lazy="replaceUrl(item)">
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import DetailImage from '../components/DetailImage/DetailImage'
import {mapState, mapMutations} from 'vuex'

export default {
  data () {
    return {
      currentId: -1,
      background: '',
      description: '',
      image_source: '',
      editors: [],
      stories: ''
    }
  },
  asyncData ({ app, params, error}) {
    return axios.get('/api/theme/'+params.id).then((response) => {
      let theme = response.data
      let storiesArray = theme.stories
      let back = theme.background
      let des = theme.description
      let images = theme.image_source
      let themeeditors = theme.editors
      
      return {
        stories: storiesArray,
        background: back,
        description: des,
        image_source: images,
        editors: themeeditors,
        currentId: params.id
      }
    }).catch((error) => {
      console.log(error)
    })
  },
  fetch ({ store, params}) {
    return axios.get('/api/theme/'+params.id).then((response) => {
      store.commit('ADD_ALL_NEWS', response.data.stories)
      let ids = response.data.stories.map(story => story.id)
      store.commit('ADD_THEME_NEWID', ids)
      store.commit('ADD_THEME', response.data)
    })
  },
  methods: {
    replaceUrl (str) {
      if (str !== undefined) {
        return str.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
      }
    },
    toDetail(id, currentId) {
      this.$router.push('/Detail/' + id)
      this.$store.dispatch('addNewId', id)
      this.$store.dispatch('changeCurrentThemeId', currentId)
    }
  },
  components: {
    DetailImage
  }
}
</script>
<style lang="stylus">
.themeDetail
  position relative
  background: #f2f2f2
  .editors
    color #666
    font-size 20px
    padding 15px 20px
    .editor
      display inline-block
    .avatar
      display inline-block
      img
        width 40px
        height 40px
        border-radius 50%
        margin-left 20px
  .themeNewList
    ul
      list-style none
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
          padding 20px
        .avatar
          height 100px
          width 100px
          flex 0 0 100px
          margin 10px
          img
            width 100px
            height 100px  
</style>



