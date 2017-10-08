import React from 'react';
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
      return <TagName id={this.props.id}/>
    }else{
      return <div>{`Cannot find component ${this.props.tag}`}</div>
    }
  }
}