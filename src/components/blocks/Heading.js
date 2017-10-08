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

  componentWillMount () {
    this.setState({ tag: this.props.data.tag, text: this.props.data.text });
  }

  updateText(text) {

  }

  render () {
    return (
      <div className='block-wrap'>
        <this.state.tag>
          <input type="text" value={this.state.text} onChange={(text) => this.updateText(text)}/>
        </this.state.tag>
        <DropTarget id={this.props.key}></DropTarget>
      </div>
    );
  }
}

export const headingData = {
  id: '',
  pid: '',
  dropAt: '',
  name: 'Heading',
  type: 'Heading',
  data: {
    tag: 'h1',
    text: 'Heading',
  },
  hasSub: false,
  subNum: 0
}

export const headingBlock = {name: 'Heading', icon: 'header', order: 1, tag: 'AncHeading'}