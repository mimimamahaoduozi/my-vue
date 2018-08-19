const img = require.context('../assets/banner', false, /^\.\/.*(\.png|\.jpg|\.gif)$/)
const imgs = img.keys().map(img)
const img1 = require.context('../assets/banner/content/logoimg', false, /^\.\/.*(\.png|\.jpg|\.gif)$/)
const logoimgs = img1.keys().map(img1)
const img2 = require.context('../assets/banner/content/conimg', false, /^\.\/.*(\.png|\.jpg|\.gif)$/)
const conimgs = img2.keys().map(img2)
// banner的信息
const banner = {
  state: {
    '0': {bgimg: imgs[0], logoimg: logoimgs[0], conimg: conimgs[0], title: 'nihao', con: 'buhao'},
    '1': {bgimg: imgs[1], logoimg: logoimgs[1], conimg: conimgs[1], title: 'nihao', con: 'buhao'},
    '2': {bgimg: imgs[2], logoimg: logoimgs[2], conimg: conimgs[2], title: 'nihao', con: 'buhao'},
    '3': {bgimg: imgs[3], logoimg: logoimgs[3], conimg: conimgs[3], title: 'nihao', con: 'buhao'},
    '4': {bgimg: imgs[4], logoimg: logoimgs[4], conimg: conimgs[4], title: 'nihao', con: 'buhao'},
    '5': {bgimg: imgs[5], logoimg: logoimgs[5], conimg: conimgs[5], title: 'nihao', con: 'buhao'},
    '6': {bgimg: imgs[6], logoimg: logoimgs[6], conimg: conimgs[6], title: 'nihao', con: 'buhao'},
    '7': {bgimg: imgs[7], logoimg: logoimgs[7], conimg: conimgs[7], title: 'nihao', con: 'buhao'}
  }
}
export default banner
