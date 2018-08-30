import * as type from './mutation-types'

export default {
  [type.GET_FOOD_LISTS] (state, {foodlists}) {
    state.foodlists = foodlists
  },
  [type.GET_BANNER] (state, bannerlists) {
    state.bannerlists = bannerlists
  },
  [type.GET_SHOP_SORT] (state, shopSort) {
    state.shopSort = shopSort
  }
}
