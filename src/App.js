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

    this.cardRef=React.createRef();

    this.state={
      asideOpen: false,
      cards:[ 'card' ]
    };
  }
  
  render() {
    //functionality codes here:
    //function to slide drawer on click
    // function to slide the aside in and out.
    let toggle;
    toggle = () => {
      if (this.state.asideOpen === false) {
      let newState = {
        asideOpen: true,
        cards: [...this.state.cards],
      };
      this.setState(newState);
    } else {
      let newState = {
        asideOpen: false,
        cards: [...this.state.cards],
      };
      this.setState(newState);
    }
      // this.setState(prevState => {
      //   console.log('togglestate changing')
      //   return { asideOpen: !prevState.asideOpen };
      // });
    };

    let closeDrawer = () => {
      this.setState({
        asideOpen: false
      })
    }

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
          return ;
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
    let drawer = this.state.asideOpen === true ? <Aside /> : null;
    
    let collectCardId = (e) => {
      console.log(e.currentTarget.id);
    }

    let customTitle;
    let customBody;

    let cards;
    cards = this.state.cards.map((card, index) => {
      
      return <div className="card" key={index} id={"card-"+index}>           
            <div className="cardTitle">
                {/* This will be a component that recieves input via props */}
                <h2>Custom Title {customTitle}</h2> 
                <div class="cardOptions" onClick={collectCardId}>
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
                <p>Custom Body Text{customBody}</p>
            </div>
        </div>
      })
    

      
    return(
      <div className="app" onClick={() => toggle()}>
        <header>
          <Header />
        </header>
        <div onClick={() => toggle()}>{drawer}</div>

        <main>
          {cards}
        </main>

      </div>
    );
  }

  
}



export default App;
