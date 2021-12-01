//import functions from React library
import React, { Component } from "react";
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
      cards: [
        {
        'card': 'card',
        titleText: 'Custom title',
        bodyText: 'Custom body text'
        },
      ],
      titleText:"",
      bodyText:"",
      cardID:""
    };
  }

  //Duplicate card on click
  addNewCard = () => {
    let newCard = [...this.state.cards];
    newCard.push("newCard");
    this.setState({ cards: newCard });
  };

  removeCard = (index) => {
    if (this.state.cards.length === 1) {
      return;
    } else {
      const currentCards = [...this.state.cards];
      currentCards.splice(index, 1);
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
  toggleAside = () => {
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
  };

  toggleOff = () => {
    if (this.state.asideOpen === true) {
      this.toggleAside()
    } else {
      return;
    };
  }

  handleChangeValue = (e) => {
    this.setState({
      titleText: e.props.value,
      bodyText: e.props.value
    })
    console.log(this.state)
  }

  render() {
    this.checkCardsLeft();

    //collect card id
    let id;
    console.log(this.state);
    //define cards and duplicate based on array in state
    let cards;
    cards = this.state.cards.map((card, index) => {
      id = {index};
      console.log(id);

      return (
        <div className="card" key={index} id={'card-'+index} data-id={index}>
          {this.handleChange}
          <div className="cardTitle">
            {this.state.titleText}
            <h2>Custom Title</h2>
            <div class="cardOptions">
              <Button
                type="link"
                size="small"
                onClick={this.toggleAside}
                icon={<img src={edit} alt="click here to style your card" />}
              ></Button>
              <Button
                type="link"
                size="small"
                onClick={this.addNewCard}
                icon={
                  <img src={duplicate} alt="click here to add a new card" />
                }
              ></Button>
              <Button
                type="link"
                size="small"
                onClick={this.removeCard}
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
            <p>Custom Body Text</p>
          </div>
        </div>
      );
    });

    let drawer = this.state.asideOpen === true ? <Aside onChangeValue={this.handleChangeValue} /> : null;

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
