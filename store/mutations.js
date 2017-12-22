import * as types from './mutation_types'

export default {
  // 增加主题新闻数据
  [types.ADD_THEME] (state, payload) {
    state.currentTheme = payload
  },
  // 主题新闻id数组
  [types.ADD_THEME_NEWID] (state, ids) {
    state.themeids = ids
  },
  // 增加全部加载过的新闻到数组
  [types.ADD_ALL_NEWS] (state, stories) {
    console.log(1, stories)
    console.log(2, state.allStories)
    state.allStories = state.allStories.concat(stories)
    console.log(3, state.allStories)
  },
  // 增加首页新闻数组和首页新闻id数组
  [types.ADD_NEWS] (state, payload) {
    state.stories = state.stories.concat(payload.stories)
    if (state.ids.indexOf(payload.ids[0]) < 0) {
      state.ids = state.ids.concat(payload.ids)
    }
  },
  // 改变当前主题id
  [types.CHANGE_CURRENT_THEME_ID] (state, id) {
    state.currentThemeId = id
  },
  // 添加详情页状态到数组
  [types.STORY_EXTRA] (state, extra) {
    state.comments = extra.comments
    state.long_comments = extra.long_comments
    state.short_comments = extra.short_comments
    state.popularity = extra.popularity
  },
  // 改变当前新闻详情页id
  [types.ADD_NEWID] (state, id) {
    state.id = id
  },
  // 判断收藏状态
  [types.JUDGE_COLLECT_STATE] (state) {
    if (state.isCollectIds.indexOf(state.id) < 0) {
      state.isCollect = false
    } else {
      state.isCollect = true
    }
  },
  // 改变收藏状态
  [types.CHANGE_COLLECT_STATE] (state) {
    let index = state.isCollectIds.indexOf(state.id)
    if (index < 0) {
      state.isCollect = true
      state.isCollectIds.push(state.id)
      state.allStories.forEach((story) => {
        if (story.id === state.id) {
          state.isCollectNews.push(story)
        }
      })
    } else {
      state.isCollect = false
      state.isCollectIds.splice(index, 1)
      state.isCollectNews.splice(index, 1)
    }
  }
}
