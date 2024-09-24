import React, { Component } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types'
import Spinner from './Spinner';

export class News extends Component {
static defaultProps = {
    country : 'us',
    category : 'general'
}

static propTypes = {
country : PropTypes.string,
category : PropTypes.string,
}
    articles = [
        
    ]

constructor(){
super();
this.state = {
articles : this.articles,
loading : false,
page:1

}
}

handleprevclick = async  ()=> {
    console.log("previous");
    let url =`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=7d5778d6aa0244c58a4b09932d6e4daf&page=${this.state.page - 1}&pageSize=30`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
        page : this.state.page - 1,
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading : false
    })
}
handlenextclick = async ()=> {
    if(!(this.state.page+1 >= Math.ceil(this.state.totalResults/30))){
    console.log("next"); 
    let url =`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=7d5778d6aa0244c58a4b09932d6e4daf&page=${this.state.page + 1}&pageSize=30`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({loading: false});
    this.setState({
        page : this.state.page + 1,
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
    })
    }
}

async componentDidMount(){
    console.log("cdn");
    let url =`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=7d5778d6aa0244c58a4b09932d6e4daf&page=1&pageSize=30`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles, loading : false})
}
  render() {
    return (
      <div className='container my-3' >
  
        <h2 className='text-center'>Top Headlines</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
        {this.state.articles.filter(article => article.title !== "[Removed]").map((element) => {
         return <div className="col-md-4" key={element.url}>
         <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} 
         Author={element.author} date={element.publishedAt}/>
         </div>
        })}
        
        </div>

        <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleprevclick}> &larr; Previous</button>
            <button disabled={this.state.page + 1 >= Math.ceil(this.state.totalResults/30)} type="button" className="btn btn-dark" onClick={this.handlenextclick}>Next &rarr; </button>
        </div>
</div>
     
    )
  }
}

export default News