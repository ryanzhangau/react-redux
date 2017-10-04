import React from 'react';

export default class DropTarget extends React.Component {

  getClass () {
    return (this.props.blocks.length > 0 ? 'drop-target' : 'init');
  }

  render () {
    return (
      <div className={this.getClass()}>
        {this.props.blocks.length > 0 ? '' : 'Drop Here'}
      </div>
    )
  }
}