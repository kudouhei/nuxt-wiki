<template>
  <div>
    <ListHeader></ListHeader>
    <div class="newDetail">
      <div class="content-wrapper">
        <div class="body" v-html="replaceBody(data.body)"></div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import ListHeader from '../../components/ListHeader/ListHeader'

export default {
  data () {
    return {
      data: {}
    }
  },
  methods: {
    replaceBody(body) {
      if(body !== undefined){
        return body.replace(/src="http\w{0,1}:\/\//g, 'src="https://images.weserv.nl/?url=')
      }
    },
    replaceImageUrl(srcUrl) {
      if(srcUrl !== undefined){
        return srcUrl.replace(/http\w{0,1}:\/\/p/g,'https://images.weserv.nl/?url=p')
      }
    }
  },
  asyncData ({ app, params, error}) {
    return axios.get('api/news/' + params.id).then((response) => {
      let vdata = response.data
      return {
        data: vdata
      }
    }).catch((error) => {
      console.log(error)
    })
  },
  components: {
    ListHeader
  }
}
</script>

<style lang="stylus">
@import '../../assets/css/news_qa.auto.css'

.newDetail
  width 100%
  z-index 10
  .bg-image
    position relative
    width 100%
    height 250px
    z-index 10
    .title
      position absolute
      bottom 0
      font-size 18px
      padding 0 10px 10px 15px
      color rgb(255, 255, 255)
    img
      position absolute
      width 100%
      height 250px
  .body
    position absolute
    width 100%
    top 60px
</style>
