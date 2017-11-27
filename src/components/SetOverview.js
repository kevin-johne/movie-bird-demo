import React from 'react'
import {connect} from 'react-redux'
import SetPreview from './SetPreview'
import * as api from '../service/api'
import './Set.css'

class SetOverview extends React.Component {
  constructor(args) {
    super(args);

    this.sets = [];
    this.state = {
      loaded: false
    };

    api.fetchSets().then(this.handleDataLoaded);
  }

  render() {
    return (
      <div>
        <h1 className="app__title">Categories</h1>
        <div className="set-overview">
          {SetOverview.grid(this.sets)}
        </div>
      </div>
    )
  }

  static grid(sets) {
    return sets.map((set, index) => {
      let imageUrl;
      if (set.image_urls && set.image_urls[0]) {
        imageUrl = set.image_urls[0];
      }

      return (
        <div className="set-overview__item" key={index}>
          <SetPreview
            key={index}
            title={set.title}
            uid={set.uid}
            imageUrl={imageUrl}/>
        </div>
      );
    });
  }

  handleDataLoaded = (res) => {
    this.sets = res;
    this.setState({loaded: true});
  }
}

export default SetOverview;