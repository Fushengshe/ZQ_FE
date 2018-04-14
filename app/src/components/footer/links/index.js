import React from 'react'
import BottomPic from './bottom_logo.png'
import './index.less'

const links = (props) => {
  return (
    <div className="links">

      <div className="links-item">

        <div className="link-item-detail">
          <a href="http://www.cflac.org.cn">
          中国文艺网
          </a>
        </div>
        <div className="link-item-detail">
          <a href="http://www.zhscxh.com">
            中华诗词学会
          </a>
        </div>
        <div className="link-item-detail">
          <a href="http://www.china-ysc.cn">
            中国楹联学会
          </a>
        </div>
        <div className="link-item-detail">
          <a href="http://www.zgylb.net">
            中国楹联报
          </a>
        </div>
        <div className="link-item-detail">
          <a href="http://www.zhgc.com">
            中华国粹网
          </a>
        </div>
        <div className="link-item-detail">
          <a href="http://bbs.zhsc.net">
            中华诗词论坛
          </a>
        </div>
      </div>

      <div className="links-item-pic">
        <img src={BottomPic} alt="" />
      </div>
      <div className="links-item">
        <div className="link-item-detail">
          <a href="http://s.lapsang.cn">
             正山堂书画院
          </a>
        </div>
        <div className="link-item-detail">
          <a href="http://sou-yun.com">
          搜韵
          </a>
        </div>
        <div className="link-item-detail">
          <a href="http://www.artron.net">
          雅昌艺术
          </a>
        </div>
        <div className="link-item-detail">
          <a href="http://www.zdic.net">
            汉典
          </a>
        </div>
        <div className="link-item-detail">
          <a href="http://www.shufazidian.com">
          书法字典
          </a>
        </div>
        <div className="link-item-detail">
          <a href="http://gongchepu.net">
          昆曲工尺谱数字化
          </a>
        </div>
      </div>
    </div>
  )
}
export default links
