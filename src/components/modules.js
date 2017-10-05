import React from 'react';

export default class Module extends React.Component {

  dragstart() {
    console.log('drag start');
  }

  dragend() {
    console.log('drag end');
  }
  render() {
    return (
      <div className={`module ${this.props.module.name}`} draggable="true"
           onDragStart={this.dragstart}
           onDragEnd={this.dragend}
      >
        <i className={`fa fa-fw fa-${this.props.module.icon}`}></i>
        <p>{this.props.module.name}</p>
      </div>
    );
  }
}