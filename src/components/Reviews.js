import React, { Component } from 'react'
import ReviewCard from "./ReviewCard"
import {InfoConsumer} from "./context"
class Reviews extends Component {
    render() {
        return (
            <InfoConsumer>
                {
                    value => {
                        return value.state.reviews.map(person => {
                            return <ReviewCard key={person.id} person = {person} />
                        })
                    }
                }
            </InfoConsumer>
        )
    }
}


export default Reviews