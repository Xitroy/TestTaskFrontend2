import React from "react";
import PropTypes from 'prop-types';
import styles from './style.css';

class SampleCard extends React.Component {
  UNIQ_KEY = "cardkey";
  KEY_NUM = 111;
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={"cardContent"}>
        {Object.keys(this.props).map((item)=>{
          return <div key={this.UNIQ_KEY.concat(this.KEY_NUM++)} className={"card".concat(item.charAt(0).toUpperCase()+item.substr(1))}>{this.props[item]}</div>
        })}

        {/*In case if generalization is a bad idea - use code below
        But it should be good, because props will be controlled outside*/}
        {/*<div className={"cardName"}>{this.props.name} </div>*/}
        {/*<div className={"cardType"}>{this.props.type} </div>*/}
        {/*<div className={"cardCategory"}>{this.props.category} </div>*/}

      </div>
    )
  }
}

SampleCard.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
};
export default SampleCard;