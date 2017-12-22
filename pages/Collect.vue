<template>
  <div>
    <div class="sonHeader">
      <span class="back" @click="toHome()"><i class="fa fa-reply"></i></span>
      <h3>收藏</h3>
    </div>
    <div class="collectList">
      <ul>
        <li class="new" v-for="story in this.data"
        :key="story.id">
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
export default {
  data() {
    return {
      data: this.$store.state.isCollectNews
    };
  },
  methods: {
    replaceUrl(str) {
      if (str !== undefined) {
        return str.replace(
          /http\w{0,1}:\/\/p/g,
          "https://images.weserv.nl/?url=p"
        );
      }
    },
    toHome() {
      this.$router.push("/");
      this.$store.state.getters;
    }
  }
};
</script>
<style lang="stylus">
.sonHeader {
  position: fixed;
  top: 0;
  z-index: 50;
  height: 60px;
  width: 100%;
  background: #00a2ea;
  display: flex;
  flex-direction: row;

  .back {
    flex: 0 1 100px;
    text-align: center;
    padding: 10px 5px;
    color: #fff;
    font-size: 22px;

    i {
      vertical-align: middle;
    }
  }

  h3 {
    color: #fff;
    font-size: 22px;
    flex: 1;
    text-align: center;
  }
}

.collectList {
  margin-top: 80px;

  ul {
    list-style: none;

    .new {
      background: #fff;
      display: flex;
      width: 97%;
      border: 1px solid #eaeaea;
      border-radius: 8px;
      min-height: 120px;
      display: flex;
      margin-bottom: 10px;
      box-shadow: 1px 1px 5px #e0e0e0;

      .title {
        font-size: 20px;
        line-height: 20px;
        flex: 1;
        margin-left: 10px;
        padding: 20px;
      }

      .avatar {
        height: 100px;
        width: 100px;
        flex: 0 0 100px;
        margin: 10px;

        img {
          width: 100px;
          height: 100px;
        }
      }
    }
  }
}
</style>
