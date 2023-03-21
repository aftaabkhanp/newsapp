import React from 'react'
import './NewsCard.css'
function NewsCard(props) {
  const date=props.date.toLocaleString('default', { month: 'short' })+" "+props.date.getDate()+" "+props.date.getFullYear();
  return (
    <div className='NewsCard'>
        <div className='news-img'>
            <img src={props.urlToImage} alt='random news' width={250} height={150}></img>
            <p className='news-date'>{date}</p>
        </div>
        <p className='news-content'>
            <b>{props.news }</b>
          
        </p>
        <a className='read-more-btn' href={props.src} target="_blank" rel="noopener noreferrer">Read more</a>
    </div>
  )
}

export default NewsCard