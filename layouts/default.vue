<template>
  <div class="app">
    <v-header @showSide="show" :title="Title"></v-header>
    <Sidebar :sidebarShow="sidebarShow" @hideSidebar="hide" @title="getTitle"></Sidebar>
    <nuxt/>
  </div>
</template>
<script>
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar.vue'

export default {
  data () {
    return {
      sidebarShow: false,
      title: '首页'
    }
  },
  components: {
    'v-header': Header,
    Sidebar
  },
  methods: {
    hide () {
      this.sidebarShow = false
    },
    show () {
      this.sidebarShow = true
    },
    getTitle (str) {
      this.title = str
    }
  },
  computed: {
    Title () {
      return this.title
    }
  }
}
</script>

