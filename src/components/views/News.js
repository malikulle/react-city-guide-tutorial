import React, { Component } from 'react'
import NewsCard from "../NewsCard"
import {InfoConsumer} from "../context"
class News extends Component {
    render() {
        return (
            <InfoConsumer>
                {
                    value => {
                        return value.state.news.map(item =>{
                            return <NewsCard key ={item.id} item ={item} />
                        })
                    }
                }
            </InfoConsumer>
        )
    }
}


export default News
