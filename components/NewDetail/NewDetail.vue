<template>
  <div class="newDetail">
    <div class="content-wrapper">
      <div class="bg-image" v-if="data.image">
        <img :src="replaceImageUrl(data.image)" v-lazy="replaceImageUrl(data.image)">
        <span class="title">{{data.title}}</span>
      </div>
      <div class="body" v-html="data.body"></div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: {}
    }
  },
  asyncData ({ app, params, error}) {
    return axios.get('api/news/' + params.id).then((response) => {
      let vdata = this.replaceBody(response.data.body)
      console.log(vdata)
      return {
        data: vdata
      }
    })
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
  }
}
</script>

