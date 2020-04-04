import React, { Component } from "react";
import { InfoConsumer } from "../context";
import Info from "../Info"
class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <InfoConsumer>
            {(value) => {
              console.log(value)
              return value.state.info.map(item => {
                return <Info key ={item.id} info ={item} />
              })
            }}
          </InfoConsumer>
        </div>
      </div>
    );
  }
}

export default Home;
