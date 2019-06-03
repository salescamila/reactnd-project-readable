export const ORDER_BY = 'ORDER_BY'

export function orderPostsBy(order) {
  return {
    type: ORDER_BY,
    order,
  }
}

export function orderBy(order) {
  return (dispatch) => {
    dispatch(orderPostsBy({order}))
  }
}
