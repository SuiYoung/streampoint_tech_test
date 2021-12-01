import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state={
            titleText:"",
            bodyText:"",
            cardID:""
        };
    }

    
    render() {
        
        const handleSubmit = (e) => {
                e.preventDefault();
                console.log(this.state)

                console.log(this.props);

                this.props.onChangeValue(this.state);
                
                // just as a confirmation
                alert(`you've entered: ${this.state.titleText}, for the title, and: ${this.state.bodyText}, for your body.`)
            }

            const onEnterPress = e => {
                if (e.key === "Enter" && !e.shiftKey) {
                  // e.preventDefault();
                  handleSubmit(); // this won't be triggered
                }
            };

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
                        onKeyPress={onEnterPress}
                    >
                    </textarea>
                </label>
                <input className="hiddenInput" type="submit" onClick={this.props.onChangeValue} /> 
            </form>
            
            ) 
         } 
     }

export default Form;