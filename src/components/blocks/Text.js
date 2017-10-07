import React from 'react';
import DropTarget from '../dropTarget';

export default class Text extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tag: 'textarea',
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

export const textData = {
  id: '',
  pid: '',
  dropAt: '',
  name: 'Text',
  data: {
    tag: 'textarea',
    text: '',
  },
  hasSub: false,
  subNum: 0
};

export const textBlock = {name: 'Text', icon: 'text-width', order: 2, tag: 'AncText'};