import React, {Component} from 'react';

class Form extends Component {
    constructor(onChangeValue) {
        super(onChangeValue);
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
        }
        
        render() {
            console.log (this.onChangeValue);
            const handleSubmit = (e) => {
                e.preventDefault();
                console.log(this.state)
            alert(`you've entered: ${this.state.titleText} for the title, and ${this.state.bodyText} for your body.`)
            }

            return(
            <form onSubmit={handleSubmit}>
                <label for="title">Title Text
                    <input 
                        type="text" 
                        id="title" 
                        name="title" 
                        placeholder="Enter custom title"  
                        onChange={(e) => {
                        console.log( e.target.value )
                    
                        this.setState({ titleText: e.target.value })
                    }}/>
                </label>
                <label for="body">Body Text
                    <textarea 
                        id="body" 
                        name="body" 
                        rows="5" 
                        cols="50" 
                        placeholder="Enter custom text" 
                        onChange={(e) => {console.log( e.target.value )
                    
                        this.setState({ bodyText: e.target.value })
                        }}
                    >
                    </textarea>
                </label>
                <input type="submit" onClick={this.onChangeValue} /> 
            </form>
            
            ) 
         } 
     }

export default Form;