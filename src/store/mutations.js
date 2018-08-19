import * as type from './mutation-types'

export default {
  [type.GET_FOOD_LISTS] (state, {foodlists}) {
    state.foodlists = foodlists
  }
}
