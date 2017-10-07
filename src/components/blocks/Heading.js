import React from 'react';
import DropTarget from '../dropTarget';

export default class Heading extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tag: 'h1',
      text: '',
    }
  }

  render () {
    return (
      <div className='block-wrap'>
        <this.state.tag>{this.state.text}</this.state.tag>
        <DropTarget id={this.props.id}></DropTarget>
      </div>
    );
  }
}

export const headingData = {
  id: '',
  pid: '',
  dropAt: '',
  name: 'Heading',
  data: {
    tag: 'h1',
    text: '',
  },
  hasSub: false,
  subNum: 0
}

export const headingBlock = {name: 'Heading', icon: 'header', order: 1, tag: 'AncHeading'}