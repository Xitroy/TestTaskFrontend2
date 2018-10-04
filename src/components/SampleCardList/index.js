import React from 'react';
import SampleCard from '../SampleCard'
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import styles from './style.css';
import axios from 'axios';

import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

const customTheme = createMuiTheme({
  palette: {
    primary: {main: "#2196f3"},
    secondary: {main: '#00e676'},
  },
});

class SampleCardList extends React.Component {
  UNIQ_KEY = "cardListkey";
  KEY_NUM = 111;
  page = 1;
  port = "3030";
  url = "http://localhost".concat(":").concat(this.port).concat("/sample-feed?");

  constructor(props) {
    super(props);
    this.state = {
      cardList: [],
      limit: 10,
      filter: ""
    };
    this.loadData(10);
  }

  updateCardList(newOnes) {
    this.setState(
      (prevState => ({
        cardList: prevState.cardList.concat(newOnes)
      }))
    );
    if (newOnes.length === 0) {
      document.getElementById("loadBtn").style.display = "none";
    }
  }

  loadData() {
    axios.get(this.url.concat("_page=").concat(this.page).concat("&_limit=").concat(this.state.limit.toString()))
      .then(response => {
        this.page++;
        this.updateCardList(response.data);
      })
      .catch((err) => console.log("some shit happened")); //TODO refactor log
  }

  buttonOnClickHandler() {
    this.loadData(this.state.limit);
  }

  inputOnChangeHandler(e) {
    this.setState({
        filter: e.target.value.toLowerCase()
      }
    )
  }

  render() {
    let filtered = [].concat(this.state.cardList);
    if (this.state.filter) {
      filtered = filtered.filter((item) => {
        switch (item.type) {
          case "movie":
            try {
              return (item.name.includes(this.state.filter) || item.category.includes(this.state.filter));
            }
            catch (e) {
              // console.log(item);
              break;
            }
          case "music":
            try {
              return (item.name.includes(this.state.filter) || item.genre.includes(this.state.filter));
            }
            catch (e) {
              // console.log(item);
              break;
            }
          default:
            return false;
        }
        return false;
      })
    }

    return (
      <div className={"cardListContainer"}>
        <Input className={"searchInput"} placeholder={"Search"} onChange={this.inputOnChangeHandler.bind(this)}
               startAdornment={
                 <InputAdornment position="start">
                   <SearchIcon/>
                 </InputAdornment>
               }/>
        {filtered.map((item) => {
          return <SampleCard key={this.UNIQ_KEY.concat(this.KEY_NUM++)} name={item.name} type={item.type}
                             category={item.category} genre={item.genre} pageUrl={item.pageUrl}/>
        })
        }
        <MuiThemeProvider theme={customTheme}>
          <Button id={"loadBtn"} color={"primary"} variant="contained"
                  onClick={this.buttonOnClickHandler.bind(this)}>Load more...</Button>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default SampleCardList;
