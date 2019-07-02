import Vue from 'vue'
import dayjs from 'dayjs'

Vue.filter('truncate', (value, limit) => {
  if (value.length <= limit) {
    return value
  }

  return (value || '').substring(0, limit) + '…'
})

Vue.filter('formatDate', (value, format = 'ddd MMMM D, YYYY') => {
  if (!value) {
    return dayjs().format('ddd MMMM D, YYYY')
  }

  return dayjs(value).format('ddd MMMM D, YYYY')
})

Vue.filter('sanitize', (string = '') => {
  const regex = '/<(.|\n)*?>/'
  return string.replace(regex, '').replace(/&amp;/g, '&')
})
