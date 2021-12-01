import React from 'react';


const Form = () => {
      return(
        <form>
            <label for="title">Title Text
                <input type="text" id="title" name="title" placeholder="Enter custom title" />
            </label>
            <label for="body">Body Text
                <textarea id="body" name="body" rows="5" cols="50" placeholder="Enter custom text">
                </textarea>
            </label>
        </form>
      )  
    } 

export default Form;