import React from 'react';
import SampleCard from '../SampleCard'
import styles from './style.css';
import axios from 'axios';

class SampleCardList extends React.Component {
  example = {
    "id": "1",
    "type": "movie",
    "category": "трейлер",
    "pageUrl": "sample-url",
    "name": "Железный Человек 3 / Iron Man 3"
  };
  UNIQ_KEY = "cardListkey";
  KEY_NUM = 111;
  page = 0;

  constructor(props) {
    super(props);
    this.state = {
      cardList: [this.example, this.example]
    }
  }

  updateCardList(newOnes) {
    this.setState(
      (prevState => ({
        cardList: prevState.cardList.concat(newOnes)
      }))
    );
  }

  buttonHandler() {
    //Todo Add server request emulation here
    this.page++;
    axios.get("http://localhost:3030/content?".concat("_page=").concat(this.page).concat("&_limit=").concat("10")).then(response => {
      console.log(response.data);
      this.updateCardList(response.data);
    });
  }

  render() {
    return (
      <div>
        {this.state.cardList.map((item) => {
          return <SampleCard key={this.UNIQ_KEY.concat(this.KEY_NUM++)} name={item.name} type={item.type}
                             category={item.category}/>
        })
        }
        <button onClick={this.buttonHandler.bind(this)}>Fuk me</button>
      </div>
    )
  }
}

export default SampleCardList;
