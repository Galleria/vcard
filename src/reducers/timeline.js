const timeline =  (state = 'none', action) => {
  console.log(action.type)
  switch (action.type) {
    case 'OPEN_TIMELINE':
      console.log('action.type OPEN_TIMELINE')
      return ''
    case 'CLOSE_TIMELINE':
      console.log('action.type CLOSE_TIMELINE')
      return 'none'
    default:
      return state
  }
}

export default timeline