import React from 'react';
import { connect } from 'react-redux';
import { removeBlock } from "../../actions/blockActions";
import DropTarget from '../dropTarget';
import Heading from './Heading';
import Text from './Text';
import Image from './Image';

class Block extends React.Component {

  remove(id){
    console.log(id);
    this.props.removeBlock(id);
  }

  render() {
    const components = {
      Heading,
      Text,
      Image,
    };

    if (components.hasOwnProperty(this.props.tag)){
      const TagName = components[this.props.tag];
      return (
        <div className="block-wrap">
          <div className="block-handle">
            <a className='button success tiny'>
              <i className="fa fa-fw fa-pencil-square-o"></i>
            </a>
            <div>{this.props.tag}</div>
            <a className='button alert tiny' data-id={this.props.id} onClick={() => this.remove(this.props.id)}>
              <i className="fa fa-fw fa-trash"></i>
            </a>
          </div>
          <DropTarget id={this.props.id} />
          <TagName id={this.props.id}/>
        </div>)
    }else{
      return <div className="block-wrap">
        {`Cannot find component ${this.props.tag}`}
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
