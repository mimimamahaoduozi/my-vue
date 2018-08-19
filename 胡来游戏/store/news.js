const img = require.context('../pages/home/img/news', false, /^\.\/.*(\.png|\.jpg|\.gif)$/)
const imgs = img.keys().map(img)
const news = {
  left: {
    '0': {bgimg: imgs[0], className: 'col-max'},
    '1': {bgimg: imgs[1], className: 'col-mini'},
    '2': {bgimg: imgs[2], className: 'col-mini'},
    '3': {bgimg: imgs[3], className: 'col-mini'},
    '4': {bgimg: imgs[4], className: 'col-mini'}
  },
  right: {
    '0': {con: '见面会精彩回顾 《全民斩仙2》coser海报首次曝光', date: '07-30'},
    '1': {con: '天下英雄出武林《绝世武林》公测邀你加入', date: '07-04'},
    '2': {con: '磨剑六年 《全民斩仙2》6.22仙气内测畅爽来袭', date: '07-01'},
    '3': {con: '《胡莱三国2》“东吴机密”年度资料片今日首曝！', date: '06-30'},
    '4': {con: '《妖怪正传》限时测试今日开启', date: '07-30'},
    '5': {con: '道友一起捉妖可好?《妖怪正传》即将开测', date: '07-30'},
    '6': {con: '一卡通天下！ 《胡莱三国2》专属一卡通发售', date: '07-30'}
  }
}
export default news
