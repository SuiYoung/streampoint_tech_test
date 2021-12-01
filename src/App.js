//import functions from React library
import React, { Component } from "react";

// import css for the App Component
import './App.css'; 

//import css for the antd design for react
import 'antd/dist/antd.css';

//import image assets
import duplicate from './assets/duplicate-ant-design_copy-twotone.png';
import edit from './assets/edit-ant-design_edit-twotone.png';
import deleteButton from './assets/delete-ant-design_delete-twotone.png';
import deleteButtonGray from './assets/delete-grey-ant-design_delete-twotone.png';

//import components from antd
import { Button } from 'antd';

//import components
import Header from "./Components/Header";
import Aside from "./Components/Aside";

class App extends Component {
  constructor() {
    super();
    this.state={
      asideOpen: false,
      cards:[ 'card' ]
    };
  }
  
  componentDidMount() {
    window.addEventListener("click", this.hideAside)
  }
  
  render() {
    //functionality codes here:
    //function to slide drawer on click
    // function to slide the aside in and out.
    let toggle;
    toggle = () => {
      this.setState(prevState => {
        return { asideOpen: !prevState.asideOpen };
      });
    };

    //Duplicate card on click
    let addNewCard;
    addNewCard = () => {
      let newCard = [...this.state.cards];
      newCard.push('newCard');
      this.setState({ cards: newCard })
    }
    
    let removeCard;
    removeCard = (index) => {
        if (this.state.cards.length === 1) {
          console.log('default cannot delete');
          return null;
          
        } else {
          const currentCards = [...this.state.cards];
          currentCards.splice(index, 1);
          this.setState({ cards: currentCards });
        }
    }
    
    //define gray out options for the delete card button if there is only 1 card; gray-out the trash can.
    let deleteButtonOptions;
    if (this.state.cards.length === 1) {
        deleteButtonOptions = deleteButtonGray;
    } else {
        deleteButtonOptions = deleteButton;
    }

    //define the styling drawer
    let drawer;
    if (this.state.asideOpen) {
      drawer = <Aside toggle={toggle}/>;
    }

    let cards;
    cards = this.state.cards.map((card, index) => {
      return <div className="card" key={index} id={card}>           
            <div className="cardTitle">
                {/* This will be a component that recieves input via props */}
                <h2>Custom Title</h2> 
                <div class="cardOptions">
                    <Button type="link" size="small" onClick={toggle} icon={<img src={edit} alt="click here to style your card" />}>
                    </Button>
                    <Button type="link" size="small" onClick={addNewCard} icon={<img src={duplicate} alt="click here to add a new card" />}>
                    </Button>
                    <Button type="link" size="small" onClick={removeCard} icon={<img src={deleteButtonOptions} alt="click here to delete card" />}>
                    
                    </Button>
                </div>
            </div>
            <div className="cardBody">
                {/* This will be a component that recieves input via props */}
                <p>Custom Body Text</p>
            </div>
        </div>
      })
    
    return(
      <div className="app">
        {/* header: SPSASGMT */}
        <header>
          <Header />
        </header>

        {drawer}

        <main>
          {cards}
        </main>

      </div>
    );
  }

  

  //pencil to edit content

}



export default App;
