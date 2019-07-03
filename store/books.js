import parser from 'fast-xml-parser'

const LOAD_ALL_SUCCESS = 'LOAD_ALL_SUCCESS'

export const state = () => ({
  list: []
})

export const getters = {
  list: (state) => {
    return state.list
  },
  listRead: (state) => {
    return state.list.filter(r => r.read_at)
  },
  listReading: (state) => {
    return state.list.filter(r => !r.read_at && r.started_at)
  }
}

export const actions = {
  async loadAll({ commit }) {
    // const data = await $axios.$get('https://www.goodreads.com/review/list/15038585.xml?key=05pAK5L384cTgNJwktUA&v=2')

    const data = await this.$axios.$get('https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list/15038585.xml', {
      params: {
        key: '05pAK5L384cTgNJwktUA',
        v: 2,
        per_page: 200
      },
      headers: {
        'x-requested-with': 'https://jpnarowski.com'
      }
    })

    const payload = parser.parse(data)
    const reviews = payload.GoodreadsResponse.reviews.review

    commit(LOAD_ALL_SUCCESS, reviews)
  }
}
export const mutations = {
  [LOAD_ALL_SUCCESS]: (state, payload) => {
    state.list = payload
  }
}
