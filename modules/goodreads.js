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
