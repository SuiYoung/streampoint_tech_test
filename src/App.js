//import functions from React library
import React, { Component } from "react";

// import css for the App Component
import './App.css'; 

//import css for the antd design for react
import 'antd/dist/antd.less';

//import components from antd

//import components
import Header from "./Components/Header";
import Card from "./Components/Card";
import Aside from "./Components/Aside";

class App extends Component {
  constructor() {
    super();
    this.state={
      asideOpen: false,
      cards:[ 'card' ],
    };
  }
  
  //functionality codes here:
  //function to slide drawer on click
    // function to slide the aside in and out.
    asideToggleClickHandler = () => {
      this.setState(prevState => {
        return { asideOpen: !prevState.asideOpen };
      });
    };

    //Duplicate card on click
    addNewCard = () => {
      let newCard = [...this.state.cards];
      newCard.push('newCard');
      this.setState({ cards:newCard })
    }

  render() {

    let drawer;
    if (this.state.asideOpen) {
      drawer = <Aside />;
    }

    return(
      <div className="app">

        <header>
          <Header />
        </header>

        {drawer}

        <main>
          {/* iterate the card array */}
          {this.state.card.map((card, i) => {
              <Card click={this.asideToggleClickHandler} cardProp={card} indexProp={i}/>
            })}
        </main>

      </div>
    )
  }

  //need header: SPSASGMT
  //need cards; default 1 card: Custom title, and custom body text
  // press duplicate card to create another card where the user can add more customizable cards
  //press trashcan to delete the card
  //pencil to edit content

}



export default App;
