import React from 'react';

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
      <this.state.tag>{this.state.text}</this.state.tag>
    );
  }
}


