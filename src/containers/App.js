import React, { Component } from 'react';
import '../styles/App.css';
import Module from '../components/modules';
import 'font-awesome/css/font-awesome.css';
import DropTarget from '../components/dropTarget';
import { connect } from 'react-redux';
import Block from '../components/blocks/Block'


class App extends Component {
  render() {
    const blocks = this.props.blockData.blocks.map(
      (block) => {
        return <Block key={block.id} block={block}/>
      });
    return (
      <div className="App">
        <div className="anc-container">
          <div className="anc-modules">
            <Module />
          </div>
          <div className="anc-builder">
            { blocks }
            <DropTarget id="" droppable={true} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    blockData: state.blockReducer
  }
};

const mapDispatchToProps = () => {
  return {};
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
