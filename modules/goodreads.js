// import parser from 'fast-xml-parser'

// export const fetchUserReviews = async () => {
//   const data = await $axios.$get('http://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list/15038585.xml?key=05pAK5L384cTgNJwktUA&v=2', {
//     headers: {
//       origin: 'https://jpnarowski.com'
//     }
//   })
//   // const data = await $axios.$get('https://www.goodreads.com/review/list/15038585.xml?key=05pAK5L384cTgNJwktUA&v=2')
//   const json = parser.parse(data)

//   return {
//     reviews: json.GoodreadsResponse.reviews.review
//   }
// }

import parser from 'fast-xml-parser'

export const fetchBooks = async function (id, options = {}) {
  const { axios } = options

  const data = await axios.$get('https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list/15038585.xml', {
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
  return payload.GoodreadsResponse.reviews.review
}

export const fetchBook = async function (id, options = {}) {
  const { axios } = options

  const url = `https://www.goodreads.com/book/show/${id}.xml`
  const data = await axios.$get(`https://cors-anywhere.herokuapp.com/${url}`, {
    params: {
      key: '05pAK5L384cTgNJwktUA',
    },
    headers: {
      'x-requested-with': 'https://jpnarowski.com'
    }
  })

  const payload = parser.parse(data)
  return payload.GoodreadsResponse.book
}
