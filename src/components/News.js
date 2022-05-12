import React, { Component } from 'react'
import { NewsItem } from '../NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export  class News extends Component {
    // articles ek array hai
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general',
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,

    }
    

    constructor(){
        super();
        // console.log("i am a constructor from news component");
        // this.state={} --> ye  humlog ne ek object banaya hai
        this.state={     
            articles: [],  
            loading: false,
            page:1    

        }
    }
    async componentDidMount(){
        // console.log("cdm");
        let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=544b1919f1a648b4aba16d29cc586a15&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data= await fetch(url);
        let parsedData= await data.json()
        console.log(parsedData);
        this.setState({articles: parsedData.articles , totalResults: parsedData.totalResults, loading: false})
    }
    handlePrevClick = async () =>{
        // console.log("previous");
        let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=544b1919f1a648b4aba16d29cc586a15&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
            this.setState({loading: true});
            let data= await fetch(url);
            let parsedData= await data.json();
            console.log(parsedData);
            
        this.setState({
            page: this.state.page -1,
            articles: parsedData.articles,
            loading: false
            


        })   
    }
    handleNextClick =async () =>{
        console.log("next");
        if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props))){

        
        let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=544b1919f1a648b4aba16d29cc586a15&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
            this.setState({loading: true});
            let data= await fetch(url);
            let parsedData= await data.json();
            
            
            this.setState({
                page: this.state.page +1,
                articles: parsedData.articles,
                loading: false


        })   
        }
        
    }
        
    
    render() {
        console.log("render");
        return (
            
            <div className="container  my-3">
                <h2 className="text-center">Today's- Top Headlines</h2>
                {this.state.loading && <Spinner/>}
                <div className="row">
                {!this.state.loading && this.state.articles.map((element)=>{
                       return <div className="col-md-4" key={element.url}>
                
                        <NewsItem   title={element.title?element.title.slice(0,48):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                        </div>

                })}
                </div>
                <div className="container d-flex justify-content-between">
                <button type="button" disabled={this.state.page<=1} class="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
                <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>


                </div>
            </div>

                
            
        )
    }
   

}


    



