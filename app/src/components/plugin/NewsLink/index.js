import React from 'react'
import { Link } from 'react-router'
const NewsLink = (props) => {
  const links = props.links
    const linksItem = links.map((item, index) => {
      return (
        <li className="news-card-link-item" key={index} >
          <Link to={`${props.pathname}/${item.id}`}>{item.title}</Link>
        </li>
      )
    })
  return (
    <ul>
      {linksItem}
    </ul>
  )
}
export default NewsLink