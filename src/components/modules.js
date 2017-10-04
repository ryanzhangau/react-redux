import React from 'react';

export default class Module extends React.Component {
  render() {
    return (
      <div className={`module ${this.props.module.name}`}>
        <i className={`fa fa-fw fa-${this.props.module.icon}`}></i>
        <p>{this.props.module.name}</p>
      </div>
    );
  }
}