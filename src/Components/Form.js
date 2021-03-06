import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state={
            titleText:"",
            bodyText:"",
            cardId: ""
        };
    }

    
    render() {
        
        const handleSubmit = (e) => {
                e.preventDefault();

                this.props.onChangeValue(this.state);
            }
            
        // press enter to submit the information to state
        const onEnterPress = e => {
            if (e.key === "Enter" && !e.shiftKey) {
                // e.preventDefault();
                handleSubmit(e); 
            }
        };

        return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title Text
                <input 
                    type="text" 
                    id="title" 
                    name="title" 
                    placeholder="Enter custom title"  
                    onChange={(e) => {
                    this.setState({ titleText: e.target.value })
                }}/>
            </label>
            <label htmlFor="body">Body Text
                <textarea 
                    id="body" 
                    name="body" 
                    rows="5" 
                    cols="50" 
                    placeholder="Enter custom text" 
                    onChange={(e) => {
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