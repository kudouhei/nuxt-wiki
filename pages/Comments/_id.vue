<template>
  <div>
    <div class="sonHeader">
      <span class="back"><i class="fa fa-reply" @click="toDetail()"></i></span>
      <h3>{{this.$store.state.comments}}条评论</h3>
    </div>
    <div class="commentsArea">
      <div class="longComments">
        <div class="longCommentsTitle">{{this.$store.state.long_comments}}条长评
          <span class="down pull-right"><i class="fa" :class="longCommentShow?'fa-angle-double-up':'fa-angle-double-down'" @click="showLongComment"></i></span>
        </div>
        <div class="longComment" v-show="longCommentShow" v-for="(item, index) in longComments" :key="index">
          <span class="avatar"><img :src="attachImageUrl(item.avatar)" width="30" heigth="30"></span>
          <div class="content">
            <div class="sonTitle">
              <span class="name">{{item.author}}</span>
              <span class="likes"><i class="fa fa-thumbs-o-up"></i><span class="count">{{item.likes}}</span></span>
            </div>
            <span class="comment">{{item.content}}</span>
          </div>
        </div>
      </div>
      <div class="shortComments">
        <div class="shortCommentsTitle">{{this.$store.state.short_comments}}条短评
          <span class="down pull-right"><i class="fa" :class="shortCommentShow?'fa-angle-double-up':'fa-angle-double-down'" @click="showShortComment"></i></span>
        </div>
        <div class="shortComment" v-show="shortCommentShow" v-for="(item, index) in shortComments" :key="index">
          <span class="avatar"><img :src="attachImageUrl(item.avatar)" width="30" height="30"></span>
          <div class="content">
            <div class="sonTitle">
              <span class="name">{{item.author}}</span>
              <span class="likes"><i class="fa fa-thumbs-o-up"></i><span class="count">{{item.likes}}</span></span>
            </div>
            <span class="comment">{{item.content}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      longComments: {},
      shortComments: {},
      longCommentShow: true,
      shortCommentShow: false
    }
  },
  created () {
    this.fetchLongComment()
    this.fetchShortComment()
  },
  methods: {
    attachImageUrl(srcUrl) {
      if (srcUrl !== undefined) {
        return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
      }
    },
    fetchLongComment () {
      axios.get('/api/story/' + this.$store.state.id + '/long-comments').then((response) => {
        this.longComments = response.data.comments
      })
    },
    fetchShortComment () {
      axios.get('/api/story/' + this.$store.state.id + '/short-comments').then((response) => {
        this.shortComments = response.data.comments
      })
    },
    showLongComment () {
      this.longCommentShow = !this.longCommentShow
    },
    showShortComment () {
      this.shortCommentShow = !this.shortCommentShow
    },
    toDetail () {
      this.$router.push('/Detail/' + this.$store.state.id)
    }
  }
}
</script>
<style lang="stylus">
.sonHeader
  position fixed
  top 0
  z-index 50
  height 60px
  width 100%
  background #00a2ea
  display flex
  flex-direction row
  .back
    flex 0 1 100px
    text-align center
    padding 10px 5px
    color #fff
    font-size 22px
    i
      vertical-align middle
  h3
    color #fff
    font-size 22px
    flex 1
    text-align center
.commentsArea
  position absolute
  top 60px
  height 100%
  width 100%
  background-color #fff
  .longComments, .shortComments
    color #333
    width 100%
    .longCommentsTitle, .shortCommentsTitle
      height 40px
      line-height 40px
      padding-left 10px
      font-weight 700
      color rgb(7,17,27)
      font-size 16px
      width 100%
      border-bottom 1px solid rgba(7,17,27,0.1)
      flex 1
      position relative
      .down
        width 30px
        height 30px
    .longComment, .shortComment
      display flex
      width 100%
      padding 10px 10px 0 10px
      .avatar
        flex 0 0 30px
        width 30px
        height 30px
        img 
          border-radius 50%
      .content
        flex 1
        position relative
        margin-left 10px
        border-bottom 1px solid #f0f0f0
        .name
          left 5px
          line-height 30px
        .likes
          position absolute
          width 20px
          height 20px
          right 5px
          .fa
            position absolute
            right 20px
          .count
            position relative
            top -10px
            padding 3px 
        .comment
          font-size 18px
</style>


