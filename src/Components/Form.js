import React, {Component} from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state={
            titleText:"",
            bodyText:"",
            cardID:""
        };
    }
    // set callback from parent to retrieve state from this child class component

    handleInputChange = (e) => {
            this.setState({ 
                titleText: e.target.value,
                bodyText: e.target.value
            });
            console.log(this.state)
        }
    
    render() {
        
        const handleSubmit = (e) => {
            e.preventDefault();
            alert(`you've entered: ${this.state.titleText} for the title, and ${this.state.bodyText} for your body.`)
        }
        return(
          <form onSubmit={handleSubmit}>
              <label for="title">Title Text
                  <input type="text" id="title" name="title" placeholder="Enter custom title" value={this.props.titleText} onChange={(e) => this.setState({titleText: e.target.value})}/>
              </label>
              <label for="body">Body Text
                  <textarea id="body" name="body" rows="5" cols="50" placeholder="Enter custom text" value={this.state.bodyText} onChange={(e) => this.setState({bodyText: e.target.value})}>
                  </textarea>
              </label>
          </form>
          
        ) 
      } 
    }

export default Form;