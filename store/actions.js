import * as types from './mutation_types'

export default {
  // 增加主题新闻数据
  addTheme: ({ commit }, payload) => {
    commit(types.ADD_THEME, payload)
  },
  // 增加全部加载过的新闻到数组
  addAllNews: ({ commit }, stories) => {
    commit(types.ADD_ALL_NEWS, stories)
  },
  addThemeIds: ({ commit }, ids) => {
    commit(types.ADD_THEME_NEWID, ids)
  },
  // 增加首页新闻数组和首页新闻id数组
  addNews: ({ commit }, payload) => {
    commit(types.ADD_NEWS, payload)
  },
  // 改变当前主题id
  changeCurrentThemeId: ({ commit }, id) => {
    commit(types.CHANGE_CURRENT_THEME_ID, id)
  },
  // 添加详情页状态到数组
  changeStoryExtra: ({ commit }, extra) => {
    commit(types.STORY_EXTRA, extra)
  },
  // 改变当前新闻详情页id
  addNewId: ({ commit }, id) => {
    commit(types.ADD_NEWID, id)
  },
  // 判断收藏状态
  judgeCollectState: ({ commit }) => {
    commit(types.JUDGE_COLLECT_STATE)
  },
  // 改变收藏状态
  changeCollectState: ({ commit }) => {
    commit(types.CHANGE_COLLECT_STATE)
  }
}
