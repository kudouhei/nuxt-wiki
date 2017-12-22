<template>
  <div class="homepage">
    <Swipe></Swipe>
    <Newlist></Newlist>
  </div>
</template>
<script>

import Swipe from '../Swipe/Swipe.vue'
import Newlist from '../NewList/Newlist.vue'

export default {
  components: {
    Swipe,
    Newlist
  }
}
</script>

