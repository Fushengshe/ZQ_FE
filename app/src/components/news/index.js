import React from 'react'
// import {config} from './index.json'
import NewsCard from './newsCard'
import NewsExpCard from './newsExp'
const News = (props) => {
  // const title = config
  return (
    <div className="news">
      <NewsCard/>
      <NewsExpCard/>
    </div>
  )
}
export default News
