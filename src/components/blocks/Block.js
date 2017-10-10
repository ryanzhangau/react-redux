import React from 'react';
import DropTarget from '../dropTarget';
import Heading from './Heading';
import Text from './Text';
import Image from './Image';

export default class Block extends React.Component {

  render() {
    const components = {
      Heading,
      Text,
      Image,
    };

    if (components.hasOwnProperty(this.props.tag)){
      const TagName = components[this.props.tag];
      return (
        <div className="block-wrap">
          <div className="block-handle">
            <a className='button success tiny'>
              <i className="fa fa-fw fa-pencil-square-o"></i>
            </a>
            <div>{this.props.tag}</div>
            <a className='button alert tiny'>
              <i className="fa fa-fw fa-trash"></i>
            </a>
          </div>
          <DropTarget id={this.props.id} />
          <TagName id={this.props.id}/>
        </div>)
    }else{
      return <div className="block-wrap">
        {`Cannot find component ${this.props.tag}`}
        </div>
    }
  }
}