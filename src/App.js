//import functions from React library
import React, { Component } from "react";
import reactCSS from "reactcss";
// import css for the App Component
import "./App.css";
//import css for the antd design for react
import "antd/dist/antd.css";
//import image assets
import duplicate from "./assets/duplicate-ant-design_copy-twotone.png";
import edit from "./assets/edit-ant-design_edit-twotone.png";
import deleteButton from "./assets/delete-ant-design_delete-twotone.png";
import deleteButtonGray from "./assets/delete-grey-ant-design_delete-twotone.png";
//import components from antd
import { Button } from "antd";
//import components
import Header from "./Components/Header";
import Aside from "./Components/Aside";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asideOpen: false,
      targetCard: null,
      border:false,
      cards: [
        {
          titleText: 'Default card ID 0 Custom title',
          bodyText: 'Custom body text',
          cardId: 0,
          titleSize: '36px',
          titleColor: "#000000",
          bodySize: '16px',
          bodyColor: "#000000",
          panelCorners: '16px',
          panelColor: "#FFFFFF",
        },

      ],
    };
  }

  //Duplicate card on click
  addNewCard = () => {
    let newCard = [...this.state.cards];

    let cardsArraySize = this.state.cards.length;
    newCard.push(
      {
        titleText: `Custom title-${cardsArraySize}`,
        bodyText: 'Custom body text',
        cardId: cardsArraySize,
        titleSize:'36px',
        titleColor: "#000000",
        bodySize: '16px',
        bodyColor: "#000000",
        panelCorners: '16px',
        panelColor: "#FFFFFF",
        border:false
      },
    );
    this.setState({ cards: newCard });
  };

  removeCard = (cardId) => {
    if (this.state.cards.length === 1) {
      return;
    } else {

      let currentCards = this.state.cards;
      for ( let [index, card] of currentCards.entries() ) {
        if (card.cardId === cardId) {
          currentCards.splice(index, 1);
        }
      }

      // const currentCards = [...this.state.cards];
      // currentCards.splice(cardId, 1);
      this.setState({ cards: currentCards });
      this.checkCardsLeft();
    }
  };

    //define gray out options for the delete card button if there is only 1 card; gray-out the trash can.
    checkCardsLeft = () => {
      if (this.state.cards.length === 1) {
        this.deleteButtonOptions = deleteButtonGray;
      } else {
        this.deleteButtonOptions = deleteButton;
      }
    };

    //functionality codes here:

    //function to slide drawer on click
    // function to slide the aside in and out.
    toggleAside = (cardId) => {
      //***alternative method:
      // if (this.state.asideOpen === false) {
      //   let newState = {
      //     asideOpen: true,
      //     cards: [...this.state.cards],
      //   };
      //   this.setState(newState);
      // } else {
      //   let newState = {
      //     asideOpen: false,
      //     cards: [...this.state.cards],
      //   };
      //   this.setState(newState);
      // }
      this.setState({ asideOpen: !this.state.asideOpen });

      //click this to collect ID of the specific card.
      this.setState({ targetCard: cardId })
      this.setState({ border: !this.state.border })
      
      // console.log(cardId);
    };

    //set toggle off when clicking off the aside only if the aside is open.
    toggleOff = () => {
      if (this.state.asideOpen === true) {
        this.toggleAside()
      } else {
        return;
      };
    }

    //callback function to pull form input data from aside form child components.
    handleChangeValue = (newContent) => {
      console.log(newContent)
      let newCardArray = this.state.cards;
      newCardArray = newCardArray.map((card) => {
        if (card.cardId === this.state.targetCard) {
          card = newContent;
          card.cardId = this.state.targetCard;
          return card;
        } else {
          return card;
        }
      })
      this.setState({
        cards: newCardArray
      })
    }

    handleStyleChange = (newStyleContent) => {
      let newCardArray = this.state.cards;
      newCardArray = newCardArray.map((card, index) => {
        if ( card.cardId === this.state.targetCard) {
          let cardId = this.state.targetCard;
          card.titleSize = newStyleContent.titleSize;
          card.titleColor = newStyleContent.titleColor;
          card.bodySize = newStyleContent.bodySize;
          card.bodyColor = newStyleContent.bodyColor;
          card.panelCorners = newStyleContent.panelCorners;
          card.panelColor = newStyleContent.panelColor;
          return card;
        } else {
          return card;
        }
      })

      this.setState({
        cards: newCardArray
      })
      // console.log(this.state)
    }




  render() {
    this.checkCardsLeft();

    const stateStyles = reactCSS({
      'default': {
        titleColor: {
          color: `${this.state.titleColor}`
        },
        titleSize: {
          fontSize: `${this.state.titleSize}`
        },
        bodyColor: {
          color: `${this.state.bodyColor}`
        },
        bodySize: {
          fontSize: `${this.state.bodySize}`
        },
        panelColor: {
          background: `${this.state.panelColor}`
        },
        panelCorners: {
          borderRadius: `${this.state.panelCorners}`
        }
      }
    })
    
    let styleChange;
    let borderChange = () => {
      if (this.state.asideOpen === true) {
        styleChange = 'addBorder';
        console.log(styleChange);
      } else {
        styleChange = 'noBorder';
        console.log(styleChange);
      }
      console.log(styleChange)
    }
    //define cards and duplicate based on array in state
    let cards;
    cards = this.state.cards.map((card, index) => {
      console.log(card);

      return (
        <div className={"card " + styleChange} key={index} id={'card-'+index} data-id={index} onClick={borderChange()}>
          {this.borderChange}
          <div className="cardTitle">
            <h2 >{this.state.cards[index].titleText}</h2>
            <div className="cardOptions">
              <Button
                type="link"
                size="small"
                onClick={() => {this.toggleAside(card.cardId)}}
                icon={<img src={edit} alt="click here to style your card" />}
              ></Button>
              <Button
                type="link"
                size="small"
                onClick={() => {this.addNewCard(card.cardId)}}
                icon={
                  <img src={duplicate} alt="click here to add a new card" />
                }
              ></Button>
              <Button
                type="link"
                size="small"
                onClick={() => {this.removeCard(card.cardId)}}
                icon={
                  <img
                    src={this.deleteButtonOptions}
                    alt="click here to delete card"
                  />
                }
              ></Button>
            </div>
          </div>
          <div className="cardBody">
            {/* This will be a component that recieves input via props */}
            <p>{this.state.cards[index].bodyText}</p>
          </div>
        </div>
      );
    });

    //written ternary syntax alternative to conditional if statement
    let drawer = this.state.asideOpen === true ? <Aside onChangeValue={this.handleChangeValue} onStyleChange={(e) => {this.handleStyleChange(e)}} currentCardId={this.state.targetCard}/> : null;




    return (
      <div className="app">
        <header>
          <Header />
        </header>

        {drawer}

        <main onClick={() => {this.toggleOff()}}>{cards}</main>
      </div>
    );
  }

  //pencil to edit content
}

export default App;
