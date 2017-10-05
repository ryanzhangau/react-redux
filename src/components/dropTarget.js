import React from 'react';

export default class DropTarget extends React.Component {

  getClass () {
    return (this.props.blocks.length > 0 ? 'drop-target' : 'init');
  }

  dragEnger() {
    console.log('drag enter');
  }

  dragLeave() {
    console.log('drag leave');
  }

  render () {
    return (
      <div className={this.getClass()}
           onDragEnter={this.dragEnger}
           onDragLeave={this.dragLeave}
      >
        {this.props.blocks.length > 0 ? '' : 'Drop Here'}
      </div>
    )
  }
}