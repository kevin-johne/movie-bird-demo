import React from 'react'
import * as api from '../service/api'
import Episode from './Episode'
import './Set.css'

class Set extends React.Component {
  constructor(args) {
    super(args);

    this.set = [];
    this.state = {
      loaded: false
    };

    api.fetchSet(args.match.params.uid).then(this.handleDataLoaded);
  }

  render() {
    let content;
    if (this.set && this.set.items) {
      content = this.set.items.map((entry) => {
        switch (entry.content_type) {
          case 'divider':
            return Set.createDivider(entry);
          case 'episode':
            return Set.createEpisode(entry);
          default:
            return;
        }
      });
    }

    return (
      <div>
        <h1 className="app__title">{this.set.title}</h1>
        <div className="set">
          {content}
        </div>
      </div>
    )
  }

  static createDivider(divider) {
    return (
      <h2 className="divider__title">{divider.heading}</h2>
    );
  }

  static createEpisode(episode) {
    let contentId = episode.content_url.match(/film_\w*\d*/)[0];

    return (
      <Episode
        preview={true}
        uid={contentId}
      />
    );
  }

  handleDataLoaded = (data) => {
    this.set = data;
    this.setState({loaded: true});
  }
}

export default Set;