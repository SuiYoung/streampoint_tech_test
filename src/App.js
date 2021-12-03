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
          titleText: 'Custom title',
          bodyText: 'Custom body text',
          cardId: 0,
          titleSize: '25px',
          titleColor: "#000000",
          bodySize: '14px',
          bodyColor: "#000000",
          panelCorners: '16px',
          panelColor: "#FFFFFF",
          border: 'none'
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
        titleText: `Custom title`,
        bodyText: 'Custom body text',
        cardId: cardsArraySize,
        titleSize:'25px',
        titleColor: "#000000",
        bodySize: '14px',
        bodyColor: "#000000",
        panelCorners: '16px',
        panelColor: "#FFFFFF",
        border: 'none'
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
      let newCardArray = [...this.state.cards];
      newCardArray = newCardArray.map((card) => {
        if (card.cardId === this.state.targetCard) {
          card.titleText = newContent.titleText;
          card.bodyText = newContent.bodyText;
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
    }

    handleSelectedCardBorder = () => {
      let selectedCardArray = this.state.cards;
      selectedCardArray = selectedCardArray.map((card, index) => {
        if (card.id === this.state.targetCard) {
          card.border = '1px solid #00A3FF'
          return card;
        } else {
          return card;
        }
      })
      this.setState({ cards: selectedCardArray })
    }


  render() {
    this.checkCardsLeft();
    
    //define cards and duplicate based on array in state 
    //refactor this section into it's own components if there's time.
    let cards;
    cards = this.state.cards.map((card, index) => {

      // define style object that will become insline styles to override css files with user styles
      const stateStyles = reactCSS({
        'default': {
          titleStyles: {
            color: `${card.titleColor}`,
            fontSize: `${card.titleSize}`
          },
          bodyStyles: {
            color: `${card.bodyColor}`,
            fontSize: `${card.bodySize}`
          },
          panelStyles: {
            background: `${card.panelColor}`,
            borderRadius: `${card.panelCorners}`
          },
          border: {
            border: `${card.border}`,
            background: `${card.panelColor}`,
            borderRadius: `${card.panelCorners}`
          },
          borderCardActive: {
            border: '1px solid #00A3FF',
            background: `${card.panelColor}`,
            borderRadius: `${card.panelCorners}`
          }
        }
      })

      return (
        <div className="card" style={
          card.cardId === this.state.targetCard ? stateStyles.borderCardActive : stateStyles.border
        } key={index} id={'card-'+index} data-id={index} >
          <div className="cardTitle">
            <h2 style={stateStyles.titleStyles}>{this.state.cards[index].titleText}</h2>
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
            <p style={stateStyles.bodyStyles}>{this.state.cards[index].bodyText}</p>
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
