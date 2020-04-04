import React, { Component } from "react";
import { placeInfo, reviews, detailInfo, news } from "../data";

const InfoContext = React.createContext();

class InfoProvider extends Component {
  state = {
    info: placeInfo,
    reviews,
    detailInfo,
    news,
  };
  getItem = (id) => {
    const item = this.state.info.find((x) => x.id === id);
    return item;
  };
  handleDetail = (id) => {
    const item = this.getItem(id);
    this.setState({
      detailInfo: item,
    });
  };
  render() {
    return (
      <InfoContext.Provider value={{ state: this.state  , handleDetail : this.handleDetail}}>
        {this.props.children}
      </InfoContext.Provider>
    );
  }
}

const InfoConsumer = InfoContext.Consumer;

export { InfoConsumer, InfoProvider };
