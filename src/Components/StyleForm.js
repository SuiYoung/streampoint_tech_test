import React from 'react';

//import color picker;
import { BlockPicker  } from 'react-color';

const StyleForm = () => {
      return(
        <form>
            <div>
                <h3>Title</h3>
                <label for="titleSize">Size
                    <input type="text" id="titleSize" name="titleSize" placeholder="36px" />
                </label>
                <label for="titleColor">Color
                    <input type="color" id="titleColor" name="titleColor" value="#e66465" />
                </label>
            </div>

            <div>
                <h3>Body</h3>
                <label for="bodyStyle">Size
                    <input type="text" id="bodyStyle" name="bodyStyle" placeholder="16px" />
                </label>
                <label for="titleColor">Color
                    <input type="color" id="titleColor" name="titleColor" value="#e66465" />
                </label>
            </div>
            <div>
                <h3>Panel</h3>
                <label for="panel">Corner Radius
                    <input type="text" id="panel" name="panel" placeholder="16px" />
                </label>
                <label for="titleColor">Color
                    <input type="color" id="titleColor" name="titleColor" value="#e66465" />
                </label>
            </div>
        </form>
      )  
    } 

export default StyleForm;