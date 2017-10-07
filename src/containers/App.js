import React, { Component } from 'react';
import '../styles/App.css';
import Module from '../components/modules';
import 'font-awesome/css/font-awesome.css';
import DropTarget from '../components/dropTarget';
import Heading from '../components/blocks/Heading';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      blocks: [],
      modules: [
        { name: 'Heading', icon: 'header', order: 1, tag: 'AncHeading' },
        { name: 'Text', icon: 'text-width', order: 2, tag: 'AncText' },
        { name: 'Image', icon: 'picture-o', order: 3, tag: 'AncImage' },
      ]
    }
  }

  render() {
    const modules = this.state.modules.map((module, index)=> <Module key={index} module={module}/>);
    const blocks = this.state.blocks.map((block) => <block.tag data={block.data}></block.tag>);
    return (
      <div className="App">
        <div className="anc-container">
          <div className="anc-modules">
            { modules }
          </div>
          <div className="anc-builder">
            <DropTarget blocks={this.state.blocks} />
            { blocks }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
