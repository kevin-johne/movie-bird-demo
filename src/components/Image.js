import React from 'react';
import * as api from '../service/api';

class Image extends React.Component {
  constructor(args) {
    super(args);

    this.image = {};
    this.state = {
      loaded: false
    };

    api.fetchImage(this.props.apiUrl).then(this.handleDataLoaded);
  }

  render() {
    return (
      <img src={this.image.url} title={this.image.tite} alt={this.image.title}/>
    )
  }

  handleDataLoaded = (res) => {
    this.image = res;
    this.setState({loaded: true});
  }
}

export default Image;