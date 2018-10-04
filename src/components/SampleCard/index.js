import React from "react";
import PropTypes from 'prop-types';
import styles from './style.css';
import Card from '@material-ui/core/Card';

class SampleCard extends React.Component {
  UNIQ_KEY = "cardkey";
  KEY_NUM = 111;

  render() {
    return (
      <div className={"cardContent"}>
        <Card className={"cardInfo"}>
          {/*Generalization example*/}
          {/*{Object.keys(this.props).map((item) => {*/}
          {/*return (*/}
          {/*<div key={this.UNIQ_KEY.concat(this.KEY_NUM++)}*/}
          {/*className={"card".concat(item.charAt(0).toUpperCase() + item.substr(1))}>*/}
          {/*{this.props[item]}*/}
          {/*</div>*/}
          {/*)*/}
          {/*})}*/}

          <div className={"cardName"}><span className={"field"}>Name:</span> <span className={"fieldData"}>{this.props.name}</span> </div>
          <div className={"cardType"}><span className={"field"}>Type:</span> <span className={"fieldData"}>{this.props.type}</span> </div>
          <div className={"cardCategory"}><span className={"field"}>Category:</span> <span className={"fieldData"}>{this.props.category}</span></div>
        </Card>
        <a href={this.props.pageUrl} className={"cardLink"}>Download</a>
      </div>
    )
  }
}

SampleCard.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  category: PropTypes.string,
  genre: PropTypes.string,
  pageUrl: PropTypes.string
};
export default SampleCard;