import { getPosts } from '@/modules/headlessCms'

const LOAD_ALL_POSTS_SUCCESS = 'LOAD_ALL_POSTS_SUCCESS'

export const DEFAULT_STATE = {
  list: {
    total_pages: null,
    page: null,
    per_page: null,
    results: []
  }
}

export const state = () => (DEFAULT_STATE)

export const getters = {
  list: (state) => {
    return state.list
  },
  listFindBySlug: state => (slug) => {
    return (state.list.results || []).find(post => post.slug === slug)
  }
}

export const actions = {
  async loadAll({ commit }, options) {
    const collection = await getPosts(options)
    commit(LOAD_ALL_POSTS_SUCCESS, collection)

    return collection
  }
}

export const mutations = {
  [LOAD_ALL_POSTS_SUCCESS]: (state, payload) => {
    state.list = payload
  }
}
