export const actions = {
  prev: 'prev',
  next: 'next',
  close: 'close',
}

export const currentImageTranslate = index => {
  const currentImagePosition = index * -100
  return `translateX(${currentImagePosition}vw)`
}

export const useCurrentImageReducer = imagesCount => (state, action) => {
  switch (action.type) {
    case actions.prev:
      return state > 0 ? state - 1 : 0
    case actions.next:
      return state < imagesCount - 1 ? state + 1 : state
    default:
      return state
  }
}

export const useClickHandler = (state, dispatch, callback) => action => () => {
  if (action === actions.prev || action === actions.next) {
    dispatch({ type: action })
  }
  callback && callback(action, state)
}
