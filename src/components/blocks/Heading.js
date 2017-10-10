import React from 'react';
import DropTarget from '../dropTarget';
import { connect } from 'react-redux';
import { updateData } from '../../actions/blockActions'


class Heading extends React.Component {

  setText(e) {
    this.props.updateData(this.props.id, {attr: 'text', value: e.target.value});
  }

  getText() {
    return this.props.blockData.blocks.filter((b) => b.id === this.props.id)[0].data.text;
  }

  setTag(e) {

  }

  getTag() {
    return this.props.blockData.blocks.filter((b) => b.id === this.props.id)[0].data.tag;
  }

  render () {
    const TagName = this.getTag();
    const value = this.getText();
    return (
      <div className='block-wrap'>
        <DropTarget id={this.props.id} />
        <TagName>
          <input type="text" value={value} onChange={this.setText.bind(this)}/>
        </TagName>
      </div>
    );
  }
}

export const headingData = {
  id: '',
  pid: '',
  dropAt: '',
  name: 'Heading',
  type: 'Heading',
  data: {
    tag: 'h1',
    text: 'Heading',
  },
  hasSub: false,
  subNum: 0
}

export const headingBlock = {name: 'Heading', icon: 'header', order: 1, tag: 'AncHeading'};

const mapStateToProps = (state) => {
  return {
    blockData: state.blockReducer
  }
};

const mapDispatchToProps = () => {
  return {
    updateData
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Heading);