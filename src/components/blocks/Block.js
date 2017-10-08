import React from 'react';
import Heading from './Heading';
import Text from './Text';
import Image from './Image';

export default class Block extends React.Component {
  components = {
    Heading,
    Text,
    Image,
  }

  render() {
    if (this.components.hasOwnProperty(this.props.tag)){
      const TagName = this.components[this.props.tag];
      return <TagName data={this.props.data}/>
    }else{
      return <div>{`Cannot find component ${this.props.tag}`}</div>
    }
  }
}