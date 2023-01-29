import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

  constructor() {
    super();
    console.log("Hello I am constructor from News component");
    this.state = {
      articles: [],
      loading: false,
      page:1
    };
  }

  async componentDidMount(){
    //console.log("Hello2")
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=28260cebe0464bd680a562169f7e0e5f&page=1";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles,totalResults:parsedData.totalResults})
  }

  handlePrevClick = async ()=>{
    console.log('Previous')
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=28260cebe0464bd680a562169f7e0e5f&page=${this.state.page - 1}&pagesize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
  }

  handleNextClick = async ()=>{
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

    }
    else{
      console.log('Next')
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=28260cebe0464bd680a562169f7e0e5f&page=${this.state.page + 1}&pagesize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
      })
    }
  }

  render() {
    //console.log("Hello")
    return (
      <div className="container my-3">
        <h2>NewsCaster - Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem
              title={element.title?element.title:""}
              description={element.description?element.description:""}
              imageUrl={element.urlToImage}
              newsUrl={element.url}
            />
          </div>
        })}       
        </div>

        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
