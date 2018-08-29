// https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=39.90622&longitude=11..52818&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5
// 商家列表

// https://h5.ele.me/restapi/shopping/v1/restaurants/outside_filter/attributes?latitude=39.90622&longitude=119.52818&terminal=h5
// 排序方式

// https://h5.ele.me/restapi/shopping/openapi/entries?latitude=39.90622&longitude=119.52818&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5
// banner

import ajax from './fetch'
const BASE_URL = '/api'
//请求banner部分  食品分类
export const reqBanners = () => ajax(BASE_URL + '/restapi/shopping/openapi/entries?latitude=39.90622&longitude=119.52818&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5')
