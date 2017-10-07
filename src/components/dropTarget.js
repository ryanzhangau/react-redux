import React from 'react';
import { connect } from 'react-redux';
import { addBlock } from "../actions/blockActions";

class DropTarget extends React.Component {
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

  dragOver (e) {
    e.preventDefault();
    return false
  }

  drop(e) {
    console.log('drop', e);
    this.setState({ dragEnter: false });
  }

  render () {
    return (
      <div className={this.getClass()}
           onDragEnter={this.dragEnger.bind(this)}
           onDragLeave={this.dragLeave.bind(this)}
           onDragOver={this.dragOver.bind(this)}
           onDrop={this.drop.bind(this)}
      >
        {this.props.blocks.length > 0 ? '' : 'Drop Here'}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    block: state.blockReducer
  }
}

const mapDispatchToProps = () => {
  return {
    addBlock,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DropTarget);
