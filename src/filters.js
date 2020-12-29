import Vue from 'vue'

Vue.filter('date', function (value) {
  if (!value) return ''
  const date = new Date(value)
  return date.toLocaleDateString(['fr-FR'], 
      {month: 'short', day: '2-digit', year: 'numeric'})
})

Vue.filter('dateLong', function (value) {
  if (!value) return ''
  const date = new Date(value)
  return date.toLocaleDateString(['fr-FR'], 
      {weekday:'long', month: 'long', day: '2-digit', year: 'numeric'})
})


  Vue.filter('dateTime', function (value) {
    if (!value) return ''
    const date = new Date(value)
    return date.toLocaleDateString(['fr-FR'], 
        {month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'})
  })

  Vue.filter('time', function (value) {
    if (!value) return ''
    const date = new Date(value)
    return date.toLocaleTimeString(['fr-FR'], 
        {hour: '2-digit', minute: '2-digit'})
  })

  Vue.filter('capitalize', function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  })
  