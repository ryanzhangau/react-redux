import React from 'react';
import { headingData, headingBlock } from "./blocks/Heading";
import { textData, textBlock } from "./blocks/Text";
import { imageData, imageBlock } from "./blocks/Image";

export default class Module extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modules: [
        { block: headingBlock, data: headingData },
        { block:textBlock, data: textData },
        { block: imageBlock, data: imageData },
      ]
    }
  }

  dragStart(e, data) {
    e.dataTransfer.setData('opts', JSON.stringify(data));
  }


  render() {
    const blocks = this.state.modules.map((b) => {
       return  <div className={`module ${b.block.name}`} key={b.block.order} draggable="true"
             onDragStart={(e) => this.dragStart(e, b.data)}
             onDragEnd={this.dragEnd}
        >
          <i className={`fa fa-fw fa-${b.block.icon}`}></i>
          <p>{b.block.name}</p>
        </div>;
      })
    return (
      <div>{ blocks }</div>
    );
  }
}