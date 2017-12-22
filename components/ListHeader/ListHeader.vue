<template>
  <div class="list-header">
    <div class="header-icon"><i class="fa fa-reply" @click="toThemelist()"></i></div>
    <div class="header-cont"></div>
    <div class="header-icon"><i class="fa fa-code-fork"></i></div>
    <div class="header-icon"><i class="fa fa-star" :class="{'isCollect': getCollect}"
    @click="goCollect"></i></div>
    <div class="header-icon"><i class="fa fa-commenting" @click="toComments()"></i>
      <span class="badge comment_badge">{{getComments}}</span>
    </div>
    <div class="header-icon"><i class="fa fa-thumbs-up" :class="{'isThumbUp':thumb}"
    @click="thumbUp"></i><span class="badge thumb_badge">{{getPopularity}}</span></div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      thumb: false,
      iscollect: false
    };
  },
  created() {
    this.fetchExtraData();
  },
  props: ["currentId"],
  methods: {
    toThemelist() {
      if (this.$store.state.currentThemeId == -1) {
        this.$router.push("/");
      } else {
        this.$router.push(`/${this.$store.state.currentThemeId}`);
      }
    },
    toComments() {
      this.$router.push("/Comments/" + `${this.$store.state.id}`);
    },
    thumbUp() {
      this.thumb = !this.thumb;
      if (this.thumb) {
        this.$store.state.popularity++;
      } else {
        this.$store.state.popularity--;
      }
    },
    goCollect() {
      // this.$store.dispatch('changeCollectState')
      let curId = this.$store.state.id;

      let index = this.$store.state.isCollectIds.indexOf(curId);
      if (index < 0) {
        this.$store.state.isCollect = true;
        this.$store.state.isCollectIds.push(curId);
        const storys = this.$store.state.allStories
        for (let index in storys) {
          if (storys[index].id === curId) {
            this.$store.state.isCollectNews.push(storys[index]);
            break;
          }
        }
      } else {
        this.$store.state.isCollect = false;
        this.$store.state.isCollectIds.splice(index, 1);
        this.$store.state.isCollectNews.splice(index, 1);
      }
    },
    fetchExtraData() {
      let id = this.$store.state.id;
      axios
        .get("/api/story-extra/" + id)
        .then(response => {
          let long_comments = response.data.long_comments;
          let short_comments = response.data.short_comments;
          let popularity = response.data.popularity;
          let comments = response.data.comments;

          this.$store.dispatch("changeStoryExtra", {
            long_comments: long_comments,
            short_comments: short_comments,
            comments: comments,
            popularity: popularity
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  computed: {
    getPopularity() {
      return this.$store.state.popularity;
    },
    getComments() {
      return this.$store.state.comments;
    },
    getCollect() {
      let id = this.$store.state.id;
      if (this.$store.state.isCollectIds.indexOf(id) < 0) {
        this.$store.state.isCollect = false;
      } else {
        this.$store.state.isCollect = true;
      }
      return this.$store.state.isCollect;
    }
  }
};
</script>
<style lang="stylus">
.list-header {
  position: fixed;
  top: 0;
  z-index: 50;
  height: 60px;
  width: 100%;
  background: #00a2ea;
  display: flex;
  flex-direction: row;

  .header-icon {
    flex: 1;
    text-align: center;
    padding: 10px 5px;
    color: #fff;

    i {
      font-size: 24px;
      color: #fff;
      line-height: 24px;
      padding: 10px 10px;

      &.isThumbUp {
        color: #ffce00;
      }

      &.isCollect {
        color: #ffce00;
      }
    }

    .thumb_badge {
      margin-top: -20px;
      margin-left: -8px;
    }

    .comment_badge {
      margin-top: -20px;
      margin-left: -8px;
    }
  }

  .header-cont {
    flex: 2;
  }
}
</style>


