import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl, Author, date } = this.props;
    return (
      <div className="container my-3">
        <div className="card" style={{
          width: '18rem',
          height:'100%'
        }}>
          <img src={!imageUrl ?"https://gizmodo.com/app/uploads/2024/08/00-hero-1-e1723233699157.jpg":imageUrl} className="card-img-top" alt="..." style={{
            height: '150px',
            width: '100%',
          }} />
          <div className="card-body" style={{
            textAlign:'center'
          }}>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p style={{
              fontSize:'12px'
            }}>Published by {Author} on {new Date(date).toGMTString()} </p>
            <a href={newsUrl} target='blank' className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>

      </div>
    )
  }
}

export default NewsItem