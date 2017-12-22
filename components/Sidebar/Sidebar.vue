<template>
  <div>
    <transition name="fold">
      <div class="sidebar" v-show="sidebarShow">
        <div class="top-menu">
          <div class="user">
            <img src="./avatar.jpeg" class="avatar">
            <div class="username">Kudou小黑</div>
            <div class="return"></div>
          </div>
          <div class="menu-list">
            <div class="menu" @click="toCollect()">
              <div class="menu-avatar"><i class="fa fa-star"></i></div>
              <div class="name">收藏</div>
            </div>
            <div class="menu">
              <div class="menu-avatar"><i class="fa fa-envelope"></i></div>
              <div class="name">消息</div>
            </div>
            <div class="menu">
              <div class="menu-avatar"><i class="fa fa-cog"></i></div>
              <div class="name">设置</div>
            </div>
          </div>
        </div>

        <div class="themes-list" ref="themeWrapper">
          <ul>
            <li class="themes" v-for="item in data" :key="item.id">
              <div class="themetitle" @click="toTab(`${item.id}`,item)">{{item.name}}</div>
            </li>
          </ul>
        </div>

        <div class="bottom-menu">
          <div class="menu">
            <div class="menu-avatar"><i class="fa fa-download"></i></div>
            <div class="name">离线</div>
          </div>
          <div class="menu">
            <div class="menu-avatar"><i class="fa fa-sun-o"></i></div>
            <div class="name">夜间</div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="mask" v-show="sidebarShow" @click.stop.prevent="hide"></div>
    </transition> 
    
  </div>
</template>
<script>
import axios from 'axios'
export default {
  props: {
    sidebarShow: {
      type: Boolean
    }
  },
  data () {
    return {
      data: [],
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    toTab (id,item) {
      if (id == -1 ){
        this.$emit('hideSidebar')
        this.$emit('title', item.name)
        this.$router.push('/')
      }else {
        this.$emit('hideSidebar')
        this.$emit('title', item.name)
        this.$router.push('/'+id)
      }
    },
    toCollect () {
      this.$emit('hideSidebar')
      this.$router.push(`/Collect`)
    },
    hide () {
      this.$emit('hideSidebar')
    },
    fetchData () {
      axios.get('api/themes').then((response) => {
        this.data = response.data.others

        this.data.unshift({
          color: 0,
          thumbnail: '',
          description: '首页',
          id: -1,
          name: '首页'
        })

      }).catch((error) => {
        console.log('error')
      })
    }
  }
}
</script>
<style lang="stylus">
.sidebar
  width 240px
  height 100%
  background #fff
  z-index 1000
  position fixed
  left 0
  top 0
  transform translate3d(0, 0, 0)
  &.fold-enter-active, &.fold-leave-active
    transition all 0.5s
  &.fold-enter, &.fold-leave-active
    transform translate3d(-100%, 0, 0)
  .top-menu
    background #0793d2
    position relative
    top 0
    width 100%
    height 150px
    .user
      padding 20px
      font-size 0
      .avatar
        height 40px
        width 40px
        display inline-block
      .username
        font-size 15px
        display inline-block
        padding-left 10px
        vertical-align middle
        color #ffffff
    .menu-list
      padding 0px 20px
      dislay flex
      .menu
        display inline-block
        width 33%
        font-size 18px
        text-align center
        color #ffffff
        flex 1
  .bottom-menu
    background #0793d2
    position absolute
    bottom 0
    width 100%
    height 60px
    padding 0px 20px
    .menu
      display inline-block
      width 50%
      font-size 18px
      text-align center
      color #ffffff
      padding 5px
  .themes-list
    ul
      list-style none
      margin-left -30px
      .themes
        display table
        width 100%
        padding-left 30px
        border-bottom 1px solid #f0f0f0
        cursor pointer
        &.current
          color: #00a2ea
        .themetitle
          display inline-block
          line-height 50px
          font-size 16px
.mask
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  z-index 10
  background: rgba(7,17,27,0.6)
  opacity 1
  &.fade-enter-active, &.fade-leave-active
    transition all 0.5s
  &.fade-enter, &.fade-leave-active
    opacity 0
        
</style>




