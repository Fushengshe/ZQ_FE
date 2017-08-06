import React from 'react'
import {Link} from 'react-router'
const NewsLink = (props) => {
  const links = props.links
  const linksItem = links.map((item, index) => {
    // console.log(item)
    return (
      <li className="news-card-link-item" key={index} >
        <Link to={`${props.pathname}/${index}`}>{item}</Link>
      </li>
    )
  })
  // console.log(linksItem)
  return (
    <ul>
      {linksItem}
    </ul>
  )
}
export default NewsLink