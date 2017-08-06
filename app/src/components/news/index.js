import React from 'react'
// import {config} from './index.json'
import NewsCard from './newsCard'
const News = (props) => {
  // const title = config
  return (
    <div className="news">
      <NewsCard/>
      <NewsCard/>
    </div>
  )
}
export default News
