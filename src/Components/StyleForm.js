import React, { Component } from 'react';
import reactCSS from 'reactcss';

//import color picker;
import { BlockPicker  } from 'react-color';


class StyleForm extends Component {
    constructor() {
        super();
        this.state = {
            displayColorPicker: false,
            color:{
                r: '241',
                g: '112',
                b: '19',
                a: '1',
                },
            };
        }

        handleClick = () => {
            this.setState({ displayColorPicker: !this.state.displayColorPicker })
        };

        handleClose = () => {
            this.setState({ displayColorPicker: false })
        };

        handleChange = (color) => {
            this.setState({ color: color.rgb })
        };

        render() {

            const styles = reactCSS({
                'default': {
                    color: {
                    width: '36px',
                    height: '36px',
                    borderRadius: '2px',
                    background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
                    },
                    swatch: {
                    padding: '5px',
                    background: '#fff',
                    borderRadius: '1px',
                    boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                    display: 'inline-block',
                    cursor: 'pointer',
                    },
                    popover: {
                    position: 'absolute',
                    zIndex: '2',
                    },
                    cover: {
                    position: 'fixed',
                    top: '0px',
                    right: '0px',
                    bottom: '0px',
                    left: '0px',
                    },
                },
            });

        return(
            <form>
                <div>
                    <h3>Title</h3>
                    <label for="titleSize">Size
                        <input type="text" id="titleSize" name="titleSize" placeholder="36px" />
                    </label>
                    <div>
                        <div style={ styles.swatch } onClick={ this.handleClick }>
                        <div style={ styles.color } />
                        </div>
                        { this.state.displayColorPicker ? <div style={ styles.popover }>
                        <div style={ styles.cover } onClick={ this.handleClose }/>
                        <BlockPicker color={ this.state.color } onChange={ this.handleChange } />
                        </div> : null }

                    </div>
                </div>

                <div>
                    <h3>Body</h3>
                    <label for="bodyStyle">Size
                        <input type="text" id="bodyStyle" name="bodyStyle" placeholder="16px" />
                    </label>
                    <label for="sizeColor">Color
                        <input type="color" id="sizeColor" name="sizeColor" value="##4F4F4F" />
                    </label>
                </div>
                <div>
                    <h3>Panel</h3>
                    <label for="panel">Corner Radius
                        <input type="text" id="panel" name="panel" placeholder="16px" />
                    </label>
                    <label for="panelColor">Color
                        <input type="color" id="panelColor" name="panelColor" value="##FFFFFF" />
                    </label>
                </div>
            </form>
        );  
    }
}

    

export default StyleForm;