import React from 'react';
import {Link} from 'react-router-dom'
import Image from './Image';
import './Set.css'

class SetPreview extends React.Component {
  render() {
    let image;
    if (this.props.imageUrl) {
      image = <Image apiUrl={this.props.imageUrl}/>
    }

    return (
      <div className="set-preview">
        <Link to={`/set/${this.props.uid}`}>
          <span className="set-preview__title">
            {this.props.title}
          </span>
          {image}
        </Link>
      </div>
    );
  }
}

export default SetPreview;