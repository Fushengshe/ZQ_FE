import React from 'react'
import { Link } from 'react-router'
const NewsLink = (props) => {
  const links = props.links
  //console.log(links);

    const linksItem = links.map((item, index) => {
      // console.log(item)
      return (
        <li className="news-card-link-item" key={index} >
          <Link to={`${props.pathname}/${item.id}`}>{item.title}</Link>
        </li>
      )
    })


  //console.log(linksItem)
  return (
    <ul>
      {linksItem}
    </ul>
  )
}
export default NewsLink