import wepy from 'wepy'

export default async function (option) {
  //文档->https://developers.weixin.qq.com/minigame/en/dev/api/network/request/wx.request.html?search-key=request
  let response = await wepy.request(option)
}