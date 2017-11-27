import React from 'react'
import {Link} from 'react-router-dom'
import * as api from '../service/api'
import Image from "./Image";
import './Episode.css'

class Episode extends React.Component {
  constructor(args) {
    super(args);

    this.episode = {};
    this.state = {
      loaded: false
    };
    this.uid = this.props.uid || args.match.params.uid;

    api.fetchEpisode(this.uid).then(this.handleDataLoaded);
  }

  render() {
    if (this.props.preview) {
      return this.getPreview();
    } else {
      return this.getDetail();
    }
  }

  getPreview() {
    let image;
    if (this.episode.image_urls && this.episode.image_urls[0]) {
      image = <Image apiUrl={this.episode.image_urls[0]}/>
    }

    return (
      <div className="episode-preview">
        <Link to={`/episode/${this.props.uid}`}>
          {image}
          <span className="episode-preview__title">
            {this.episode.title}
          </span>
        </Link>
      </div>
    );
  }

  getDetail() {
    let image;
    let title;

    if (this.episode) {
      title = this.episode.title;

      if (this.episode.image_urls && this.episode.image_urls.length > 0) {
        image = <Image apiUrl={this.episode.image_urls[0]}/>;
      }
    }

    return (
      <div className="episode">
        <h1>{title}</h1>
        {image}
      </div>
    )
  }

  handleDataLoaded = (res) => {
    this.episode = res;
    this.setState({loaded: true});
  }
}

export default Episode;