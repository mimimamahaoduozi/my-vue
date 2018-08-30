import * as type from './mutation-types'
import * as dispath from '../api'
export default {
  async getbanner ({commit}) {
    const result = await dispath.reqBanners()
    // console.log(result)
    commit(type.GET_BANNER, result)
  },
  async getSort ({commit}) {
    const result = await dispath.reqSort()
    console.log(result)
    commit(type.GET_SHOP_SORT, result)
  },
}
