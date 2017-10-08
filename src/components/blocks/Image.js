import React from 'react';
import DropTarget from '../dropTarget';

export default class Image extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tag: 'img',
      src: '',
      alt: ''
    }
  }

  render () {
    return (
      <div className='block-wrap'>
        <img src={this.state.src} alt={this.state.alt}/>
        <DropTarget id={this.props.id}></DropTarget>
      </div>
    );
  }
}

export const imageData = {
  id: '',
  pid: '',
  dropAt: '',
  name: 'Image',
  type: 'Image',
  data: {
    tag: 'img',
    src: '',
  },
  hasSub: false,
  subNum: 0
}

export const imageBlock = {name: 'Image', icon: 'picture-o', order: 3, tag: 'AncImage'};