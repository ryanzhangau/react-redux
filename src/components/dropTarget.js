import React from 'react';

export default class DropTarget extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dragEnter: false };
  }

  getClass () {
    return `${this.props.blocks.length > 0 ? 'drop-target' : 'init'}  ${this.state.dragEnter ? 'active' : ''}`;
  }

  dragEnger() {
    this.setState({ dragEnter: true });
  }

  dragLeave() {
    this.setState({ dragEnter: false });
  }

  render () {
    return (
      <div className={this.getClass()}
           onDragEnter={this.dragEnger.bind(this)}
           onDragLeave={this.dragLeave.bind(this)}
      >
        {this.props.blocks.length > 0 ? '' : 'Drop Here'}
      </div>
    )
  }
}