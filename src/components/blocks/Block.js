import React from 'react';
import { connect } from 'react-redux';
import { removeBlock } from "../../actions/blockActions";
import DropTarget from '../dropTarget';
import Heading from './Heading';
import Text from './Text';
import Image from './Image';

class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = { droppable: true }
  }

  remove(id){
    this.props.removeBlock(id);
  }

  dragStart(e, data) {
    e.dataTransfer.setData('opts', JSON.stringify(data));
    this.setState({ droppable: false });
  }

  dragEnd() {
    this.setState({ droppable: true })
  }

  render() {
    const components = {
      Heading,
      Text,
      Image,
    };

    if (components.hasOwnProperty(this.props.block.type)){
      const TagName = components[this.props.block.type];
      return (
        <div className="block-wrap">
          <div className="block-handle" draggable="true"
               onDragStart={(e) => this.dragStart(e, this.props.block.data)}
               onDragEnd={this.dragEnd.bind(this)}
          >
            <a className='button success tiny'>
              <i className="fa fa-fw fa-pencil-square-o"></i>
            </a>
            <div>{this.props.block.type}</div>
            <a className='button alert tiny' data-id={this.props.block.id} onClick={() => this.remove(this.props.block.id)}>
              <i className="fa fa-fw fa-trash"></i>
            </a>
          </div>
          <DropTarget id={this.props.block.id} />
          <TagName id={this.props.block.id} droppable={this.state.droppable}/>
        </div>)
    }else{
      return <div className="block-wrap">
        {`Cannot find component ${this.props.block.type}`}
        </div>
    }
  }
}

const mapStateToProps = (state) => {
  return {
    blockData: state.blockReducer
  }
}

const mapDispatchToProps = () => {
  return {
    removeBlock,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Block);
